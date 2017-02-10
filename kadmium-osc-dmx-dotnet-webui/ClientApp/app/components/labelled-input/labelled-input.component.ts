import { Component, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'labelled-input',
    template: require('./labelled-input.component.html')
})
export class LabelledInputComponent
{
    @Input() private label: string;
    @Input() private inputElement: any;

    constructor()
    {

    }
}