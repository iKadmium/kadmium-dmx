import { Component, OnInit, Input } from '@angular/core';
import { FixtureDefinition, ColorWheelEntry } from "api/models";
import { MatTableDataSource } from "@angular/material/table";

@Component({
    selector: 'app-fixture-definition-editor-color-wheel',
    templateUrl: './fixture-definition-editor-color-wheel.component.html',
    styleUrls: ['./fixture-definition-editor-color-wheel.component.css']
})
export class FixtureDefinitionEditorColorWheelComponent implements OnInit
{
    @Input() definition: FixtureDefinition;

    public displayedColumns = ['name', 'color', 'min', 'max', 'actions'];
    public dataSource: MatTableDataSource<ColorWheelEntry>;
    constructor() { }

    ngOnInit()
    {
        this.dataSource = new MatTableDataSource<ColorWheelEntry>(this.definition.colorWheel);
    }

    public updateElements(): void
    {
        this.dataSource._updateChangeSubscription();
    }

    public addElement(): void
    {
        this.definition.colorWheel.push(new ColorWheelEntry());
        this.updateElements();
    }

    public removeElement(axis: ColorWheelEntry): void
    {
        let index = this.definition.colorWheel.indexOf(axis);
        this.definition.colorWheel.splice(index, 1);
        this.updateElements();
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
