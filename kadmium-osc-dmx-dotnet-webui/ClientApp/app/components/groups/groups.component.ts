import { Component, ViewChild } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { GroupsService } from "./groups.service";
import { Group } from "./group";

@Component({
    selector: 'groups',
    template: require('./groups.component.html'),
    providers: [GroupsService]
})
export class GroupsComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;

    saving: boolean;
    groups: Group[];

    constructor(private groupsService: GroupsService)
    {
        this.saving = false;
        this.groupsService
            .get()
            .then((value: Group[]) => this.groups = value)
            .catch((reason) => this.messageBar.add("Error", reason));
    }

    private add(): void
    {
        this.groups.push(new Group(""));
    }

    private delete(group: Group): void
    {
        let index = this.groups.indexOf(group);
        this.groups.splice(index, 1);
    }

    private move(group: Group, offset: number): void
    {
        let old_index = this.groups.indexOf(group);
        let new_index = old_index + offset;

        this.groups.splice(new_index, 0, this.groups.splice(old_index, 1)[0]);
    }

    private validate(): boolean
    {
        let result = this.groups.every((value: Group) => value.name != "" && value.name != undefined && value.name != null);
        return result;
    }

    private get groupNames(): string[]
    {
        return this.groups.map((value: Group) => value.name);
    }

    private async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            await this.groupsService.put(this.groups);
            this.messageBar.add("Success", "Saved successfully")
        }
        catch (reason)
        {
            this.messageBar.add("Error", reason);
        }
        finally
        {
            this.saving = false;
        }
    }
}
