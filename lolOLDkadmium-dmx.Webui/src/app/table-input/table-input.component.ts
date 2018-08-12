import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'app-table-input',
    templateUrl: './table-input.component.html',
    styleUrls: ['./table-input.component.css']
})
export class TableInputComponent
{
    @Input() private label: string;
    @ContentChild("model") public model: FormControl;

    constructor()
    {
    }

}