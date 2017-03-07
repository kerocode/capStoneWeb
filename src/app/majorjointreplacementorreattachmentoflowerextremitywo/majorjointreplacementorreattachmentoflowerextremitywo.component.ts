import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-majorjointreplacementorreattachmentoflowerextremitywo',
  templateUrl: './majorjointreplacementorreattachmentoflowerextremitywo.component.html',
  styleUrls: ['./majorjointreplacementorreattachmentoflowerextremitywo.component.css']
})
export class MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWOComponent implements OnInit {

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
    patient={};
    model={};
 MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWOC = {

    "lasso": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.0370008013155,
      Discharge_Disposition: 0.0,
      Admit_Unit: -0.170182620217,
      Bed_Category: -0.0,
      iso_result: 0.0,
      adm_order_md_dept: -0.00133577091685,
      icu_order: 0.0,
      stepdown_order: 0.0,
      general_care_order: -0.0,
      attending_change_order: 0.0,
      age: 0.00794177909124
    },
    "lassoCv": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.0739779814189,
      Discharge_Disposition: 0.299542270252,
      Admit_Unit: -0.12403635664,
      Bed_Category: -0.0785327902099,
      iso_result: 0.0,
      adm_order_md_dept: -0.100558995163,
      icu_order: 0.0,
      stepdown_order: 0.547800799234,
      general_care_order: 0.0,
      attending_change_order: 0.347488956041,
      age: -0.00124200828941
    },
    "ridge": {
      Admit_Source: 0.430995008026,
      Primary_Insurance: 0.07712557538,
      Discharge_Disposition: 0.312209009272,
      Admit_Unit: -0.052368766484,
      Bed_Category: -0.364424221827,
      iso_result: 0.130382685736,
      adm_order_md_dept: -0.0920973523899,
      icu_order: 1.74747644481,
      stepdown_order: 1.60552006264,
      general_care_order: 0.670220254427,
      attending_change_order: 0.361404046626,
      age: -0.00847502343264,
    },
    "ridgeCv": {
      Admit_Source: 0.355686618744,
      Primary_Insurance: 0.0785727557436,
      Discharge_Disposition: 0.326917645021,
      Admit_Unit: -0.0498412821985,
      Bed_Category: -0.386193288063,
      iso_result: 0.131183861079,
      adm_order_md_dept: -0.0983372609258,
      icu_order: 1.10020934138,
      stepdown_order: 1.42814130012,
      general_care_order: 0.161468935226,
      attending_change_order: 0.376557969153,
      age: -0.00757154019738
    },
    "linear": {
      Admit_Source: 0.431100132239,
      Primary_Insurance: 0.0770698531561,
      Discharge_Disposition: 0.31095553542,
      Admit_Unit: -0.0527687138766,
      Bed_Category: -0.361846485519,
      iso_result: 0.128949887194,
      adm_order_md_dept: -0.0918322407852,
      icu_order: 1.80933350781,
      stepdown_order: 1.61514748527,
      general_care_order: 0.786603655454,
      attending_change_order: 0.360022636866,
      age: -0.00852827659764,
    }
  };
MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWOC_model={
  Admit_Source : [
    { viewValue: 'TRANSFER FROM A HOSP', value: 2},
    { viewValue: 'CLINIC OR PHYS OFFIC', value: 0},
    { viewValue: 'HOME /WORK / OTHER',value: 1}
  ],

  Primary_Insurance : [
    { viewValue: 'INDIGENT CARE', value: 4},
    { viewValue: 'MEDICARE MANA', value: 8},
    { viewValue: 'ANTHEM MANAGE', value: 1},
    { viewValue: 'ANTHEM' ,value: 0},
    { viewValue: 'COMMERCIAL', value: 2},
    { viewValue: 'HMO/PPO', value: 3},
    { viewValue: 'SELF PAY', value: 10},
    { viewValue: 'OTHER', value: 9},
    { viewValue: 'MEDICARE', value: 7},
    { viewValue: 'MEDICAID', value: 5},
    { viewValue: 'MEDICAID MANA', value: 6}
  ],

  Discharge_Disposition : [
    { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 4},
    { viewValue: 'HOSPICE - HOME', value: 5},
    { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
    { viewValue: 'z DISCH /TRANS TO COURT/LAW ENFRC W/ACUTE IP R', value: 6},
    { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 1},
    { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 2},
    { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 3}
  ],  

  Bed_Category : [
    { viewValue: 'SAME DAY', value: 6},
    { viewValue: 'CORRECTION', value: 1},
    { viewValue: 'MED/SURG', value: 4},
    { viewValue: '0', value: 0},
    { viewValue: 'GUM SUITES', value: 2},
    { viewValue: 'OR', value: 5},
    { viewValue: 'ICU', value: 3}
  ],
  iso_result : [
    { viewValue: 'Isolation', value: 1 },
    { viewValue: '0', value: 0 }
  ],
  Admit_Unit : [
    { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 7},
    { viewValue: "GB5P-CHILDREN'S PERIOP", value: 15},
    { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 9},
    { viewValue: '11CA-JOINT RESTORATION', value: 1},
    { viewValue: '11E-ORTHOPEDICS', value: 2},
    { viewValue: '8W-WOMENS CARE UNIT', value: 6},
    { viewValue: 'C8B-BURN CENTER', value: 10},
    { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 4},
    { viewValue: '5ORC-OPERATING ROOM CENTRAL', value: 5},
    { viewValue: '9E-SPECIAL SERVICES SUITES', value: 8},
    { viewValue: 'GB5-GATEWAY BLDG 5TH FLOOR', value: 14},
    { viewValue: 'CSBC-SECURITY CARE', value: 13},
    { viewValue: '0', value: 0},
    { viewValue: 'C9B-SURGICAL TRAUMA ICU', value: 11},
    { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 17},
    { viewValue: '11W-NEUROSURGERY', value: 3},
    { viewValue: 'C9C-SURGICAL TRAUMA ICU', value: 12},
    { viewValue: 'N10A-BONE MARROW TRANSPLANT', value: 16}
  ],
  adm_order_md_dept : [
    { viewValue: 'INTERNAL MEDICINE', value: 3},
    { viewValue: 'RADIOLOGY', value: 6},
    { viewValue: 'EMERGENCY MEDICINE', value: 2},
    { viewValue: 'ANESTHESIOLOGY', value: 1},
    { viewValue: '0', value: 0},
    { viewValue: 'OBSTETRICS - GYNECOL', value: 4},
    { viewValue: 'ORTHOPEDIC SURGERY', value: 5}
  ], 
  icu_order : [
    { viewValue: '0', value: 0 }, 
    { viewValue: 'LEVEL OF CARE - INTENSIVE', value: 1 }
  ],
  stepdown_order : [
    { viewValue: 'LEVEL OF CARE - INTERMEDIATE/STEPDOWN', value: 1 }, 
    { viewValue: '0', value: 0 }
  ],
  general_care_order : [
    { viewValue: '0', value: 0 },
    { viewValue: 'LEVEL OF CARE - GENERAL', value: 1 }
  ],
  attending_change_order_md_dept : [
    { viewValue: 'INTERNAL MEDICINE', value: 2},
    { viewValue: 'OBSTETRICS - GYNECO', value: 3},
    { viewValue: 'ANESTHESIOLOGY', value: 1},
    { viewValue: '0', value: 0},
    { viewValue: 'SURGERY', value: 5},
    { viewValue: 'ORTHOPEDIC SURGERY', value: 4}
  ]};

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



