import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { FixtureDefinition, ColorWheelEntry } from "api/models";
import { MatTableDataSource } from "@angular/material/table";
import { Sleep } from 'app/sleep';
import { MatExpansionPanel } from '@angular/material';

@Component({
    selector: 'app-fixture-definition-editor-color-wheel',
    templateUrl: './fixture-definition-editor-color-wheel.component.html',
    styleUrls: ['./fixture-definition-editor-color-wheel.component.css']
})
export class FixtureDefinitionEditorColorWheelComponent implements OnInit
{
    @Input() definition: FixtureDefinition;
    @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

    constructor() { }

    ngOnInit()
    {

    }

    public async addElement(): Promise<void>
    {
        this.definition.colorWheel.push(new ColorWheelEntry());
        await Sleep.sleepUntil(() => this.panels.length == this.definition.colorWheel.length);
        this.panels.last.open();
    }

    public removeElement(axis: ColorWheelEntry): void
    {
        let index = this.definition.colorWheel.indexOf(axis);
        this.definition.colorWheel.splice(index, 1);
    }

    public getOtherElementNames(thisEntry: ColorWheelEntry): string[]
    {
        return this.definition.colorWheel
            .filter(value => value != thisEntry)
            .map((value: ColorWheelEntry) => value.name);
    }

    public getElementIndex(element: ColorWheelEntry): number
    {
        return this.definition.colorWheel.indexOf(element);
    }

}
