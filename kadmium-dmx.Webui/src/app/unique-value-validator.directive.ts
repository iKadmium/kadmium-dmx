import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function UniqueValueValidatorDirective<T>(unique: T[]): ValidatorFn
{
	return (c: AbstractControl): ValidationErrors | null =>
	{
		if (unique != null)
		{
			const matches = unique.filter((item: T) => c.value === item);
			if (matches.length > 0)
			{
				return { unique: { valid: false } };
			}
			return null;
		}
	};
}