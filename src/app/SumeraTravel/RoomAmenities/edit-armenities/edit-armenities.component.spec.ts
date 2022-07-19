import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArmenitiesComponent } from './edit-armenities.component';

describe('EditArmenitiesComponent', () => {
  let component: EditArmenitiesComponent;
  let fixture: ComponentFixture<EditArmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditArmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
