import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchBarComponent } from './book-search-bar.component';

describe('BookSearchBarComponent', () => {
  let component: BookSearchBarComponent;
  let fixture: ComponentFixture<BookSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
