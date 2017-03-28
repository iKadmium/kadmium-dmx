import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { Overlay } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { LookService } from "./look.service";
import { GroupService } from "../groups/group.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { Look, LookSetting, AttributeLookSetting, ColorLookSetting } from "./look";
import { Group } from "../groups/group";

@Component({
    selector: 'look-editor',
    template: require('./look-editor.component.html'),
    providers: [LookService, GroupService]
})
export class LookEditorComponent implements OnInit
{
    private id: number | null;

    private allGroups: Group[];
    private look: Look;
    private saving: boolean;
    private activeGroup: Group;

    constructor(private route: ActivatedRoute, private lookService: LookService, private groupService: GroupService,
        overlay: Overlay, vcRef: ViewContainerRef, private messageBarService: MessageBarService, private modal: Modal, private title: Title)
    {
        this.allGroups = [];
        this.saving = false;
        this.activeGroup = null;
    }

    ngOnInit(): void
    {
        this.id = this.route.snapshot.params['id'];

        if (this.isNewItem())
        {
            this.title.setTitle("Look Editor - New Look");
            this.look = new Look();
        }
        else
        {
            this.lookService
                .get(this.id)
                .then(look =>
                {
                    this.look = look;
                    this.title.setTitle(`Look Editor - ${this.look.name}`);
                })
                .catch(reason => this.messageBarService.add("Error", reason));
        }

        this.groupService
            .get()
            .then(groups =>
            {
                this.allGroups = groups;
                this.activeGroup = this.allGroups.length > 0 ? this.allGroups[0] : null;
            })
            .catch(reason => this.messageBarService.addError(reason));
    }

    private addAttributeSetting(group: Group): void
    {
        let lookSetting = new AttributeLookSetting();
        lookSetting.group = group.name;
        this.look.attributeLookSettings.push(lookSetting);
    }

    private addColorSetting(group: Group): void
    {
        let lookSetting = new ColorLookSetting();
        lookSetting.group = group.name;
        this.look.colorLookSettings.push(lookSetting);
    }

    private removeColorSetting(setting: ColorLookSetting): void
    {
        let index = this.look.colorLookSettings.indexOf(setting as ColorLookSetting);
        this.look.colorLookSettings.splice(index, 1);
    }

    private removeAttributeSetting(setting: AttributeLookSetting): void
    {
        let index = this.look.attributeLookSettings.indexOf(setting as AttributeLookSetting);
        this.look.attributeLookSettings.splice(index, 1);
    }

    private hasColor(group: Group): boolean
    {
        return this.getColorSettings(group).length > 0;
    }

    private isNewItem(): boolean
    {
        return this.id == null;
    }

    private getAttributeSettings(group: Group): AttributeLookSetting[]
    {
        return this.look.attributeLookSettings.filter(x => x.group == group.name);
    }

    private getColorSettings(group: Group): ColorLookSetting[]
    {
        return this.look.colorLookSettings.filter(x => x.group == group.name);
    }

    private save(): void
    {
        this.saving = true;
        if (this.isNewItem()) 
        {
            this.lookService
                .post(this.look)
                .then(() =>
                {
                    window.location.href = "/looks";
                })
                .catch((reason) =>
                {
                    this.messageBarService.add("Error", reason);
                    this.saving = false;
                });
        }
        else
        {
            this.lookService
                .put(this.look)
                .then(() =>
                {
                    window.location.href = "/looks";
                })
                .catch((reason) =>
                {
                    this.messageBarService.add("Error", reason);
                    this.saving = false;
                });
        }
    }
}