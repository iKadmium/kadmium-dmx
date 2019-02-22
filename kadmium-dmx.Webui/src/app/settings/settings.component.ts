import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Title } from "@angular/platform-browser";
import { APIClient } from 'api';
import { Settings } from "api/models";
import { MessageService } from '../services/message.service';
import { AnimationLibrary } from "../animation-library";
import { EditorService } from '../services/editor.service';
import { Saveable } from '../unsaved-changes';
import { DeleteConfirmService } from '../services/delete-confirm.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class SettingsComponent implements Saveable, OnInit
{
	public loading = true;
	public saving = false;

	public form: FormGroup;
	public unicast: FormArray;

	@ViewChild("settingsForm") formChild: NgForm;

	constructor(
		private apiClient: APIClient,
		private messageService: MessageService,
		private editorService: EditorService<Settings>,
		private formBuilder: FormBuilder,
		private deleteConfirm: DeleteConfirmService,
		title: Title)
	{
		title.setTitle("Settings");
		this.saving = false;

		this.unicast = this.formBuilder.array([]);
		this.form = this.formBuilder.group({
			oscPort: [9001, [Validators.min(1), Validators.max(65535), Validators.required]],
			webPort: [5000, [Validators.min(1), Validators.max(65535), Validators.required]],
			sacnTransmitter: this.formBuilder.group({
				delay: [0, [Validators.min(0), Validators.required]],
				uuid: [0, [Validators.required]],
				multicast: [true],
				unicast: this.unicast
			}),
			strobeEffectFrequency: [20, [Validators.min(1), Validators.max(40), Validators.required]]
		});
	}

	ngOnInit(): void
	{
		try
		{
			this.apiClient
				.getSettings()
				.toPromise()
				.then(response =>
				{
					this.form.patchValue(response);
					for (const address of response.sacnTransmitter.unicast)
					{
						this.addElement(address);
					}
					this.form.markAsPristine();
					this.editorService.isDirty = false;
					this.loading = false;
				});
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

	public async save(): Promise<void>
	{
		this.saving = true;
		try
		{
			await this.apiClient.putSettings({ value: this.form.value }).toPromise();
			this.editorService.isDirty = false;
			this.form.markAsPristine();
			this.messageService.info("Saved Successfully");
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

	public addElement(address: string = ''): void
	{
		this.unicast.push(this.formBuilder.control(address, [Validators.required]));
		this.editorService.isDirty = true;
	}

	public async removeElement(index: number): Promise<void>
	{
		const value = this.unicast.value[index];
		if (await this.deleteConfirm.confirm(value))
		{
			this.unicast.removeAt(index);
			this.editorService.isDirty = true;
		}
	}

	public hasUnsavedChanges(): boolean
	{
		return this.editorService.isDirty || this.form.dirty;
	}
}