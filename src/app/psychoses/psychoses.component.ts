import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-psychoses',
  templateUrl: './psychoses.component.html',
  styleUrls: ['./psychoses.component.css']
})
export class PSYCHOSESComponent implements OnInit {


  constructor() { }
  lines = [];
  selectedModel = {
    linear: false,
    ridge: false,
    ridgeCv: false,
    lasso: false,
    lassoCv: false
  }
  images = {
    'linear': {
      bar: 'PSYCHOSES_linearReg.csv1.png',
      line: 'PSYCHOSES_linearReg.csv2.png',
      dot: 'PSYCHOSES_linearReg.csv3.png',
    },
    'ridge': {
      bar: 'PSYCHOSES_ridge.csv1.png',
      line: 'PSYCHOSES_ridge.csv2.png',
      dot: 'PSYCHOSES_ridge.csv3.png',
    },
    'ridgeCv': {
      bar: 'PSYCHOSES_ridgecv.csv1.png',
      line: 'PSYCHOSES_ridgecv.csv2.png',
      dot: 'PSYCHOSES_ridgecv.csv3.png',
    },
    'lesso': {
      bar: 'PSYCHOSES_lasso.csv1.png',
      line: 'PSYCHOSES_lasso.csv2.png',
      dot: 'PSYCHOSES_lasso.csv3.png',
    },
    'lessoCv': {
      bar: 'PSYCHOSES_lassocv.csv1.png',
      line: 'PSYCHOSES_lassocv.csv2.png',
      dot: 'PSYCHOSES_lassocv.csv3.png',
    }
  }
  prediction = [];
  variables = [
    'Admit_Source',
    'Primary_Insurance',
    'Discharge_Disposition',
    'Admit_Unit',
    'iso_result',
    'icu_order',
    'stepdown_order',
    'general_care_order',
    'age']
  patient = {};
  showPrediction = false;
  hide = true;
  reportModel = {};
  model: Model = {
    AdmitSource: 0, AdmitUnit: 0, DischargeDisposition: 0, icuOrder: 0, PrimaryInsurance: 0,
    age: 0, generalCareOrder: 0, stepdownOrder: 0, isoResult: 0
  };
  PSYCHOSESC = {

    'lasso': {
      Admit_Source: -0.0,
      Primary_Insurance: 0.0,
      Discharge_Disposition: -0.0,
      Admit_Unit: 0.0,
      iso_result: -0.0,
      icu_order: -0.0,
      stepdown_order: -0.0,
      general_care_order: 0.0,
      age: 0.0824361638027,
      meanSquareError: 15.56,
      variance: 0.01
    },
    'lassoCv': {
      Admit_Source: -0.0,
      Primary_Insurance: 0.0522951518638,
      Discharge_Disposition: -0.0469560730772,
      Admit_Unit: 0.0588454365278,
      iso_result: -0.0,
      icu_order: -0.0,
      stepdown_order: -0.0,
      general_care_order: 1.03147701788,
      age: 0.0811835497196,
      meanSquareError: 15.67,
      variance: 0.11
    },
    'ridge': {
      Admit_Source: 0.0132259104397,
      Primary_Insurance: 0.0725520550216,
      Discharge_Disposition: -0.0593643162171,
      Admit_Unit: 0.122065084213,
      iso_result: -0.122720470184,
      icu_order: -2.14801552198,
      stepdown_order: -1.56202885795,
      general_care_order: 1.58350722835,
      age: 0.0821011788277,
      meanSquareError: 15.89,
      variance: 0.32
    },
    'ridgeCv': {
      Admit_Source: 0.0113202016181,
      Primary_Insurance: 0.0714469310485,
      Discharge_Disposition: -0.0604387590946,
      Admit_Unit: 0.127575534044,
      iso_result: -0.0923912872561,
      icu_order: -0.699942042335,
      stepdown_order: -0.852550715312,
      general_care_order: 1.53541796625,
      age: 0.0821776013121,
      meanSquareError: 15.87,
      variance: 0.33
    },
    'linear': {
      Admit_Source: 0.013547569648,
      Primary_Insurance: 0.0727324041928,
      Discharge_Disposition: -0.0592216673120,
      Admit_Unit: 0.120931860508,
      iso_result: -0.12587946253,
      icu_order: -2.42539586996,
      stepdown_order: -1.62625198595,
      general_care_order: 1.58684093828,
      age: 0.0820837576522,
      meanSquareError: 15.88,
      variance: 0.31
    }
  };
  PSYCHOSESC_model = {
    Admit_Source: [
      { viewValue: 'TRANSFER FROM A SNF', value: 5 },
      { viewValue: 'TRANSFER FROM A HOSP', value: 4 },
      { viewValue: 'COURT OR LAW ENFORCE', value: 1 },
      { viewValue: 'HOME /WORK / OTHER', value: 2 },
      { viewValue: 'TRANSF FROM ANOTH HC', value: 3 },
      { viewValue: 'CLINIC OR PHYS OFFIC', value: 0 }
    ],

    Primary_Insurance: [
      { viewValue: 'INDIGENT CARE', value: 4 },
      { viewValue: 'MEDICAID MANA', value: 6 },
      { viewValue: 'ANTHEM MANAGE', value: 1 },
      { viewValue: 'ANTHEM', value: 0 },
      { viewValue: 'COMMERCIAL', value: 2 },
      { viewValue: 'HMO/PPO', value: 3 },
      { viewValue: 'SELF PAY', value: 10 },
      { viewValue: 'OTHER', value: 9 },
      { viewValue: 'MEDICARE', value: 7 },
      { viewValue: 'MEDICAID', value: 5 },
      { viewValue: 'MEDICARE MANA', value: 8 }
    ],

    Discharge_Disposition: [
      { viewValue: 'DISCH TRANFERRED WITH VCUHS-D/C', value: 11 },
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 9 },
      { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 7 },
      { viewValue: 'DISCH /TRANS TO LONG TERM CARE HOSP (CERT)', value: 6 },
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0 },
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 3 },
      { viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value: 8 },
      { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 4 },
      { viewValue: 'DISCH ADMITTED AS AN IP TO THIS HOSPITAL', value: 10 },
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 5 },
      { viewValue: 'HOSPICE - HOME', value: 12 },
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 13 },
      { viewValue: 'z DISCH /TRANS TO NOT DEFINED HLTH CR INST', value: 14 },
      { viewValue: 'DISCH /TRANS TO FED HLTH CARE FACILITY-VA', value: 2 },
      { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 1 }
    ],

    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    Admit_Unit: [
      { viewValue: 'VA TREATMENT CTR-SEAS ACUTE', value: 18 },
      { viewValue: 'C10A-CORONARY ICU', value: 5 },
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 13 },
      { viewValue: 'N3-DUAL DIAGNOSIS/MEDICAL PSY', value: 9 },
      { viewValue: 'N4-GENERAL PSYCHIATRY', value: 11 },
      { viewValue: 'VA TREATMENT CTR(E) ACUTE', value: 17 },
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 2 },
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 7 },
      { viewValue: 'N3EC-N 3 ELECTROCONVULSIV THER', value: 10 },
      { viewValue: 'CSBC-SECURITY CARE', value: 8 },
      { viewValue: 'C11C-NEUROSCIENCE ICU', value: 6 },
      { viewValue: '11W-NEUROSURGERY', value: 1 },
      { viewValue: '7C-ACUTE CARE PEDIATRICS', value: 3 },
      { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 12 },
      { viewValue: '11EM-EPILEPSY MONITORING', value: 0 },
      { viewValue: 'VA TREATMENT CTR (B) ACUTE', value: 16 },
      { viewValue: 'NGCS-N GROUND CRISIS STABILIZ', value: 15 },
      { viewValue: '7PCU-PED PROGRESSIVE CARE', value: 4 },
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 14 }
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
          tarr.push(headers[j] + ':' + data[j]);
        }
        this.lines.push(tarr);
      }
    }
    // alert(lines);
  }
}
