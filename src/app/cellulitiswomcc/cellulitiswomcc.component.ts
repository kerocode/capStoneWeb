import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-cellulitiswomcc',
  templateUrl: './cellulitiswomcc.component.html',
  styleUrls: ['./cellulitiswomcc.component.css']
})
export class CELLULITISWOMCCComponent implements OnInit {
  dailogListener = false;
  lines = [];

  selectedModel = {
    linear: false,
    ridge: false,
    ridgeCv: false,
    lasso: false,
    lassoCv: false
  };
  images = {
    linear: {
      bar: 'CELLULITISWOMCC_linearReg.csv1.png',
      line: 'CELLULITISWOMCC_linearReg.csv2.png',
      dot: 'CELLULITISWOMCC_linearReg.csv3.png',
    },
    ridge: {
      bar: 'CELLULITISWOMCC_ridge.csv1.png',
      line: 'CELLULITISWOMCC_ridge.csv2.png',
      dot: 'CELLULITISWOMCC_ridge.csv3.png',
    },
    ridgeCv: {
      bar: 'CELLULITISWOMCC_ridgecv.csv1.png',
      line: 'CELLULITISWOMCC_ridgecv.csv2.png',
      dot: 'CELLULITISWOMCC_ridgecv.csv3.png',
    },
    lasso: {
      bar: 'CELLULITISWOMCC_lasso.csv1.png',
      line: 'CELLULITISWOMCC_lasso.csv2.png',
      dot: 'CELLULITISWOMCC_lasso.csv3.png',
    },
    lassoCv: {
      bar: 'CELLULITISWOMCC_lassocv.csv1.png',
      line: 'CELLULITISWOMCC_lassocv.csv2.png',
      dot: 'CELLULITISWOMCC_lassocv.csv3.png',
    }
  };
  prediction = [];
  variables = [
    'Admit_Source',
    'Primary_Insurance',
    'Discharge_Disposition',
    'Admit_Unit',
    'Bed_Category',
    'iso_result',
    'icu_order',
    'stepdown_order',
    'general_care_order',
    'age'];
  patient = {};

  showPrediction = false;
  hide = true;
  reportModel = {};
  model: Model = {
    AdmitSource: 0, AdmitUnit: 0, DischargeDisposition: 0, icuOrder: 0, PrimaryInsurance: 0,
    age: 0, generalCareOrder: 0, stepdownOrder: 0, isoResult: 0
  };
  CELLULITISWOMCCC = {
    lasso: {
      Admit_Source: -0.000000,
      Primary_Insurance: 0.058895,
      Discharge_Disposition: 0.076203,
      Admit_Unit: 0.003057,
      Bed_Category: -0.000000,
      iso_result: 0.000000,
      icu_order: 0.000000,
      stepdown_order: 0.000000,
      general_care_order: 0.000000,
      age: 0.008206,
      meanSquareError: 8.35,
      variance: 0.03
    },
    lassoCv: {
      Admit_Source: -0.000000,
      Primary_Insurance: 0.097796,
      Discharge_Disposition: 0.112461,
      Admit_Unit: -0.000000,
      Bed_Category: -0.131982,
      iso_result: 0.448686,
      icu_order: 0.000000,
      stepdown_order: 0.000000,
      general_care_order: 0.000000,
      age: 0.008472,
      meanSquareError: 8.11,
      variance: 0.06
    },
    ridge: {
      Admit_Source: -0.019872,
      Primary_Insurance: 0.115648,
      Discharge_Disposition: 0.113435,
      Admit_Unit: -0.002448,
      Bed_Category: -0.175342,
      iso_result: 1.011880,
      icu_order: 3.705998,
      stepdown_order: 0.930679,
      general_care_order: 0.586768,
      age: 0.008275,
      meanSquareError: 7.81,
      variance: 0.09
    },
    ridgeCv: {
      Admit_Source: -0.021248,
      Primary_Insurance: 0.111850,
      Discharge_Disposition: 0.116730,
      Admit_Unit: -0.003872,
      Bed_Category: -0.174405,
      iso_result: 0.916082,
      icu_order: 1.369026,
      stepdown_order: 0.814930,
      general_care_order: 0.268432,
      age: 0.008249,
      meanSquareError: 7.88,
      variance: 0.08
    },
    linear: {
      Admit_Source: -0.019846,
      Primary_Insurance: 0.116156,
      Discharge_Disposition: 0.112914,
      Admit_Unit: -0.002220,
      Bed_Category: -0.175729,
      iso_result: 1.017935,
      icu_order: 4.090371,
      stepdown_order: 0.915328,
      general_care_order: 0.604029,
      age: 0.008292,
      meanSquareError: 7.81,
      variance: 0.09
    }
  };
  CELLULITISWOMCCC_model = {
    Admit_Source: [{ viewValue: 'CLINIC OR PHYS OFFIC', value: 0 },
    { viewValue: 'TRANSFER FROM A HOSP', value: 4 }, { viewValue: 'COURT OR LAW ENFORCE', value: 1 },
    { viewValue: 'HOME /WORK / OTHER', value: 2 }, { viewValue: 'TRANSF FROM ANOTH HC', value: 3 }
    ],
    Primary_Insurance: [
      { viewValue: 'INDIGENT CARE', value: 4 }, { viewValue: 'MEDICAID MANA', value: 6 }, { viewValue: 'ANTHEM MANAGE', value: 1 },
      { viewValue: 'ANTHEM', value: 0 }, { viewValue: 'COMMERCIAL', value: 2 }, { viewValue: 'HMO/PPO', value: 3 },
      { viewValue: 'SELF PAY', value: 10 }, { viewValue: 'OTHER', value: 9 }, { viewValue: 'MEDICARE', value: 7 },
      { viewValue: 'MEDICARE MANA', value: 8 },
      { viewValue: 'MEDICAID', value: 5 }
    ],
    Discharge_Disposition: [
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 7 },
      { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 6 },
      { viewValue: 'HOSPICE - HOME', value: 8 },
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0 },
      { viewValue: 'LEFT ELOPED -W/O NOTICE-AMA', value: 11 },
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 3 },
      { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 4 },
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 5 },
      { viewValue: 'DISCH /TRANS TO CANCER CTR OR CHILD HOSP', value: 1 },
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 10 },
      { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 2 },
      { viewValue: 'HOSPICE - MEDICAL FAC (CERT) PROVIDE HOSPICE C', value: 9 }
    ],
    Bed_Category: [
      { viewValue: 'SAME DAY', value: 8 },
      { viewValue: 'PED MED/SU', value: 6 },
      { viewValue: 'ED', value: 1 },
      { viewValue: 'CORRECTION', value: 0 },
      { viewValue: 'RESEARCH', value: 7 },
      { viewValue: 'MED/SURG', value: 4 },
      { viewValue: 'GUM SUITES', value: 2 },
      { viewValue: 'PICU', value: 8 },
      { viewValue: 'OR', value: 5 },
      { viewValue: 'ICU', value: 3 }
    ],
    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],
    Admit_Unit: [
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 19 },
      { viewValue: '5ORC-OPERATING ROOM CENTRAL', value: 8 },
      { viewValue: '9W-CLINICAL TRANSPLANT', value: 16 },
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 29 },
      { viewValue: '11W-NEUROSURGERY', value: 6 },
      { viewValue: '11E-ORTHOPEDICS', value: 4 },
      { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 14 },
      { viewValue: 'C8B-BURN CENTER', value: 22 },
      { viewValue: '5PAC-POST ANESTHESIA CARE UNIT', value: 9 },
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 7 },
      { viewValue: '10CA-CARD/THORASIC SURG PCU', value: 1 },
      { viewValue: 'GB5-GATEWAY BLDG 5TH FLOOR', value: 26 },
      { viewValue: '10E-CARDIOLOGY', value: 2 },
      { viewValue: '7CW-PEDS MAIN 7 CENTRAL WEST', value: 11 },
      { viewValue: 'C4D-MEDICAL RESP ICU', value: 23 },
      { viewValue: '7CE-PEDS-SAM DAY SUITES', value: 10 },
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 31 },
      { viewValue: '8W-WOMENS CARE UNIT', value: 13 },
      { viewValue: '9E-SPECIAL SERVICES SUITES', value: 15 },
      { viewValue: '11EM-EPILEPSY MONITORING', value: 5 },
      { viewValue: 'C5A-OR SURGERY', value: 20 },
      { viewValue: 'C7A-ACUTE CARE SURGERY', value: 21 },
      { viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 30 },
      { viewValue: '10C CICU/CMICU', value: 0 },
      { viewValue: '10W-CARDIOTHORACIC SURGERY', value: 3 },
      { viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 25 },
      { viewValue: '7E-GENERAL CARE PEDS', value: 12 },
      { viewValue: 'N10B-BONE MARROW TRANSPLANT', value: 27 },
      { viewValue: 'C9B-SURGICAL TRAUMA ICU', value: 28 },
      { viewValue: '7PI-PEDIATRIC ICU (0-21)', value: 15 },
      { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 28 },
      { viewValue: 'CSBC-SECURITY CARE', value: 24 },
      { viewValue: 'C10D-CARDIAC SURG ICU', value: 17 },
      { viewValue: 'C8C-BURN CENTER', value: 23 },
      { viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 18 }
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
    ]
  };
  constructor() { }

  ngOnInit() {

  }


}


