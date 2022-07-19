import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerDetailComponent } from './add-customer-detail.component';

describe('AddCustomerDetailComponent', () => {
  let component: AddCustomerDetailComponent;
  let fixture: ComponentFixture<AddCustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
