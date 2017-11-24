import { Component, OnInit, Input } from '@angular/core';
import { FixtureDefinition, MovementAxis } from "api/models";
import { MatTableDataSource } from "@angular/material/table";

@Component({
    selector: 'app-fixture-definition-editor-movements',
    templateUrl: './fixture-definition-editor-movements.component.html',
    styleUrls: ['./fixture-definition-editor-movements.component.css']
})
export class FixtureDefinitionEditorMovementsComponent implements OnInit
{
    @Input() definition: FixtureDefinition;

    constructor() { }

    ngOnInit()
    {
    }


    public addElement(): void
    {
        this.definition.movements.push(new MovementAxis());
    }

    public removeElement(axis: MovementAxis): void
    {
        let index = this.definition.movements.indexOf(axis);
        this.definition.movements.splice(index, 1);
    }

    public getOtherElementNames(thisEntry: MovementAxis): string[]
    {
        return this.definition.movements
            .filter(value => value != thisEntry)
            .map((value: MovementAxis) => value.name);
    }

    public getElementIndex(element: MovementAxis): number
    {
        return this.definition.movements.indexOf(element);
    }

}
