/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { REHABILITATIONWCCMCCComponent } from './rehabilitationwccmcc.component';

describe('REHABILITATIONWCCMCCComponent', () => {
  let component: REHABILITATIONWCCMCCComponent;
  let fixture: ComponentFixture<REHABILITATIONWCCMCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REHABILITATIONWCCMCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REHABILITATIONWCCMCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
