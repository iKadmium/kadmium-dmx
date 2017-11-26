import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { FixtureDefinition, DMXChannel } from "api/models";
import { MatTableDataSource } from "@angular/material/table";
import { MatExpansionPanel, MatExpansionModule } from '@angular/material';
import { Sleep } from 'app/sleep';

@Component({
    selector: 'app-fixture-definition-editor-channels',
    templateUrl: './fixture-definition-editor-channels.component.html',
    styleUrls: ['./fixture-definition-editor-channels.component.css']
})
export class FixtureDefinitionEditorChannelsComponent implements OnInit
{
    @Input() definition: FixtureDefinition;
    @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

    constructor()
    {

    }

    ngOnInit()
    {

    }

    public async addElement(): Promise<void>
    {
        let maxChannel = 0;
        this.definition.channels.forEach((value: DMXChannel) => 
        {
            if (value.address > maxChannel) 
            {
                maxChannel = value.address;
            }
        });

        let channel = new DMXChannel();
        channel.address = maxChannel + 1;
        channel.min = "0";
        channel.max = "255";
        this.definition.channels.push(channel);
        await Sleep.sleepUntil(() => this.panels.length == this.definition.channels.length);
        this.panels.last.open();
    }

    public removeElement(channel: DMXChannel): void
    {
        let index = this.definition.channels.indexOf(channel);
        this.definition.channels.splice(index, 1);
    }

    public getElementIndex(channel: DMXChannel): number
    {
        return this.definition.channels.indexOf(channel);
    }

    public getOtherElementNames(thisEntry: DMXChannel): string[]
    {
        return this.definition.channels
            .filter(value => value != thisEntry)
            .map((value: DMXChannel) => value.name);
    }

}
