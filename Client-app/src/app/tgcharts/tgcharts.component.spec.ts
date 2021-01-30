import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgchartsComponent } from './tgcharts.component';

describe('TgchartsComponent', () => {
  let component: TgchartsComponent;
  let fixture: ComponentFixture<TgchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TgchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TgchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
