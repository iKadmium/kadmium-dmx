import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from "@angular/forms";
import { MatCard, MatCardContent, MatFormField, MatIcon, MatInput, MatSpinner, MatToolbar, MatInputModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { APIClient, FixtureDefinitionSkeleton } from 'api';
import { SidenavToggleComponent } from 'app/sidenav-toggle/sidenav-toggle/sidenav-toggle.component';
import { from } from 'rxjs';
import { BusyCardComponent } from '../../busy-card/component/busy-card.component';
import { DeleteConfirmService } from '../../services/delete-confirm.service';
import { FileReaderService } from '../../services/file-reader.service';
import { MessageService } from '../../services/message.service';
import { FixtureDefinitionsComponent } from './fixture-definitions.component';

describe('FixtureDefinitionsComponent', () =>
{
	let component: FixtureDefinitionsComponent;
	let fixture: ComponentFixture<FixtureDefinitionsComponent>;

	let definitions: FixtureDefinitionSkeleton[];

	beforeEach(async(() =>
	{
		definitions = [
			{ manufacturer: "Manufacturer", model: "First" },
			{ manufacturer: "Manufacturer", model: "Second" }
		];

		TestBed.configureTestingModule({
			declarations: [
				FixtureDefinitionsComponent,
				SidenavToggleComponent,
				BusyCardComponent,
			],
			imports: [
				ReactiveFormsModule,
				RouterTestingModule,
				NoopAnimationsModule,
				MatCardModule,
				MatInputModule,
				MatFormFieldModule,
				MatToolbarModule,
				MatIconModule,
				MatProgressSpinnerModule,
			],
			providers: [
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getFixtureDefinitions: from([definitions]),
						postFixtureDefinition: from([]),
						putFixtureDefinition: from([]),
						deleteFixtureDefinition: from([])
					})
				},
				{ provide: DeleteConfirmService, useValue: jasmine.createSpyObj<DeleteConfirmService>({ confirm: Promise.resolve(true) }) },
				{
					provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({
						error: null,
						info: null
					})
				},
				{ provide: FileReaderService, useValue: jasmine.createSpyObj<FileReaderService>({ read: Promise.resolve(null) }) }
			]
		});

		TestBed.compileComponents();

		fixture = TestBed.createComponent(FixtureDefinitionsComponent);
		component = fixture.componentInstance;
	}));

	describe('component', () =>
	{
		it('should create', async (done: () => void) =>
		{
			fixture.detectChanges();
			await fixture.whenStable();
			expect(component).toBeTruthy();
			expect(component.loading).toBeFalsy();
			done();
		});
	});

	describe('template', () =>
	{
		it('should contain an entry for each fixture definition', async (done: () => void) =>
		{
			fixture.detectChanges();
			await fixture.whenStable();
			fixture.detectChanges();
			expect(component.loading).toBeFalsy();
			expect(component.skeletons).toEqual(definitions);
			const doc: HTMLElement = fixture.nativeElement;
			const table = doc.querySelector("table");
			expect(table).toBeTruthy();
			const rows = Array.from(table.querySelectorAll("tr"));
			expect(rows.length).toEqual(definitions.length);
			for (let i = 0; i < rows.length; i++)
			{
				const row = rows[i];
				const definition = definitions[i];
				const text = row.querySelector("td").firstChild.textContent.trim();
				expect(text).toEqual(definition.manufacturer + " " + definition.model);
			}
			done();
		});
	});
});
