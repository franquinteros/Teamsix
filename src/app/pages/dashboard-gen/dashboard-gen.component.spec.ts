import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGenComponent } from './dashboard-gen.component';

describe('DashboardGenComponent', () => {
  let component: DashboardGenComponent;
  let fixture: ComponentFixture<DashboardGenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardGenComponent]
    });
    fixture = TestBed.createComponent(DashboardGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
