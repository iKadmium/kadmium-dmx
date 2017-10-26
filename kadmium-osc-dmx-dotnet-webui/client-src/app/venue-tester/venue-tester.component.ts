import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { GroupService, LookService } from "api/services";
import { Group, Look, AttributeLookSetting, ColorLookSetting } from "api/models";

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
        this.looks = this.buildStockLooks();
        this.activateLook(this.currentLook);
    }

    private buildStockLooks(): Look[]
    {
        let looks = [];

        let blackColor = new ColorLookSetting();
        blackColor.color = "#000000";

        let redColor = new ColorLookSetting();
        redColor.color = "#FF0000";

        let greenColor = new ColorLookSetting();
        greenColor.color = "#00FF00";

        let blueColor = new ColorLookSetting();
        blueColor.color = "#0000FF";

        let whiteColor = new ColorLookSetting();
        whiteColor.color = "#FFFFFF";

        let strobeOff = new AttributeLookSetting();
        strobeOff.attributeName = "Strobe";
        strobeOff.attributeValue = 0;

        let strobeOn = new AttributeLookSetting();
        strobeOn.attributeName = "Strobe";
        strobeOn.attributeValue = 1;

        let black = new Look();
        black.attributeLookSettings = [strobeOff];
        black.colorLookSettings = [blackColor];
        looks.push(black);

        let red = new Look();
        red.attributeLookSettings = [strobeOff];
        red.colorLookSettings = [redColor];
        looks.push(red);

        let green = new Look();
        green.attributeLookSettings = [strobeOff];
        green.colorLookSettings = [greenColor];
        looks.push(green);

        let blue = new Look();
        blue.attributeLookSettings = [strobeOff];
        blue.colorLookSettings = [blueColor];
        looks.push(blue);

        let white = new Look();
        white.attributeLookSettings = [strobeOff];
        white.colorLookSettings = [whiteColor];
        looks.push(black);

        let whiteStrobe = new Look();
        whiteStrobe.attributeLookSettings = [strobeOn];
        whiteStrobe.colorLookSettings = [blackColor];
        looks.push(whiteStrobe);

        looks.push(black);

        return looks;
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
        this.lookService.activateLook({ look: this.currentLook, amount: 1 });
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
