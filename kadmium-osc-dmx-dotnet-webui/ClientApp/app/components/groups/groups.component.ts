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

    groups: string[];

    constructor(private groupsService: GroupsService)
    {
        this.groupsService
            .getNames()
            .then((value: string[]) => this.groups = value)
            .catch((reason) => this.messageBar.add("Error", reason));
    }
}