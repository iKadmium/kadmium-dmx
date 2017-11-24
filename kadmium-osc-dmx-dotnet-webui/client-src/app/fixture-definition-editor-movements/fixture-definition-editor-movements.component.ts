import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { FixtureDefinition, MovementAxis } from "api/models";
import { MatTableDataSource } from "@angular/material/table";
import { MatExpansionPanel } from '@angular/material';
import { Sleep } from 'app/sleep';

@Component({
    selector: 'app-fixture-definition-editor-movements',
    templateUrl: './fixture-definition-editor-movements.component.html',
    styleUrls: ['./fixture-definition-editor-movements.component.css']
})
export class FixtureDefinitionEditorMovementsComponent implements OnInit
{
    @Input() definition: FixtureDefinition;
    @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

    constructor() { }

    ngOnInit()
    {
    }


    public async addElement(): Promise<void>
    {
        this.definition.movements.push(new MovementAxis());
        await Sleep.sleepUntil(() => this.panels.length == this.definition.movements.length);
        this.panels.last.open();
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
