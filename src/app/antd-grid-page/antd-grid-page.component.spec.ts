import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdGridPageComponent } from './antd-grid-page.component';

describe('AntdGridPageComponent', () => {
  let component: AntdGridPageComponent;
  let fixture: ComponentFixture<AntdGridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntdGridPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
