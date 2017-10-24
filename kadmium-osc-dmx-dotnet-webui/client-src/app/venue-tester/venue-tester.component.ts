import { Component, OnInit } from '@angular/core';
import { Look, ColorLookSetting, ColorLooks, AttributeLooks, AttributeLookSetting } from "app/look";
import { LookService } from "app/look.service";
import { Title } from "@angular/platform-browser";
import { GroupService } from "api/services";
import { Group } from "api/models";

@Component({
    selector: 'app-venue-tester',
    templateUrl: './venue-tester.component.html',
    styleUrls: ['./venue-tester.component.css'],
    providers: [GroupService, LookService]
})
export class VenueTesterComponent implements OnInit
{
    public groups: Group[];
    public looks: Look[];

    public groupIndex: number;
    public lookIndex: number;

    constructor(private groupService: GroupService, private lookService: LookService, private title: Title)
    {
        this.groups = [];
        this.looks = [];
        this.groupIndex = 0;
        this.lookIndex = 0;
    }

    async ngOnInit(): Promise<void>
    {
        this.title.setTitle("Venue Tester");
        this.groups = (await this.groupService.getGroups()).data;
        let group = this.groups[0];
        this.looks =
            [
                Look.getLook("Black", Look.getColorLook(group, "#000000"), Look.getAttribute(group, "Strobe", 0)),
                Look.getLook("Red", Look.getColorLook(group, "#FF0000"), Look.getAttribute(group, "Strobe", 0)),
                Look.getLook("Green", Look.getColorLook(group, "#00FF00"), Look.getAttribute(group, "Strobe", 0)),
                Look.getLook("Blue", Look.getColorLook(group, "#0000FF"), Look.getAttribute(group, "Strobe", 0)),
                Look.getLook("White", Look.getColorLook(group, "#FFFFFF"), Look.getAttribute(group, "Strobe", 0)),
                Look.getLook("Strobing White", Look.getColorLook(group, "#FFFFFF"), Look.getAttribute(group, "Strobe", 1)),
                Look.getLook("Black", Look.getColorLook(group, "#000000"), Look.getAttribute(group, "Strobe", 0))
            ];
        this.activateLook(this.currentLook);

    }

    private activateLook(look: Look): void
    {
        for (let colorLookSetting of look.colorLookSettings)
        {
            colorLookSetting.group = this.currentGroup.name;
        }
        for (let attributeLookSetting of look.attributeLookSettings)
        {
            attributeLookSetting.group = this.currentGroup.name;
        }
        this.lookService.activate(this.currentLook, 1);
    }

    public get currentGroup(): Group
    {
        return this.groups[this.groupIndex];
    }

    public get currentLook(): Look
    {
        return this.looks[this.lookIndex];
    }

    public nextLook(): void
    {
        if (this.lookIndex == this.looks.length - 1)
        {
            if (this.groupIndex < this.groups.length - 1)
            {
                this.lookIndex = 0;
                this.groupIndex++;
                this.activateLook(this.currentLook);
            }
        }
        else
        {
            this.lookIndex++;
            this.activateLook(this.currentLook);
        }
    }

    public previousLook(): void
    {
        if (this.lookIndex == 0)
        {
            if (this.groupIndex > 0)
            {
                this.lookIndex = this.looks.length - 1;
                this.groupIndex--;
                this.activateLook(this.currentLook);
            }
        }
        else
        {
            this.lookIndex--;
            this.activateLook(this.currentLook);
        }
    }

}
