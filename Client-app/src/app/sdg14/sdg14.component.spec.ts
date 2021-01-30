import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdg14Component } from './sdg14.component';

describe('Sdg14Component', () => {
  let component: Sdg14Component;
  let fixture: ComponentFixture<Sdg14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdg14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdg14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
