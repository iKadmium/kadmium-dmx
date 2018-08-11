import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'app-labelled-input',
    templateUrl: './labelled-input.component.html',
    styleUrls: ['./labelled-input.component.css']
})
export class LabelledInputComponent implements OnInit
{
    @Input() public label: string;
    @ContentChild("model") public model: FormControl;
    @ContentChild("input") public input: ElementRef;
    inputName: string;

    constructor() { }

    ngOnInit()
    {
        let inputElement = this.input.nativeElement as HTMLInputElement;
        if (inputElement != null)
        {
            this.inputName = inputElement.name;
        }
    }

}
