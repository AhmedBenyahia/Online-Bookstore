import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGallaryComponent } from './book-gallary.component';

describe('BookGallaryComponent', () => {
  let component: BookGallaryComponent;
  let fixture: ComponentFixture<BookGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
