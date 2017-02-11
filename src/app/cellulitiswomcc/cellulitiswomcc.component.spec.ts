/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CELLULITISWOMCCComponent } from './cellulitiswomcc.component';

describe('CELLULITISWOMCCComponent', () => {
  let component: CELLULITISWOMCCComponent;
  let fixture: ComponentFixture<CELLULITISWOMCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CELLULITISWOMCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CELLULITISWOMCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
