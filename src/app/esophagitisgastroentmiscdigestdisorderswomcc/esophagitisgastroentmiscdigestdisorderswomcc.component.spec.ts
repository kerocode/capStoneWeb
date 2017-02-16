/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCComponent } from './esophagitisgastroentmiscdigestdisorderswomcc.component';

describe('ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCComponent', () => {
  let component: ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCComponent;
  let fixture: ComponentFixture<ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
