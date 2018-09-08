import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviewFixture } from '../../preview-fixture';
import { DashboardFixturePreviewComponent } from './dashboard-fixture-preview.component';

describe('Preview2DFixtureComponent', () =>
{
	let component: DashboardFixturePreviewComponent;
	let fixture: ComponentFixture<DashboardFixturePreviewComponent>;

	let lightFixture: jasmine.SpyObj<PreviewFixture>;
	let contextSpy: jasmine.SpyObj<CanvasRenderingContext2D>;

	const width = 100;
	const height = 100;

	let canvasRefMock: any;

	let data: Uint8Array;

	beforeEach(async(() =>
	{
		data = new Uint8Array(512);
		data.fill(0);

		contextSpy = jasmine.createSpyObj<CanvasRenderingContext2D>({
			fillRect: null,
			beginPath: null,
			moveTo: null,
			lineTo: null,
			stroke: null
		});

		canvasRefMock = {
			nativeElement: {
				getContext: (contextType: string) => contextSpy,
				width: width,
				height: height
			}
		};

		lightFixture = jasmine.createSpyObj<PreviewFixture>({
			update: null,
			getFillStyle: "red",
			getStrokeStyle: "black",
			getPan: null,
			getTilt: null
		});

		TestBed.configureTestingModule({
			declarations: [DashboardFixturePreviewComponent]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardFixturePreviewComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should update the fixture when render is called', (done) =>
	{
		component.fixture = lightFixture as any;
		fixture.detectChanges();

		component.render(data).then(() =>
		{
			expect(lightFixture.update).toHaveBeenCalledWith(data);
			done();
		});
	});

	it('should fill the window with the colour when rendered', (done) =>
	{
		component.fixture = lightFixture as any;
		component.canvasRef = canvasRefMock;
		fixture.detectChanges();

		component.render(data).then(() =>
		{
			expect(contextSpy.fillRect).toHaveBeenCalledWith(0, 0, height, width);
			done();
		});
	});

	it('should not render pan strokes when pan is null', (done) =>
	{
		component.fixture = lightFixture as any;
		component.canvasRef = canvasRefMock;
		fixture.detectChanges();

		lightFixture.getPan.and.returnValue(null);
		component.render(data).then(() =>
		{
			expect(contextSpy.beginPath).toHaveBeenCalledTimes(0);
			expect(contextSpy.moveTo).toHaveBeenCalledTimes(0);
			expect(contextSpy.lineTo).toHaveBeenCalledTimes(0);
			expect(contextSpy.stroke).toHaveBeenCalledTimes(0);
			done();
		});
	});

	it('should render pan strokes when rendered', (done) =>
	{
		component.fixture = lightFixture as any;
		component.canvasRef = canvasRefMock;
		fixture.detectChanges();

		lightFixture.getPan.and.returnValue(0.5);
		component.render(data).then(() =>
		{
			expect(contextSpy.beginPath).toHaveBeenCalled();
			expect(contextSpy.moveTo).toHaveBeenCalledWith(width / 2, 0);
			expect(contextSpy.lineTo).toHaveBeenCalledWith(width / 2, height);
			expect(contextSpy.stroke).toHaveBeenCalled();
			done();
		});
	});

	it('should not render tilt strokes when tilt is null', (done) =>
	{
		component.fixture = lightFixture as any;
		component.canvasRef = canvasRefMock;
		fixture.detectChanges();

		lightFixture.getTilt.and.returnValue(null);
		component.render(data).then(() =>
		{
			expect(contextSpy.beginPath).toHaveBeenCalledTimes(0);
			expect(contextSpy.moveTo).toHaveBeenCalledTimes(0);
			expect(contextSpy.lineTo).toHaveBeenCalledTimes(0);
			expect(contextSpy.stroke).toHaveBeenCalledTimes(0);
			done();
		});
	});

	it('should render pan strokes when rendered', (done) =>
	{
		component.fixture = lightFixture as any;
		component.canvasRef = canvasRefMock;
		fixture.detectChanges();

		lightFixture.getTilt.and.returnValue(0.5);
		component.render(data).then(() =>
		{
			expect(contextSpy.beginPath).toHaveBeenCalled();
			expect(contextSpy.moveTo).toHaveBeenCalledWith(0, height / 2);
			expect(contextSpy.lineTo).toHaveBeenCalledWith(width, height / 2);
			expect(contextSpy.stroke).toHaveBeenCalled();
			done();
		});
	});


});
