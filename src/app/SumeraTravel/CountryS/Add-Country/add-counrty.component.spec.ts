import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCounrtyComponent } from './add-counrty.component';

describe('AddCounrtyComponent', () => {
  let component: AddCounrtyComponent;
  let fixture: ComponentFixture<AddCounrtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCounrtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCounrtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
