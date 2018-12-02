import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisiteFormComponent } from './carte-visite-form.component';

describe('CarteVisiteFormComponent', () => {
  let component: CarteVisiteFormComponent;
  let fixture: ComponentFixture<CarteVisiteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteVisiteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteVisiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
