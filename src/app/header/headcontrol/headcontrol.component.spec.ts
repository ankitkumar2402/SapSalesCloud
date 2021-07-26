import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadcontrolComponent } from './headcontrol.component';

describe('HeadcontrolComponent', () => {
  let component: HeadcontrolComponent;
  let fixture: ComponentFixture<HeadcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
