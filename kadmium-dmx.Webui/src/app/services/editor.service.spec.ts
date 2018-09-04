import { inject, TestBed } from '@angular/core/testing';
import { EditorService } from './editor.service';
import { IFixtureDefinition } from 'api';


describe('EditorService', () =>
{
	beforeEach(() =>
	{
		TestBed.configureTestingModule({
			providers: [EditorService]
		});
	});

	it('should be created', inject([EditorService], (service: EditorService<jasmine.SpyObj<IFixtureDefinition>>) =>
	{
		expect(service).toBeTruthy();
	}));
});
