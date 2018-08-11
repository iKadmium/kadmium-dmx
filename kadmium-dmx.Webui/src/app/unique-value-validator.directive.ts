import { Directive, forwardRef, Input, Attribute } from '@angular/core';
import { NG_VALIDATORS, FormControl, ValidatorFn, AbstractControl } from "@angular/forms";

@Directive({
    selector: '[unique][ngModel],[unique][formControl]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => UniqueValueValidatorDirective), multi: true }
    ]
})
export class UniqueValueValidatorDirective
{
    @Input() unique: any[];
    constructor()
    {

    }

    validate(c: FormControl)
    {
        if (this.unique != null)
        {
            let matches = this.unique.filter((item: any) => c.value === item);
            if (matches.length > 0)
            {
                return { unique: { valid: false } };
            }
            return null;
        }
    }
}
