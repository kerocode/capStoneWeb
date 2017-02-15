/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCComponent } from './circulatorydisordersexceptamiwcardcathwomcc.component';

describe('CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCComponent', () => {
  let component: CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCComponent;
  let fixture: ComponentFixture<CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
