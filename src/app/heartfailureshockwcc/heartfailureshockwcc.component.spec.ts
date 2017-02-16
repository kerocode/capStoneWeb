/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HEARTFAILURESHOCKWCCComponent } from './heartfailureshockwcc.component';

describe('HEARTFAILURESHOCKWCCComponent', () => {
  let component: HEARTFAILURESHOCKWCCComponent;
  let fixture: ComponentFixture<HEARTFAILURESHOCKWCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HEARTFAILURESHOCKWCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HEARTFAILURESHOCKWCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
