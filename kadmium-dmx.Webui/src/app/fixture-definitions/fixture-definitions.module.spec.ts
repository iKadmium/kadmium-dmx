import { FixtureDefinitionsModule } from './fixture-definitions.module';

describe('FixtureDefinitionsModule', () => {
	let fixtureDefinitionsModule: FixtureDefinitionsModule;

	beforeEach(() => {
		fixtureDefinitionsModule = new FixtureDefinitionsModule();
	});

	it('should create an instance', () => {
		expect(fixtureDefinitionsModule).toBeTruthy();
	});
});
