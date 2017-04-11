import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { GroupService } from "./group.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";

import { Group } from "./group";
import { AsyncFileReader } from "../../shared/async-file-reader";
import { FileSaver } from "../../shared/file-saver";

@Component({
    selector: 'groups',
    template: require('./groups.component.html'),
    providers: [GroupService]
})
export class GroupsComponent
{
    saving: boolean;
    groups: Group[];

    constructor(private groupsService: GroupService, private messageBarService: MessageBarService, title: Title)
    {
        title.setTitle("Groups");
        this.saving = false;
        this.groupsService
            .get()
            .then((value: Group[]) => this.groups = value)
            .catch((reason) => this.messageBarService.addError(reason));
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

    private add(): void
    {
        let group = new Group("");
        group.order = this.getNextOrder();
        this.groups.push(group);
    }

    private delete(group: Group): void
    {
        let index = this.groups.indexOf(group);
        this.groups.splice(index, 1);
    }

    private swap(oldIndex: number, newIndex: number): void
    {
        let oldOrder = this.groupsSorted[oldIndex].order;
        let newOrder = this.groupsSorted[newIndex].order;
        this.groupsSorted[oldIndex].order = newOrder;
        this.groupsSorted[newIndex].order = oldOrder;
    }

    private validate(): boolean
    {
        let result = this.groups.every((value: Group) => value.name != "" && value.name != undefined && value.name != null);
        return result;
    }

    private get groupsSorted(): Group[]
    {
        return this.groups.sort((a, b) => a.order - b.order);
    }

    private async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            await this.groupsService.put(this.groups);
            this.messageBarService.add("Success", "Saved successfully")
        }
        catch (reason)
        {
            this.messageBarService.addError(reason);
        }
        finally
        {
            this.saving = false;
        }
    }

    private async download(): Promise<void>
    {
        try
        {
            FileSaver.Save("groups.json", this.groups);
        }
        catch (error)
        { }
    }

    private upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    private async filesSelected(files: File[]): Promise<void>
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
            let groups = await AsyncFileReader.read<Group[]>(file);
            groups.sort((a, b) => a.order - b.order);
            for (let group of groups)
            {
                group.id = 0;
                group.order = this.getNextOrder();
                this.groups.push(group);
            }
            this.messageBarService.add("Success", "Successfully added " + groups.length + " groups");
        }
        catch (reason)
        {
            this.messageBarService.addError(reason);
        }
    }
}
