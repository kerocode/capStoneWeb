/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DEPRESSIVENEUROSESComponent } from './depressiveneuroses.component';

describe('DEPRESSIVENEUROSESComponent', () => {
  let component: DEPRESSIVENEUROSESComponent;
  let fixture: ComponentFixture<DEPRESSIVENEUROSESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DEPRESSIVENEUROSESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DEPRESSIVENEUROSESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
