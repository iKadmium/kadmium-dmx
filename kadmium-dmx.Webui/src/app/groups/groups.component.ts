import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Title } from "@angular/platform-browser";
import { APIClient, IGroupData } from 'api';
import { MessageService } from 'app/services/message.service';
import { AnimationLibrary } from "app/animation-library";
import { EditorService } from 'app/services/editor.service';
import { FileReaderService } from 'app/services/file-reader.service';
import { FileSaverService } from 'app/services/file-saver.service';
import { Saveable } from 'app/unsaved-changes';
import { UniqueValueValidatorDirective } from '../unique-value-validator.directive';

@Component({
	selector: 'app-groups',
	templateUrl: './groups.component.html',
	styleUrls: ['./groups.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class GroupsComponent implements Saveable, OnInit
{
	public saving: boolean;
	public loading: boolean;

	public form: FormGroup;
	public groups: FormArray;

	constructor(
		private apiClient: APIClient,
		private messageService: MessageService,
		private fileReader: FileReaderService,
		private fileSaver: FileSaverService,
		private editorService: EditorService<IGroupData[]>,
		private formBuilder: FormBuilder,
		title: Title)
	{
		title.setTitle("Groups");
		this.saving = false;
		this.loading = true;

		this.groups = formBuilder.array([]);
		this.form = formBuilder.group({
			groups: this.groups
		});
	}

	ngOnInit()
	{
		try
		{
			this.apiClient
				.getGroups()
				.toPromise()
				.then(response =>
				{
					for (const group of response)
					{
						this.add(group.name);
					}
					this.editorService.isDirty = false;
					this.loading = false;
				});
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

	public add(name: string = ""): void
	{
		this.groups.push(this.formBuilder.control(name, [UniqueValueValidatorDirective<IGroupData>(this.groups.value)]));
		this.editorService.isDirty = true;
	}

	public delete(index: number): void
	{
		this.groups.removeAt(index);
		this.editorService.isDirty = true;
	}

	public swap(oldIndex: number, newIndex: number): void
	{
		const control = this.groups.get(oldIndex + "");
		this.groups.removeAt(oldIndex);
		this.groups.insert(newIndex, control);
		this.editorService.isDirty = true;
	}

	public async save(): Promise<void>
	{
		this.saving = true;
		try
		{
			const postValue = this.getValue();
			await this.apiClient.putGroups({ groups: postValue }).toPromise();
			this.editorService.isDirty = false;
			this.messageService.info("Saved successfully");
		}
		catch (error)
		{
			this.messageService.error(error);
		}
		finally
		{
			this.saving = false;
		}
	}

	public getValue(): IGroupData[]
	{
		return this.groups.value.map((value, index) => ({ name: value, order: index }));
	}

	public download(): void
	{
		try
		{
			this.fileSaver.save("groups.json", this.getValue());
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

	public upload(fileInput: HTMLInputElement): void
	{
		fileInput.click();
	}

	public async filesSelected(files: File[]): Promise<void>
	{
		for (const file of files)
		{
			await this.uploadFile(file);
		}
	}

	private async uploadFile(file: File): Promise<void>
	{
		try
		{
			const groups = await this.fileReader.read<IGroupData[]>(file);
			groups.sort((a, b) => a.order - b.order);
			for (const group of groups)
			{
				this.add(group.name);
			}
			this.messageService.info("Successfully added " + groups.length + " groups");
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

	public hasUnsavedChanges(): boolean
	{
		return this.editorService.isDirty;
	}

}
