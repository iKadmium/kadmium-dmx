import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from "@angular/platform-browser";
import { APIClient, IGroupData } from 'api';
import { MessageService } from 'app/message.service';
import { AnimationLibrary } from "../animation-library";
import { EditorService } from '../editor.service';
import { FileReaderService } from '../file-reader.service';
import { FileSaverService } from '../file-saver.service';
import { Saveable } from '../unsaved-changes';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class GroupsComponent implements Saveable, OnInit
{
    public groups: IGroupData[];

    public saving: boolean;
    public loading: boolean;

    @ViewChild("groupsForm") formChild: NgForm;

    constructor(
        private apiClient: APIClient,
        private messageService: MessageService,
        private fileReader: FileReaderService,
        private fileSaver: FileSaverService,
        private editorService: EditorService<IGroupData[]>,
        title: Title)
    {
        title.setTitle("Groups");
        this.saving = false;
        this.loading = true;
    }

    ngOnInit()
    {
        try
        {
            this.apiClient.getGroups()
                .toPromise()
                .then(response => 
                {
                    this.groups = response;
                    this.sortGroups();
                    this.loading = false;
                    this.editorService.setActive(this.groups);
                });
        }
        catch (error)
        {
            this.messageService.error(error);
        }
    }

    private getNextOrder(): number
    {
        let maxOrder = 0;
        this.groups.forEach(value => 
        {
            if (value.order > maxOrder)
            {
                maxOrder = value.order;
            }
        });
        return maxOrder + 1;
    }

    public add(): void
    {
        let group: IGroupData = {
            name: "",
            order: this.getNextOrder()
        };

        this.groups.push(group);
        this.editorService.isDirty = true;
    }

    public delete(group: IGroupData): void
    {
        let index = this.groups.indexOf(group);
        this.groups.splice(index, 1);
        this.editorService.isDirty = true;
    }

    public swap(oldIndex: number, newIndex: number): void
    {
        let oldOrder = this.groups[oldIndex].order;
        let newOrder = this.groups[newIndex].order;
        this.groups[oldIndex].order = newOrder;
        this.groups[newIndex].order = oldOrder;
        this.sortGroups();
        this.editorService.isDirty = true;
    }

    public getOtherGroupNames(group: IGroupData): string[]
    {
        let otherGroups = this.groups.filter(x => x != group);
        let otherGroupNames = otherGroups.map(x => x.name);
        return otherGroupNames;
    }

    public getElementIndex(group: IGroupData): number
    {
        return this.groups.indexOf(group);
    }

    private sortGroups(): IGroupData[]
    {
        return this.groups.sort((a, b) => a.order - b.order);
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            await this.apiClient.putGroups({ groups: this.groups }).toPromise();
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

    public download(): void
    {
        try
        {
            this.fileSaver.save("groups.json", this.groups);
        }
        catch (error)
        { }
    }

    public upload(fileInput: HTMLInputElement): void
    {
        fileInput.click();
    }

    public async filesSelected(files: File[]): Promise<void>
    {
        for (let file of files)
        {
            await this.uploadFile(file);
        }
    }

    private async uploadFile(file: File): Promise<void>
    {
        try
        {
            let groups = await this.fileReader.read<IGroupData[]>(file);
            groups.sort((a, b) => a.order - b.order);
            for (let group of groups)
            {
                group.order = this.getNextOrder();
                this.groups.push(group);
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
