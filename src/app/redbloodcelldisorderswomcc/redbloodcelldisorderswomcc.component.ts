import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-redbloodcelldisorderswomcc',
  templateUrl: './redbloodcelldisorderswomcc.component.html',
  styleUrls: ['./redbloodcelldisorderswomcc.component.css']
})
export class REDBLOODCELLDISORDERSWOMCCComponent implements OnInit {

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
  REDBLOODCELLDISORDERSWOMCCC = {

    "lasso": {
          Admit_Source:  0.000000,
      Primary_Insurance:  0.207920,
  Discharge_Disposition:  0.000000,
             Admit_Unit:  0.027257,
             iso_result: -0.000000,
              icu_order:  0.000000,
         stepdown_order: -0.000000,
     general_care_order:  0.000000,
                    age: -0.053422,
      meanSquareError: 21.46,
      variance: 0.05
    },
    "lassoCv": {
               Admit_Source:  0.000000,
      Primary_Insurance:  0.000000,
  Discharge_Disposition:  0.000000,
             Admit_Unit:  0.000000,
             iso_result: -0.000000,
              icu_order:  0.000000,
         stepdown_order: -0.000000,
     general_care_order:  0.000000,
                    age: -0.031004,
      meanSquareError: 22.09,
      variance: 0.03
    },
    "ridge": {
               Admit_Source:  0.247618,
      Primary_Insurance:  0.297438,
  Discharge_Disposition:  0.118538,
             Admit_Unit:  0.024883,
             iso_result: -0.862450,
              icu_order: -0.058723,
         stepdown_order:  0.667182,
     general_care_order:  2.171707,
                    age: -0.060027,
      meanSquareError: 20.94,
      variance: 0.08
    },
    "ridgeCv": {
            Admit_Source:  0.252495,
      Primary_Insurance:  0.294633,
  Discharge_Disposition:  0.119959,
             Admit_Unit:  0.024589,
             iso_result: -0.676737,
              icu_order: -0.006612,
         stepdown_order:  0.323569,
     general_care_order:  1.315755,
                    age: -0.060098,
      meanSquareError: 21.46,
      variance: 0.05
    },
    "linear": {
                Admit_Source:  0.246484,
      Primary_Insurance:  0.297649,
  Discharge_Disposition:  0.118347,
             Admit_Unit:  0.024910,
             iso_result: -0.874739,
              icu_order: -0.068991,
         stepdown_order:  0.699953,
     general_care_order:  2.250819,
                    age: -0.060019,
      meanSquareError: 20.94,
      variance: 0.08
    }
  };
  
  REDBLOODCELLDISORDERSWOMCCC_model = {
    Admit_Source: [
      { viewValue: 'COURT OR LAW ENFORCE', value: 1},
      { viewValue: 'TRANSFER FROM A SNF', value: 4},
      { viewValue: 'TRANSFER FROM A HOSP', value: 3},
      { viewValue: 'HOME /WORK / OTHER', value: 2},
      { viewValue: 'CLINIC OR PHYS OFFIC', value: 0}
    ],

    Primary_Insurance: [
      { viewValue: 'INDIGENT CARE', value: 4},
      { viewValue: 'MEDICAID MANA', value: 6},
      { viewValue: 'ANTHEM MANAGE', value: 1},
      { viewValue: 'ANTHEM', value: 0},
      { viewValue: 'COMMERCIAL', value: 2},
      { viewValue: 'HMO/PPO', value: 3},
      { viewValue: 'SELF PAY', value: 10},
      { viewValue: 'OTHER', value: 9},
      { viewValue: 'MEDICARE', value: 7},
      { viewValue: 'MEDICARE MANA', value: 8},
      { viewValue: 'MEDICAID', value: 5}
    ],

    Discharge_Disposition: [
      { viewValue: 'HOSPICE - MEDICAL FAC (CERT) PROVIDE HOSPICE C', value: 7},
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 5},
      { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 4},
      { viewValue: 'HOSPICE - HOME', value: 6},
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 2},
      { viewValue: 'DISCH /TRANS TO CANCER CTR OR CHILD HOSP', value: 1},
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 8},
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 3}
    ],

    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    Admit_Unit: [
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 31},
      { viewValue: 'C9D-SURGICAL TRAUMA ICU', value: 24},
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 20},
      { viewValue: '9W-CLINICAL TRANSPLANT', value: 16},
      { viewValue: '11E-ORTHOPEDICS', value: 4},
      { viewValue: '7C-ACUTE CARE PEDIATRICS', value: 8},
      { viewValue: '7PCU-PED PROGRESSIVE CARE', value: 12},
      { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 15},
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 7},
      { viewValue: '10CA-CARD/THORASIC SURG PCU', value: 0},
      { viewValue: 'GB5-GATEWAY BLDG 5TH FLOOR', value: 27},
      { viewValue: '10E-CARDIOLOGY', value: 1},
      { viewValue: '11EM-EPILEPSY MONITORING', value: 5},
      { viewValue: 'C9C-SURGICAL TRAUMA ICU', value: 23},
      { viewValue: 'N10A-BONE MARROW TRANSPLANT', value: 28},
      { viewValue: '7CE-PEDS-SAM DAY SUITES', value: 9},
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 33},
      { viewValue: '8W-WOMENS CARE UNIT', value: 14},
      { viewValue: '7CW-PEDS MAIN 7 CENTRAL WEST', value: 10},
      { viewValue: '11W-NEUROSURGERY', value: 6},
      { viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 32},
      { viewValue: 'C4B-MEDICAL RESP ICU', value: 21},
      { viewValue: '11CA-JOINT RESTORATION', value: 3},
      { viewValue: 'C7A-ACUTE CARE SURGERY', value: 22},
      { viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 26},
      { viewValue: '7E-GENERAL CARE PEDS', value: 11},
      { viewValue: 'A7PO-AMB SURGERY-PREOP', value: 17},
      { viewValue: 'N10B-BONE MARROW TRANSPLANT', value: 29},
      { viewValue: 'CSBC-SECURITY CARE', value: 25}, 
      { viewValue: '7PI-PEDIATRIC ICU (0-21)', value: 13},
      { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 30},
      { viewValue: 'C10D-CARDIAC SURG ICU', value: 18},
      { viewValue: '10W-CARDIOTHORACIC SURGERY', value: 2},
      { viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 19}
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
