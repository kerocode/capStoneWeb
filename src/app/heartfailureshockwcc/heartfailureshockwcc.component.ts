import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-heartfailureshockwcc',
  templateUrl: './heartfailureshockwcc.component.html',
  styleUrls: ['./heartfailureshockwcc.component.css']
})
export class HEARTFAILURESHOCKWCCComponent implements OnInit {

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
  HEARTFAILURESHOCKWCCC = {

    "lasso": {
           Admit_Source: -0.000000,
      Primary_Insurance:  0.000000,
  Discharge_Disposition:  0.181444,
             Admit_Unit: -0.024075,
             iso_result:  0.000000,
              icu_order:  0.000000,
         stepdown_order:  0.000000,
     general_care_order: -0.000000,
                    age: -0.017005,
       meanSquareError: 15.95,
      variance: 0.03
    },
    "lassoCv": {
            Admit_Source: -0.000000,
      Primary_Insurance:  0.000000,
  Discharge_Disposition:  0.228129,
             Admit_Unit: -0.030084,
             iso_result:  0.000000,
              icu_order:  0.125626,
         stepdown_order:  1.142857,
     general_care_order:  0.000000,
                    age: -0.020996,
       meanSquareError: 15.39,
      variance: 0.06
    },
    "ridge": {
             Admit_Source: -0.170003,
      Primary_Insurance: -0.007012,
  Discharge_Disposition:  0.251039,
             Admit_Unit: -0.030036,
             iso_result:  0.461020,
              icu_order:  2.764598,
         stepdown_order:  2.021849,
     general_care_order:  1.474844,
                    age: -0.020622,
       meanSquareError: 14.92,
      variance: 0.09
    },
    "ridgeCv": {
           Admit_Source: -0.141428,
      Primary_Insurance:  0.000446,
  Discharge_Disposition:  0.247648,
             Admit_Unit: -0.030808,
             iso_result:  0.335329,
              icu_order:  1.874432,
         stepdown_order:  1.760931,
     general_care_order:  1.040005,
                    age: -0.021187,
       meanSquareError: 14.97,
      variance: 0.09
    },
    "linear": {
           Admit_Source: -0.172115,
      Primary_Insurance: -0.007467,
  Discharge_Disposition:  0.251352,
             Admit_Unit: -0.029967,
             iso_result:  0.470164,
              icu_order:  2.837162,
         stepdown_order:  2.038025,
     general_care_order:  1.505113,
                    age: -0.020585,
      meanSquareError: 14.92,
      variance: 0.09
    }
  };
  HEARTFAILURESHOCKWCCC_model = {
    Admit_Source: [
      { viewValue: 'TRANSFER FROM A SNF', value: 5},
      { viewValue: 'TRANSFER FROM A HOSP', value: 4},
      { viewValue: 'COURT OR LAW ENFORCE', value: 1},
      { viewValue: 'HOME /WORK / OTHER', value: 2},
      { viewValue: 'TRANSF FROM ANOTH HC', value: 3},
      { viewValue: 'CLINIC OR PHYS OFFIC', value: 0}
    ],
    Primary_Insurance: [
      { viewValue: 'INDIGENT CARE', value: 3},
      { viewValue: 'MEDICAID MANA', value: 5},
      { viewValue: 'ANTHEM MANAGE', value: 1},
      { viewValue: 'ANTHEM', value: 0},
      { viewValue: 'HMO/PPO', value: 2},
      { viewValue: 'SELF PAY', value: 9},
      { viewValue: 'OTHER', value: 8},
      { viewValue: 'MEDICAID', value: 4},
      { viewValue: 'MEDICARE MANA', value: 7},
      { viewValue: 'MEDICARE', value: 6}
    ],
    Discharge_Disposition: [
      { viewValue: 'EXPIRED IN THIS FACILITY', value: 8},
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 7},
      { viewValue: 'HOSPICE - HOME', value: 9},
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 3},
      { viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value: 6},
      { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 4},
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 5},
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 11},
      { viewValue: 'DISCH /TRANS TO FED HLTH CARE FACILITY-VA', value: 2},
      { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 1},
      { viewValue: 'HOSPICE - MEDICAL FAC (CERT) PROVIDE HOSPICE C', value: 10}
    ],
    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],
    Admit_Unit: [
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 23},
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 13},
      { viewValue: '9W-CLINICAL TRANSPLANT', value: 7},
      { viewValue: 'CSBC-SECURITY CARE', value: 16},
      { viewValue: '11W-NEUROSURGERY', value: 3}, 
      { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 6}, 
      { viewValue: 'C10A-CORONARY ICU', value: 8},
      { viewValue: 'C10C-CARDIAC SURG ICU', value: 10},
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 4},
      { viewValue: '10CA-CARD/THORASIC SURG PCU', value: 0},
      { viewValue: '10E-CARDIOLOGY', value: 1},
      { viewValue: 'N10A-BONE MARROW TRANSPLANT', value: 20}, 
      { viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 12},
      { viewValue: 'C4C-MEDICAL RESP ICU', value: 14},
      { viewValue: '8W-WOMENS CARE UNIT', value: 5},
      { viewValue: '10W-CARDIOTHORACIC SURGERY', value: 2},
      { viewValue: 'C7A-ACUTE CARE SURGERY', value: 15},
      { viewValue: 'GB3-GATEWAY BLDG 3RD FLOOR', value: 19},
      { viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 18},
      { viewValue: 'N10B-BONE MARROW TRANSPLANT', value: 21},
      { viewValue: 'C10B-CORONARY ICU', value: 9}, 
      { viewValue: 'C9B-SURGICAL TRAUMA ICU', value: 16},
      { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 22},
      { viewValue: 'C10D-CARDIAC SURG ICU', value: 11},
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 24}
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
