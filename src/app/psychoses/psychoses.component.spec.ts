/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PSYCHOSESComponent } from './psychoses.component';

describe('PSYCHOSESComponent', () => {
  let component: PSYCHOSESComponent;
  let fixture: ComponentFixture<PSYCHOSESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSYCHOSESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSYCHOSESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
