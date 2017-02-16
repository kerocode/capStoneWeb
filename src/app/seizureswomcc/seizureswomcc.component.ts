import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seizureswomcc',
  templateUrl: './seizureswomcc.component.html',
  styleUrls: ['./seizureswomcc.component.css']
})
export class SEIZURESWOMCCComponent implements OnInit {

   constructor() { }
  lines = [];
  variables = [
    "Admit_Source",
    "Primary_Insurance",
    "Discharge_Disposition",
    "Admit_Unit",
    "Bed_Category",
    "iso_result",
    "adm_order_md_dept",
    "icu_order",
    "stepdown_order",
    "general_care_order",
    "attending_change_order",
    "age"]
  patient = {};
  model = {};
  SEIZURESWOMCCC = {

    "lasso": {
      Admit_Source: -0.0,
      Primary_Insurance: 0.0,
      Discharge_Disposition: 0.0,
      Admit_Unit: 0.0,
      Bed_Category: -0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.0,
      icu_order: 0.0,
      stepdown_order: 0.0,
      general_care_order: 0.0,
      attending_change_order: 0.0,
      age: 0.0222239842727
    },
    "lassoCv": {
      Admit_Source: -0.0375516925558,
      Primary_Insurance: 0.0,
      Discharge_Disposition: 0.0685049373364,
      Admit_Unit: 0.00794854228655,
      Bed_Category: -0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.102637289233,
      icu_order: 0.0,
      stepdown_order: 0.0,
      general_care_order: 0.0,
      attending_change_order: 0.0494672956254,
      age: 0.0213122491302
    },
    "ridge": {
      Admit_Source: -0.167355588708,
      Primary_Insurance: 0.0203735661131,
      Discharge_Disposition: 0.106690056284,
      Admit_Unit: -0.0086912608538,
      Bed_Category: -0.0425406492083,
      iso_result: 0.448599937983,
      adm_order_md_dept: 0.153512414357,
      icu_order: 0.913935565603,
      stepdown_order: 1.15399848231,
      general_care_order: 1.38784895701,
      attending_change_order: -0.00150479374598,
      age: 0.0164651466348,
    },
    "ridgeCv": {
      Admit_Source: -0.148235254355,
      Primary_Insurance: 0.0178163783473,
      Discharge_Disposition: 0.105829964616,
      Admit_Unit: -0.00495126005352,
      Bed_Category: -0.0647984736655,
      iso_result: 0.311436657382,
      adm_order_md_dept: 0.147528866468,
      icu_order: 0.666304444491,
      stepdown_order: 0.902523140971,
      general_care_order: 0.99278465305,
      attending_change_order: 0.0304773007147,
      age: 0.0170886999313
    },
    "linear": {
      Admit_Source: -0.168751548782,
      Primary_Insurance: 0.0205711913534,
      Discharge_Disposition: 0.106733885612,
      Admit_Unit: -0.0089487979142,
      Bed_Category: -0.0406420796443,
      iso_result: 0.459320029022,
      adm_order_md_dept: 0.153926430073,
      icu_order: 0.932154937089,
      stepdown_order: 1.17164613031,
      general_care_order: 1.41719982304,
      attending_change_order: -0.00388433042839,
      age: 0.0164208607097,
    }
  };

  SEIZURESWOMCCC_model = {
    Admit_Source: [
      { viewValue: 'COURT OR LAW ENFORCE', value: 1},
      { viewValue: 'TRANSFER FROM A HOSP', value: 4},
      { viewValue: 'CLINIC OR PHYS OFFIC', value: 0},
      { viewValue: 'HOME /WORK / OTHER', value: 2},
      { viewValue: 'TRANSF FROM ANOTH HC', value: 3}
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
      { viewValue: 'MEDICAID', value: 5},
      { viewValue: 'MEDICARE MANA', value: 8}
    ],

    Discharge_Disposition: [
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 7},
      { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 5},
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 2},
      { viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value: 6},
      { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 3},
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 4},
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 8},
      { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 1}
    ],

    Bed_Category: [
      { viewValue: 'PED MED/SU', value: 4 },
      { viewValue: 'MED/SURG', value: 3},
      { viewValue: 'ED', value: 1 },
      { viewValue: 'CORRECTION', value: 0 },
      { viewValue: 'RESEARCH', value: 6 },
      { viewValue: 'PICU', value: 5 },
      { viewValue: 'ICU', value: 2 }
    ],

    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    Admit_Unit: [
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 31},
      { viewValue: 'C9D-SURGICAL TRAUMA ICU', value: 28},
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 21},
      { viewValue: '9W-CLINICAL TRANSPLANT', value: 12},
      { viewValue: '11E-ORTHOPEDICS', value: 0},
      { viewValue: '7C-ACUTE CARE PEDIATRICS', value: 4},
      { viewValue: '11W-NEUROSURGERY', value: 2},
      { viewValue: '7PCU-PED PROGRESSIVE CARE', value: 8},
      { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 11},
      { viewValue: 'C10B-CORONARY ICU', value: 13},
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 3},
      { viewValue: 'C11C-NEUROSCIENCE ICU', value: 18},
      { viewValue: '7CW-PEDS MAIN 7 CENTRAL WEST', value: 6},
      { viewValue: 'C9C-SURGICAL TRAUMA ICU', value: 27},
      { viewValue: 'C9A-SURGICAL TRAUMA ICU', value: 26},
      { viewValue: 'C11D-NEUROSCIENCE ICU', value: 19},
      { viewValue: '7CE-PEDS-SAM DAY SUITES', value: 5},
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 33},
      { viewValue: 'C4C-MEDICAL RESP ICU', value: 22},
      { viewValue: '8W-WOMENS CARE UNIT', value: 10},
      { viewValue: '11EM-EPILEPSY MONITORING', value: 1},
      { viewValue: 'C7A-ACUTE CARE SURGERY', value: 24},
      { viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 32},
      { viewValue: 'C11A-NEUROSCIENCE ICU', value: 16},
      { viewValue: 'C11B-NEUROSCIENCE ICU', value: 17},
      { viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 30},
      { viewValue: '7E-GENERAL CARE PEDS', value: 7},
      { viewValue: 'C4D-MEDICAL RESP ICU', value: 23},
      { viewValue: 'C10C-CARDIAC SURG ICU', value: 14},
      { viewValue: 'CSBC-SECURITY CARE', value: 29},
      { viewValue: '7PI-PEDIATRIC ICU (0-21)', value: 9},
      { viewValue: 'C10D-CARDIAC SURG ICU', value: 15},
      { viewValue: 'C8C-BURN CENTER', value: 25},
      { viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 20}
    ],

    adm_order_md_dept: [
      { viewValue: 'INTERNAL MEDICINE', value: 2},
      { viewValue: 'PEDIATRICS', value: 5},
      { viewValue: 'EMERGENCY MEDICINE', value: 1},
      { viewValue: 'REHAB MEDICINE', value: 7},
      { viewValue: 'NEUROSURGERY', value: 4},
      { viewValue: '0', value: 0},
      { viewValue: 'XX', value: 8},
      { viewValue: 'NEUROLOGY', value: 3},
      { viewValue: 'PSYCHIATRY', value: 6}
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

    attending_change_order_md_dept: [
      { viewValue: 'INTERNAL MEDICINE', value: 2},
      { viewValue: 'PEDIATRICS', value: 5},
      { viewValue: 'EMERGENCY MEDICINE', value: 1},
      { viewValue: 'REHAB MEDICINE', value: 6},
      { viewValue: '0', value: 0},
      { viewValue: 'NEUROSURGERY', value: 4},
      { viewValue: 'NEUROLOGY', value: 3},
      { viewValue: 'SURGERY', value: 7}
    ]
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
