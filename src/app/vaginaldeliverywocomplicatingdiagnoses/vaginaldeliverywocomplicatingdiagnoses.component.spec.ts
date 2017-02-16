/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESComponent } from './vaginaldeliverywocomplicatingdiagnoses.component';

describe('VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESComponent', () => {
  let component: VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESComponent;
  let fixture: ComponentFixture<VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
