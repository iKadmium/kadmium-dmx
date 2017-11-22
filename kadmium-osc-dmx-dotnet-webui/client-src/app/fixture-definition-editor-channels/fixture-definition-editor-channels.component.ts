import { Component, OnInit, Input } from '@angular/core';
import { FixtureDefinition, DMXChannel } from "api/models";
import { MatTableDataSource } from "@angular/material/table";

@Component({
    selector: 'app-fixture-definition-editor-channels',
    templateUrl: './fixture-definition-editor-channels.component.html',
    styleUrls: ['./fixture-definition-editor-channels.component.css']
})
export class FixtureDefinitionEditorChannelsComponent implements OnInit
{
    @Input() definition: FixtureDefinition;

    public displayedColumns = ['address', 'name', 'min', 'max', 'actions'];
    public dataSource: MatTableDataSource<DMXChannel>;

    constructor() { }

    ngOnInit()
    {
        this.dataSource = new MatTableDataSource<DMXChannel>(this.definition.channels);
    }

    public updateElements(): void
    {
        this.dataSource._updateChangeSubscription();
    }

    public addElement(): void
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
        this.definition.channels.push(channel);
        this.updateElements();
    }

    public removeElement(channel: DMXChannel): void
    {
        let index = this.definition.channels.indexOf(channel);
        this.definition.channels.splice(index, 1);
        this.updateElements();
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
