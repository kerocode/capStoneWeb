/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SEIZURESWOMCCComponent } from './seizureswomcc.component';

describe('SEIZURESWOMCCComponent', () => {
  let component: SEIZURESWOMCCComponent;
  let fixture: ComponentFixture<SEIZURESWOMCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEIZURESWOMCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEIZURESWOMCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
