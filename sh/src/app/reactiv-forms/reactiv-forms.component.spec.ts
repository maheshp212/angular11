import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivFormsComponent } from './reactiv-forms.component';

describe('ReactivFormsComponent', () => {
  let component: ReactivFormsComponent;
  let fixture: ComponentFixture<ReactivFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
