import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounrtyComponent } from './counrty.component';

describe('CounrtyComponent', () => {
  let component: CounrtyComponent;
  let fixture: ComponentFixture<CounrtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounrtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounrtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
