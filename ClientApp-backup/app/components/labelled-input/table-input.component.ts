import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'table-input',
    template: require('./table-input.component.html')
})
export class TableInputComponent
{
    @Input() private label: string;
    @ContentChild("model") public model: ElementRef;
    @ContentChild("input") public input: ElementRef;

    constructor()
    {

    }

}