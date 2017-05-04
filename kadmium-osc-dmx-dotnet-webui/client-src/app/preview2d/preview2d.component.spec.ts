import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Preview2DComponent } from './preview2d.component';

describe('Preview2DComponent', () =>
{
  let component: Preview2DComponent;
  let fixture: ComponentFixture<Preview2DComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [Preview2DComponent]
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(Preview2DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
