import { Directive, forwardRef, ElementRef, Input, Attribute } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
    selector: '[unique][ngModel],[unique][formControl]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => UniqueValidator), multi: true }
    ]
})
export class UniqueValidator
{
    @Input() unique: any[];
    constructor() { }

    validate(c: FormControl)
    {
        if (this.unique == null)
        {
            return null;
        }
        let matches = this.unique.filter((value: any) => c.value === value);
        if (c.dirty && matches.length > 0)
        {
            return { unique: { valid: false } };
        }
    }

}