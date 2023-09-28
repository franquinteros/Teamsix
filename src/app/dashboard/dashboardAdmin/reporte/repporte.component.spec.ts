import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepporteComponent } from './repporte.component';

describe('RepporteComponent', () => {
  let component: RepporteComponent;
  let fixture: ComponentFixture<RepporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepporteComponent]
    });
    fixture = TestBed.createComponent(RepporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
