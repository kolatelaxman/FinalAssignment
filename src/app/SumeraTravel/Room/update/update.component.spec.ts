import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponents } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponents;
  let fixture: ComponentFixture<UpdateComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
