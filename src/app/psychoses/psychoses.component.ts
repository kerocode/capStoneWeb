import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psychoses',
  templateUrl: './psychoses.component.html',
  styleUrls: ['./psychoses.component.css']
})
export class PSYCHOSESComponent implements OnInit {


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
  PSYCHOSESC = {

  };
  PSYCHOSESC_model = {
    Admit_Source: [
      { viewValue: 'TRANSFER FROM A SNF', value: 5},
      { viewValue: 'TRANSFER FROM A HOSP', value: 4},
      { viewValue: 'COURT OR LAW ENFORCE', value: 1},
      { viewValue: 'HOME /WORK / OTHER', value: 2},
      { viewValue: 'TRANSF FROM ANOTH HC', value: 3},
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
      { viewValue: 'MEDICAID', value: 5},
      { viewValue: 'MEDICARE MANA', value: 8}
    ],

    Discharge_Disposition: [
      { viewValue: 'DISCH TRANFERRED WITH VCUHS-D/C', value: 12},
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 10},
      { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 8},
      { viewValue: 'DISCH /TRANS TO LONG TERM CARE HOSP (CERT)', value: 7},
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/COUR', value: 6},
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 3},
      { viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value: 9},
      { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 4},
      { viewValue: 'DISCH ADMITTED AS AN IP TO THIS HOSPITAL', value: 11},
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 5},
      { viewValue: 'HOSPICE - HOME', value: 13},
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 14},
      { viewValue: 'z DISCH /TRANS TO NOT DEFINED HLTH CR INST', value: 15}, 
      { viewValue: 'DISCH /TRANS TO FED HLTH CARE FACILITY-VA', value: 2},
      { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 1}
    ],

    Bed_Category: [
      { viewValue: 'PSY-VTC', value: 6},
      { viewValue: 'PED MED/SU', value: 4},
      { viewValue: 'PICU', value: 5},
      { viewValue: 'CORRECTION', value: 1},
      { viewValue: 'MED/SURG', value: 3},
      { viewValue: '0', value: 0},
      { viewValue: 'PSYCH', value: 7},
      { viewValue: 'ICU', value: 2}
    ],

    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    Admit_Unit: [
      { viewValue: 'VA TREATMENT CTR-SEAS ACUTE', value: 20},
      { viewValue: 'C10A-CORONARY ICU', value: 6},
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 15},
      { viewValue: 'C7A-ACUTE CARE SURGERY', value: 9},
      { viewValue: 'N3-DUAL DIAGNOSIS/MEDICAL PSY', value: 11},
      { viewValue: 'N4-GENERAL PSYCHIATRY', value: 13},
      { viewValue: 'VA TREATMENT CTR(E) ACUTE', value: 19},
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 3},
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 8},
      { viewValue: 'N3EC-N 3 ELECTROCONVULSIV THER', value: 12},
      { viewValue: '0', value: 0},
      { viewValue: 'CSBC-SECURITY CARE', value: 10},
      { viewValue: 'C11C-NEUROSCIENCE ICU', value: 7},
      { viewValue: '11W-NEUROSURGERY', value: 2},
      { viewValue: '7C-ACUTE CARE PEDIATRICS', value: 4},
      { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 14},
      { viewValue: '11EM-EPILEPSY MONITORING', value: 1},
      { viewValue: 'VA TREATMENT CTR (B) ACUTE', value: 18},
      { viewValue: 'NGCS-N GROUND CRISIS STABILIZ', value: 17},
      { viewValue: '7PCU-PED PROGRESSIVE CARE', value: 5},
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 16}
    ],

    adm_order_md_dept: [
      { viewValue: 'INTERNAL MEDICINE', value: 2},
      { viewValue: 'RADIOLOGY', value: 6},
      { viewValue: 'PEDIATRICS', value: 4},
      { viewValue: 'EMERGENCY MEDICINE', value: 1},
      { viewValue: '0', value: 0},
      { viewValue: 'NEUROLOGY', value: 3},
      { viewValue: 'PSYCHIATRY', value: 5}
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
      { viewValue: 'EMERGENCY MEDICINE', value: 1},
      { viewValue: '0', value: 0},
      { viewValue: 'NEUROLOGY', value: 3},
      { viewValue: 'PSYCHIATRY', value: 5},
      { viewValue: 'ORTHOPEDIC SURGERY', value: 4}
    ]
  };
 CELLULITISWOMCCC = {

    "lasso": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.0,
      Discharge_Disposition: 0.22570821,
      Admit_Unit: -0.046078982,
      Bed_Category: 0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.0,
      icu_order: 0.0,
      stepdown_order: 1.123894067,
      general_care_order: 0.0,
      attending_change_order: 0.500119134,
      age: 0.018114
    },
    "lassoCv": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.003852594,
      Discharge_Disposition: 0.288111422,
      Admit_Unit: -0.038278443,
      Bed_Category: 0.146495527,
      iso_result: 0.0,
      adm_order_md_dept: 0.064409438,
      icu_order: -0.0664363956,
      stepdown_order: 3.535184292,
      general_care_order: 0.0,
      attending_change_order: 0.835891879,
      age: 0.021162993
    },
    "ridge": {
      Admit_Source: -0.106467864,
      Primary_Insurance: 0.01280091,
      Discharge_Disposition: 0.283654651,
      Admit_Unit: -0.031259081,
      Bed_Category: 0.164965099,
      iso_result: 1.318977526,
      adm_order_md_dept: 0.549043086,
      icu_order: -2.038202281,
      stepdown_order: 3.887738855,
      general_care_order: -0.851203384,
      attending_change_order: 1.108034081,
      age: 0.019260552,
    },
    "ridgeCv": {
      Admit_Source: -0.124383007,
      Primary_Insurance: 0.013378926,
      Discharge_Disposition: 0.298273596,
      Admit_Unit: -0.031471501,
      Bed_Category: 0.193891418,
      iso_result: 1.045220709,
      adm_order_md_dept: 0.533219474,
      icu_order: -1.682423106,
      stepdown_order: 3.556066511,
      general_care_order: -0.672408522,
      attending_change_order: 1.064959861,
      age: 0.019489814
    },
    "linear": {
      Admit_Source: -0.105138305,
      Primary_Insurance: 0.012751563,
      Discharge_Disposition: 0.0282724902,
      Admit_Unit: -0.031249579,
      Bed_Category: 0.163117904,
      iso_result: 1.337937072,
      adm_order_md_dept: 0.54970694,
      icu_order: -2.061237122,
      stepdown_order: 3.906337039,
      general_care_order: -0.865106405,
      attending_change_order: 1.110858859,
      age: 0.019245568,
    }
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
