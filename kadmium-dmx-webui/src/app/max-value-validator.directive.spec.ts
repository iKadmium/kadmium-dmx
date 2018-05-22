import { MaxValueValidatorDirective } from './max-value-validator.directive';

describe('MaxValueValidatorDirective', () =>
{
    it('should create an instance', () =>
    {
        const directive = new MaxValueValidatorDirective("25");
        expect(directive).toBeTruthy();
    });
});
