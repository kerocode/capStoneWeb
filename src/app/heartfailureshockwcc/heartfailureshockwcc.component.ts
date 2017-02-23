import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heartfailureshockwcc',
  templateUrl: './heartfailureshockwcc.component.html',
  styleUrls: ['./heartfailureshockwcc.component.css']
})
export class HEARTFAILURESHOCKWCCComponent implements OnInit {

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
  HEARTFAILURESHOCKWCCC = {

    "lasso": {
      Admit_Source: -0.0,
      Primary_Insurance: 0.0,
      Discharge_Disposition: 0.168827417468,
      Admit_Unit: -0.0164069320954,
      Bed_Category: 0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.0,
      icu_order: 0.0,
      stepdown_order: 0.0,
      general_care_order: -0.0,
      attending_change_order: 0.684450304505,
      age: -0.0116158146065
    },
    "lassoCv": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.0,
      Discharge_Disposition: 0.228870468042,
      Admit_Unit: -0.00458315762025,
      Bed_Category: 0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.419371822731,
      icu_order: 0.0,
      stepdown_order: 0.655668916534,
      general_care_order: 0.0,
      attending_change_order: 1.13148332769,
      age: -0.014020344233
    },
    "ridge": {
            Admit_Source: -0.0207273122104,
      Primary_Insurance: -0.0286139358339,
      Discharge_Disposition: 0.249093994627,
      Admit_Unit: -0.000446134690143,
      Bed_Category: 0.182483080814,
      iso_result: 0.386723943927,
      adm_order_md_dept: 0.592046147171,
      icu_order: 0.577691136499,
      stepdown_order: 1.62830711755,
      general_care_order: 1.52525326006,
      attending_change_order: 1.12472045739,
      age: -0.0141406957319,
    },
    "ridgeCv": {
       Admit_Source: -0.00893695296027,
      Primary_Insurance: -0.0201913393637,
      Discharge_Disposition: 0.247964348184,
      Admit_Unit: -0.00109712440967,
      Bed_Category: 0.154123896815,
      iso_result: 0.29594398524,
      adm_order_md_dept: 0.566258242516,
      icu_order: 0.412792797794,
      stepdown_order: 1.36217393265,
      general_care_order: 1.07684119196,
      attending_change_order: 1.13647107905,
      age: -0.0143517269481
    },
    "linear": {
      Admit_Source:-0.021650050971,
      Primary_Insurance: -0.0291937272661,
      Discharge_Disposition: 0.249189117696,
      Admit_Unit: -0.000411484251777,
      Bed_Category: 0.184513454469,
      iso_result: 0.393138230135,
      adm_order_md_dept: 0.593778573077,
      icu_order: 0.591772319344,
      stepdown_order: 1.64666518215,
      general_care_order: 1.55770996291,
      attending_change_order: 1.1231929866,
      age: -0.0141264096132,
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
    Bed_Category: [
      { viewValue: 'ED', value: 2 },
      { viewValue: 'CORRECTION', value: 1 },
      { viewValue: 'MED/SURG', value: 4 },
      { viewValue: '0', value: 0 },
      { viewValue: 'ICU', value: 3 }
    ],
    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],
    Admit_Unit: [
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 25},
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 15},
      { viewValue: '9W-CLINICAL TRANSPLANT', value: 9},
      { viewValue: 'CSBC-SECURITY CARE', value: 19},
      { viewValue: '11W-NEUROSURGERY', value: 5}, 
      { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 8}, 
      { viewValue: 'C10A-CORONARY ICU', value: 10},
      { viewValue: 'C10C-CARDIAC SURG ICU', value: 12},
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 6},
      { viewValue: '10CA-CARD/THORASIC SURG PCU', value: 1},
      { viewValue: '0', value: 0}, 
      { viewValue: '10E-CARDIOLOGY', value: 2},
      { viewValue: '11EM-EPILEPSY MONITORING', value: 4},
      { viewValue: 'N10A-BONE MARROW TRANSPLANT', value: 22}, 
      { viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 14},
      { viewValue: 'C4C-MEDICAL RESP ICU', value: 16},
      { viewValue: '8W-WOMENS CARE UNIT', value: 7},
      { viewValue: '10W-CARDIOTHORACIC SURGERY', value: 3},
      { viewValue: 'C7A-ACUTE CARE SURGERY', value: 17},
      { viewValue: 'GB3-GATEWAY BLDG 3RD FLOOR', value: 21},
      { viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 20},
      { viewValue: 'N10B-BONE MARROW TRANSPLANT', value: 23},
      { viewValue: 'C10B-CORONARY ICU', value: 11}, 
      { viewValue: 'C9B-SURGICAL TRAUMA ICU', value: 18},
      { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 24},
      { viewValue: 'C10D-CARDIAC SURG ICU', value: 13},
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 26}
    ],
    adm_order_md_dept: [
      { viewValue: 'INTERNAL MEDICINE', value: 2},
      { viewValue: 'RADIOLOGY', value: 4},
      { viewValue: 'RADIATION ONCOLOGY', value: 3},
      { viewValue: 'ANESTHESIOLOGY', value: 1},
      { viewValue: '0', value: 0},
      { viewValue: 'SURGERY', value: 5}
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
      { viewValue: 'RADIOLOGY', value: 5},
      { viewValue: 'OBSTETRICS - GYNECO', value: 4},
      { viewValue: 'EMERGENCY MEDICINE', value: 1},
      { viewValue: '0', value: 0},
      { viewValue: 'NEUROLOGY', value: 3},
      { viewValue: 'SURGERY', value: 6}
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
