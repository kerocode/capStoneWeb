/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { REDBLOODCELLDISORDERSWOMCCComponent } from './redbloodcelldisorderswomcc.component';

describe('REDBLOODCELLDISORDERSWOMCCComponent', () => {
  let component: REDBLOODCELLDISORDERSWOMCCComponent;
  let fixture: ComponentFixture<REDBLOODCELLDISORDERSWOMCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REDBLOODCELLDISORDERSWOMCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REDBLOODCELLDISORDERSWOMCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
