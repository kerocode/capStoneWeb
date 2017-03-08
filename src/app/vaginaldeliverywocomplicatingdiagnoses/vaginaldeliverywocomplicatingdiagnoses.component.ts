import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-vaginaldeliverywocomplicatingdiagnoses',
  templateUrl: './vaginaldeliverywocomplicatingdiagnoses.component.html',
  styleUrls: ['./vaginaldeliverywocomplicatingdiagnoses.component.css']
})
export class VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESComponent implements OnInit {

 constructor() { }
  lines = [];
  selectedModel={
    linear:false,
    ridge:false,
    ridgeCv:false,
    lasso:false,
    lassoCv:false
  }
  prediction=[];
  variables = [
    "Admit_Source",
    "Primary_Insurance",
    "Discharge_Disposition",
    "Admit_Unit",
    "iso_result",
    "icu_order",
    "stepdown_order",
    "general_care_order",
    "age"]
  patient = {};
 showPrediction=false;
  hide=true;
  reportModel = {};
  model:Model={AdmitSource:0,AdmitUnit:0,DischargeDisposition:0,icuOrder:0,PrimaryInsurance:0,
              age:0,generalCareOrder:0,stepdownOrder:0,isoResult:0};
  VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESC = {

    "lasso": {
           Admit_Source:  0.0,
      Primary_Insurance:  0.0,
  Discharge_Disposition:  0.0,
             Admit_Unit: -0.0,
             iso_result:  0.0,
              icu_order: -0.0,
     general_care_order:  0.0,
                    age: -0.0,
         meanSquareError: 0.57,
         variance: 0.00
    },
    "lassoCv": {
           Admit_Source:  0.000000,
      Primary_Insurance:  0.000000,
  Discharge_Disposition:  0.000000,
             Admit_Unit: -0.000000,
             iso_result:  0.000000,
              icu_order: -0.000000,
     general_care_order:  0.000000,
                    age: -0.010952,
         meanSquareError: 0.56,
         variance: 0.01
    },
    "ridge": {
           Admit_Source:  0.415613,
      Primary_Insurance:  0.018153,
  Discharge_Disposition:  0.008917,
             Admit_Unit: -0.053507,
             iso_result:  0.420060,
              icu_order: -0.191765,
     general_care_order:  0.042626,
                    age: -0.012450,
         meanSquareError: 0.56,
         variance: 0.02
    },
    "ridgeCv": {
           Admit_Source:  0.168747,
      Primary_Insurance:  0.018072,
  Discharge_Disposition:  0.008219,
             Admit_Unit: -0.017124,
             iso_result:  0.184914,
              icu_order: -0.052888,
     general_care_order:  0.035715,
                    age: -0.012649,
         meanSquareError: 0.56,
         variance: 0.01
    },
    "linear": {
        Admit_Source:  0.450285,
      Primary_Insurance:  0.018160,
  Discharge_Disposition:  0.008954,
             Admit_Unit: -0.060234,
             iso_result:  0.450171,
              icu_order: -0.227903,
     general_care_order:  0.036225,
                    age: -0.012426,
         meanSquareError: 0.56,
         variance: 0.02
    }
  };

  VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESC_model = {
    Admit_Source: [
      { viewValue: 'CLINIC OR PHYS OFFIC', value: 0}, 
      { viewValue: 'HOME /WORK / OTHER', value: 1},
      { viewValue: 'TRANSF FROM ANOTH HC', value: 2}
    ],

    Primary_Insurance: [
      { viewValue: 'INDIGENT CARE', value: 3},
      { viewValue: 'MEDICAID MANA', value: 5},
      { viewValue: 'ANTHEM MANAGE', value: 1},
      { viewValue: 'ANTHEM', value: 0},
      { viewValue: 'HMO/PPO', value: 2},
      { viewValue: 'SELF PAY', value: 8},
      { viewValue: 'OTHER', value: 7},
      { viewValue: 'MEDICAID', value: 4},
      { viewValue: 'MEDICARE', value: 6}
    ],

    Discharge_Disposition: [
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 1},
      { viewValue: 'HOSPICE - HOME', value: 3},
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 2}
    ],

    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    Admit_Unit: [
      { viewValue: '6LD-LABOR AND DELIVERY ROOM', value: 0},
      { viewValue: '9E-SPECIAL SERVICES SUITES', value: 1}
    ],

    icu_order: [
      { viewValue: '0', value: 0 },
      { viewValue: 'LEVEL OF CARE - INTENSIVE', value: 1 }
    ],

    stepdown_order: [
      { viewValue: 'LEVEL OF CARE - INTERMEDIATE/STEPDOWN', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    general_care_order: [
      { viewValue: '0', value: 0 },
      { viewValue: 'LEVEL OF CARE - GENERAL', value: 1 }
    ],
  };


  ngOnInit() {
  }
  processData(allText) {
    let allTextLines = allText.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    for (let i = 1; i < allTextLines.length; i++) {
      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        let tarr = [];
        for (var j = 0; j < headers.length; j++) {
          tarr.push(headers[j] + ":" + data[j]);
        }
        this.lines.push(tarr);
      }
    }
    // alert(lines);
  }
}