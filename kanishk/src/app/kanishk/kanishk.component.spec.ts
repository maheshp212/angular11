import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanishkComponent } from './kanishk.component';

describe('KanishkComponent', () => {
  let component: KanishkComponent;
  let fixture: ComponentFixture<KanishkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanishkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanishkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
