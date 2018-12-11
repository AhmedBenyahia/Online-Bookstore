import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DminComponent } from './dmin.component';

describe('DminComponent', () => {
  let component: DminComponent;
  let fixture: ComponentFixture<DminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
