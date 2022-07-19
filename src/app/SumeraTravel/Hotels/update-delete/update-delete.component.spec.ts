import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteComponents } from './update-delete.component';

describe('UpdateDeleteComponent', () => {
  let component: UpdateDeleteComponents;
  let fixture: ComponentFixture<UpdateDeleteComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDeleteComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
