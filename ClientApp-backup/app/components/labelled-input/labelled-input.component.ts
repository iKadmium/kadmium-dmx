import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'labelled-input',
    template: require('./labelled-input.component.html')
})
export class LabelledInputComponent
{
    @Input() private label: string;
    @ContentChild("model") public model: ElementRef;
    @ContentChild("input") public input: ElementRef;

    constructor()
    {

    }

}