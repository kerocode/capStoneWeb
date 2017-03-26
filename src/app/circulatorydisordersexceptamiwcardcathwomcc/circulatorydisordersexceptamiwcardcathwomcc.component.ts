import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-circulatorydisordersexceptamiwcardcathwomcc',
  templateUrl: './circulatorydisordersexceptamiwcardcathwomcc.component.html',
  styleUrls: ['./circulatorydisordersexceptamiwcardcathwomcc.component.css']
})
export class CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCComponent implements OnInit {

  constructor() { }
  selectedModel = {
    linear: false,
    ridge: false,
    ridgeCv: false,
    lasso: false,
    lassoCv: false
  }
  images = {
    'linear': {
      bar: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_linearReg.csv1.png',
      line: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_linearReg.csv2.png',
      dot: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_linearReg.csv3.png',
    },
    'ridge': {
      bar: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_ridge.csv1.png',
      line: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_ridge.csv2.png',
      dot: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_ridge.csv3.png',
    },
    'ridgeCv': {
      bar: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_ridgecv.csv1.png',
      line: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_ridgecv.csv2.png',
      dot: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_ridgecv.csv3.png',
    },
    'lesso': {
      bar: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_lasso.csv1.png',
      line: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_lasso.csv2.png',
      dot: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_lasso.csv3.png',
    },
    'lessoCv': {
      bar: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_lassocv.csv1.png',
      line: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_lassocv.csv2.png',
      dot: 'CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCC_lassocv.csv3.png',
    }
  }
  lines = [];
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
  //   model={};
  CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCC = {

    'lasso': {
      Admit_Source: -0.000000,
      Primary_Insurance: -0.000000,
      Discharge_Disposition: 0.340742,
      Admit_Unit: -0.044409,
      Bed_Category: 0.000000,
      iso_result: 0.000000,
      icu_order: -0.000000,
      stepdown_order: 1.503236,
      general_care_order: -0.000000,
      age: 0.017103,
      meanSquareError: 15.15,
      variance: 0.15
    },
    'lassoCv': {
      Admit_Source: -0.000000,
      Primary_Insurance: -0.000000,
      Discharge_Disposition: 0.455563,
      Admit_Unit: -0.030539,
      Bed_Category: 0.239400,
      iso_result: 0.000000,
      icu_order: -0.000000,
      stepdown_order: 3.999374,
      general_care_order: -0.000000,
      age: 0.023378,
      meanSquareError: 13.47,
      variance: 0.25
    },
    'ridge': {
      Admit_Source: -0.041933,
      Primary_Insurance: -0.015087,
      Discharge_Disposition: 0.480336,
      Admit_Unit: -0.024369,
      Bed_Category: 0.323288,
      iso_result: 1.311050,
      icu_order: -0.522034,
      stepdown_order: 4.465348,
      general_care_order: -0.638917,
      age: 0.024783,
      meanSquareError: 13.27,
      variance: 0.26
    },
    'ridgeCv': {
      Admit_Source: -0.053669,
      Primary_Insurance: -0.015551,
      Discharge_Disposition: 0.495889,
      Admit_Unit: -0.023653,
      Bed_Category: 0.343394,
      iso_result: 1.029262,
      icu_order: -0.414766,
      stepdown_order: 4.042957,
      general_care_order: -0.608794,
      age: 0.024345,
      meanSquareError: 13.31,
      variance: 0.25
    },
    'linear': {
      Admit_Source: -0.041127,
      Primary_Insurance: -0.015066,
      Discharge_Disposition: 0.479361,
      Admit_Unit: -0.024419,
      iso_result: 1.330838,
      icu_order: -0.528823,
      stepdown_order: 4.490073,
      general_care_order: -0.639939,
      age: 0.024806,
      meanSquareError: 13.27,
      variance: 0.26
    }
  };
  CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCC_model = {
    Admit_Source: [{ viewValue: 'CLINIC OR PHYS OFFIC', value: 0 },
    { viewValue: 'TRANSFER FROM A HOSP', value: 3 }, { viewValue: 'COURT OR LAW ENFORCE', value: 1 },
    { viewValue: 'HOME /WORK / OTHER', value: 2 }, { viewValue: 'TRANSF FROM A SNF', value: 4 }],

    Primary_Insurance: [{ viewValue: 'INDIGENT CARE', value: 4 }, { viewValue: 'MEDICAID MANA', value: 6 }, { viewValue: 'ANTHEM MANAGE', value: 1 },
    { viewValue: 'ANTHEM', value: 0 }, { viewValue: 'COMMERCIAL', value: 2 }, { viewValue: 'HMO/PPO', value: 3 },
    { viewValue: 'SELF PAY', value: 10 }, { viewValue: 'OTHER', value: 9 }, { viewValue: 'MEDICARE', value: 7 },
    { viewValue: 'MEDICARE MANA', value: 8 }, { viewValue: 'MEDICAID', value: 5 }],

    Discharge_Disposition: [
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 7 },
      { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 6 },
      { viewValue: 'HOSPICE - HOME', value: 9 },
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0 },
      { viewValue: 'LEFT ELOPED -W/O NOTICE-AMA', value: 11 },
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 2 },
      { viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value: 7 },
      { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 3 },
      { viewValue: 'DISCH /TRANS TO LONG TERM CARE HOSP (CERT)', value: 5 },
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 4 },
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 10 },
      { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 1 }
    ],
    Bed_Category: [
      { viewValue: 'ED', value: 2 },
      { viewValue: 'CORRECTION', value: 1 },
      { viewValue: 'RESEARCH', value: 7 },
      { viewValue: 'MED/SURG', value: 5 },
      { viewValue: '0', value: 0 },
      { viewValue: 'GUM SUITES', value: 3 },
      { viewValue: 'PICU', value: 6 },
      { viewValue: 'ICU', value: 4 }
    ],
    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],
    Admit_Unit: [
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 21 },
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 14 },
      { viewValue: '9W-CLINICAL TRANSPLANT', value: 8 },
      { viewValue: 'CSBC-SECURITY CARE', value: 18 },
      { viewValue: '3CCL-CARDIAC CATH LAB', value: 4 },
      { viewValue: '11W-NEUROSURGERY', value: 3 },
      { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 6 },
      { viewValue: 'C10A-CORONARY ICU', value: 9 },
      { viewValue: 'C10B-CORONARY ICU', value: 10 },
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 5 },
      { viewValue: '10CA-CARD/THORASIC SURG PCU', value: 0 },
      { viewValue: '10E-CARDIOLOGY', value: 1 },
      { viewValue: 'C11C-NEUROSCIENCE ICU', value: 12 },
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 23 },
      { viewValue: '9E-SPECIAL SERVICES SUITES', value: 7 },
      { viewValue: '10W-CARDIOTHORACIC SURGERY', value: 2 },
      { viewValue: 'C7A-ACUTE CARE SURGERY', value: 16 },
      { viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 22 },
      { viewValue: 'GB3-GATEWAY BLDG 3RD FLOOR', value: 20 },
      { viewValue: 'C4B-MEDICAL RESP ICU', value: 15 },
      { viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 19 },
      { viewValue: 'C10D-CARDIAC SURG ICU', value: 11 },
      { viewValue: 'C8C-BURN CENTER', value: 17 },
      { viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 13 }
    ],

    icu_order: [{ viewValue: '0', value: 0 }, { viewValue: 'LEVEL OF CARE - INTENSIVE', value: 1 }],
    stepdown_order: [{ viewValue: 'LEVEL OF CARE - INTERMEDIATE/STEPDOWN', value: 1 }, { viewValue: '0', value: 0 }],
    general_care_order: [{ viewValue: '0', value: 0 }, { viewValue: 'LEVEL OF CARE - GENERAL', value: 1 }]
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
