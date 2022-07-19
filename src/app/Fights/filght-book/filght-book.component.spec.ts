import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilghtBookComponent } from './filght-book.component';

describe('FilghtBookComponent', () => {
  let component: FilghtBookComponent;
  let fixture: ComponentFixture<FilghtBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilghtBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilghtBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
