import { Component, OnInit } from '@angular/core';
import { Look, AttributeLookSetting, ColorLookSetting } from "../look";
import { ActivatedRoute, Router } from "@angular/router";
import { LookService } from "../look.service";
import { NotificationsService } from "../notifications.service";
import { Title } from "@angular/platform-browser";
import { StatusCode } from "../status-code.enum";
import { GroupService } from "api/services";
import { Group } from "api/models";

@Component({
    selector: 'app-look-editor',
    templateUrl: './look-editor.component.html',
    styleUrls: ['./look-editor.component.css'],
    providers: [LookService, GroupService]
})
export class LookEditorComponent implements OnInit
{
    private id: number | null;

    private allGroups: Group[];
    public look: Look;
    private saving: boolean;
    private activeGroup: Group;

    constructor(private route: ActivatedRoute, private lookService: LookService, private groupService: GroupService,
        private notificationsService: NotificationsService, private title: Title, private router: Router)
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
                .catch(reason => this.notificationsService.add(StatusCode.Error, reason));
        }

        this.groupService
            .getGroups()
            .then(groups =>
            {
                this.allGroups = groups.data;
                this.activeGroup = this.allGroups.length > 0 ? this.allGroups[0] : null;
            })
            .catch(reason => this.notificationsService.add(StatusCode.Error, reason));
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

    private async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            if (this.isNewItem()) 
            {
                await this.lookService.post(this.look);
                this.notificationsService.add(StatusCode.Success, "Successfully added " + this.look.name);
            }
            else
            {
                await this.lookService.put(this.look);
                this.notificationsService.add(StatusCode.Success, "Successfully updated " + this.look.name);
            }
            this.router.navigate(["../", { relativeTo: this.route }]);
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
            this.saving = false;
        }
    }

}
