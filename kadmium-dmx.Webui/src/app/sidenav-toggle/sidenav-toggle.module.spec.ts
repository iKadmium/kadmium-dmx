import { SidenavToggleModule } from './sidenav-toggle.module';

describe('SidenavToggleModule', () =>
{
	let sidenavToggleModule: SidenavToggleModule;

	beforeEach(() =>
	{
		sidenavToggleModule = new SidenavToggleModule();
	});

	it('should create an instance', () =>
	{
		expect(sidenavToggleModule).toBeTruthy();
	});
});
