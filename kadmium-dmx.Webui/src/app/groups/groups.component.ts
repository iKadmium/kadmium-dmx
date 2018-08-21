import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { FileSaver } from "../file-saver";
import { AsyncFileReader } from "../async-file-reader";
import { NgForm } from '@angular/forms';
import { AnimationLibrary } from "../animation-library";
import { EditorComponent } from "../editor-component/editor-component";
import { APIClient, GroupData } from 'api';
import { MessageService } from 'app/message.service';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.css'],
    providers: [APIClient],
    animations: [AnimationLibrary.animations()]
})
export class GroupsComponent extends EditorComponent implements OnInit
{
    groups: GroupData[];

    public saving: boolean;
    public loading: boolean;

    @ViewChild("groupsForm") formChild: NgForm;

    constructor(private apiClient: APIClient, private messageService: MessageService, title: Title)
    {
        super();
        title.setTitle("Groups");
        this.saving = false;
        this.loading = true;
    }

    ngOnInit()
    {
        this.form = this.formChild;
        this.apiClient.getGroups()
            .toPromise()
            .then(response => 
            {
                this.groups = response;
                this.loading = false;
            }).catch(reason => this.messageService.error(reason));
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
        let group: GroupData = {
            id: "",
            name: "",
            order: this.getNextOrder()
        };

        this.groups.push(group);
    }

    public delete(group: GroupData): void
    {
        let index = this.groups.indexOf(group);
        this.groups.splice(index, 1);
    }

    public swap(oldIndex: number, newIndex: number): void
    {
        let oldOrder = this.groupsSorted[oldIndex].order;
        let newOrder = this.groupsSorted[newIndex].order;
        this.groupsSorted[oldIndex].order = newOrder;
        this.groupsSorted[newIndex].order = oldOrder;
    }

    public getOtherGroupNames(group: GroupData): string[]
    {
        let otherGroups = this.groups.filter(x => x != group);
        let otherGroupNames = otherGroups.map(x => x.name);
        return otherGroupNames;
    }

    public getElementIndex(group: GroupData): number
    {
        return this.groups.indexOf(group);
    }

    private get groupsSorted(): GroupData[]
    {
        return this.groups.sort((a, b) => a.order - b.order);
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            await this.apiClient.putGroup({ groups: this.groups }).toPromise();
            this.saved = true;
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

    public async download(): Promise<void>
    {
        try
        {
            FileSaver.Save("groups.json", this.groups);
        }
        catch (error)
        { }
    }

    public upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
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
            let groups = await AsyncFileReader.read<GroupData[]>(file);
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

}
