import { MinValueValidatorDirective } from './min-value-validator.directive';

describe('MinValueValidatorDirective', () =>
{
    it('should create an instance', () =>
    {
        const directive = new MinValueValidatorDirective("25");
        expect(directive).toBeTruthy();
    });
});
