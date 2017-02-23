import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esophagitisgastroentmiscdigestdisorderswomcc',
  templateUrl: './esophagitisgastroentmiscdigestdisorderswomcc.component.html',
  styleUrls: ['./esophagitisgastroentmiscdigestdisorderswomcc.component.css']
})
export class ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCComponent implements OnInit {

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
  ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCC = {

    "lasso": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.0,
      Discharge_Disposition: 0.0,
      Admit_Unit: 0.0,
      Bed_Category: 0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.0,
      icu_order: 0.0,
      stepdown_order: 0.0,
      general_care_order: 0.0,
      attending_change_order: 0.001192572,
      age: 0.012559239
    },
    "lassoCv": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.0,
      Discharge_Disposition: 0.0,
      Admit_Unit: 0.0,
      Bed_Category: 0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.0,
      icu_order: 0.0,
      stepdown_order: 0.0,
      general_care_order: 0.0,
      attending_change_order: 0.0,
      age: 0.011672864
    },
    "ridge": {
      Admit_Source: 0.064008365,
      Primary_Insurance: -0.039705527,
      Discharge_Disposition: 0.16796942,
      Admit_Unit: 0.001907766,
      Bed_Category: -0.11173424,
      iso_result: 0.621977691,
      adm_order_md_dept: 0.036093657,
      icu_order: -0.886496438,
      stepdown_order: 0.261000604,
      general_care_order: 0.365874227,
      attending_change_order: 0.220854804,
      age: 0.009804915,
    },
    "ridgeCv": {
      Admit_Source: 0.065671771,
      Primary_Insurance: -0.039372312,
      Discharge_Disposition: 0.169418658,
      Admit_Unit: 0.002259779,
      Bed_Category: -0.10576203,
      iso_result: 0.562462842,
      adm_order_md_dept: 0.035259263,
      icu_order: -0.452569759,
      stepdown_order: 0.181683105,
      general_care_order: 0.257765165,
      attending_change_order: 0.216632542,
      age: 0.009836166
    },
    "linear": {
      Admit_Source: 0.063786319,
      Primary_Insurance: -0.039704308,
      Discharge_Disposition: 0.167798481,
      Admit_Unit: 0.001866533,
      Bed_Category: -0.11221548,
      iso_result: 0.624796022,
      adm_order_md_dept: 0.036148414,
      icu_order: -0.93383039,
      stepdown_order: 0.268131554,
      general_care_order: 0.374421815,
      attending_change_order: 0.221256834,
      age: 0.0098909823,
    }
  };
esophagitisgastroentmiscdigestdisorderswomcc_model = {
  Admit_Source : [
  { viewValue: 'TRANSFER FROM A SNF', value: 5}, 
  { viewValue: 'TRANSFER FROM A HOSP', value: 4},
  { viewValue: 'COURT OR LAW ENFORCE',value: 1},
  { viewValue: 'HOME /WORK / OTHER', value: 2},
  { viewValue: 'TRANSF FROM ANOTH HC', value: 3},
  { viewValue: 'CLINIC OR PHYS OFFIC', value: 0}
  ],
  
  Primary_Insurance : [
  { viewValue: 'INDIGENT CARE', value: 4},
  { viewValue: 'MEDICAID MANA', value: 6},
  { viewValue: 'ANTHEM MANAGE', value: 1},
  { viewValue: 'ANTHEM', value: 0},
  { viewValue: 'COMMERCIAL', value: 2}, 
  { viewValue: 'HMO/PPO', value: 3},
  { viewValue: 'SELF PAY',value: 10},
  { viewValue: 'OTHER', value: 9},
  { viewValue: 'MEDICARE', value: 7}, 
  { viewValue: 'MEDICARE MANA', value: 8},
  { viewValue: 'MEDICAID', value: 5}
  ],

  Discharge_Disposition : [
    { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 6},
	{ viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 4},
	{ viewValue: 'HOSPICE - HOME', value: 7},
	{ viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
	{ viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 1},
	{ viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value: 5},
	{ viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 2},
	{ viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 3},
	{ viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 8},
	{ viewValue: 'LEFT BEFORE CLINICAL EVAL -AMA', value: 9}
  ],

  Bed_Category : [
    { viewValue: 'SAME DAY', value: 8},
	{ viewValue: 'PED MED/SU', value: 5},
	{ viewValue: 'ED', value: 1},
	{ viewValue: 'CORRECTION', value: 0},
	{ viewValue: 'RESEARCH', value: 7},
	{ viewValue: 'MED/SURG', value: 4},
	{ viewValue: 'GUM SUITES', value: 2},
	{ viewValue: 'PICU', value: 6},
	{ viewValue: 'ICU', value: 3}
	],

  iso_result: [
    { viewValue: 'Isolation', value: 1 },
    { viewValue: '0', value: 0 }
	],

  Admit_Unit : [
    { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 32},
	{ viewValue: 'C3A-ACUTE CARE MEDICINE', value: 21},
	{ viewValue: '9W-CLINICAL TRANSPLANT', value: 17},
	{ viewValue: 'CSBC-SECURITY CARE', value: 24},
	{ viewValue: '7C-ACUTE CARE PEDIATRICS', value: 8},
	{ viewValue: '3CCL-CARDIAC CATH LAB', value: 6},
	{ viewValue: '11W-NEUROSURGERY', value: 5},
	{ viewValue: '7PCU-PED PROGRESSIVE CARE', value: 12},
	{ viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 15},
	{ viewValue: 'C10A-CORONARY ICU', value: 18},
	{ viewValue: "GB5P-CHILDREN'S PERIOP", value: 28},
	{ viewValue: 'C10B-CORONARY ICU', value: 19},
	{ viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 7},
	{ viewValue: '10CA-CARD/THORASIC SURG PCU', value: 0},
	{ viewValue: 'GB5-GATEWAY BLDG 5TH FLOOR', value: 27},
	{ viewValue: '10E-CARDIOLOGY', value: 1},
	{ viewValue: '7CW-PEDS MAIN 7 CENTRAL WEST', value: 10},
	{ viewValue: 'N10A-BONE MARROW TRANSPLANT', value: 29},
	{ viewValue: 'C9A-SURGICAL TRAUMA ICU', value: 23},
	{ viewValue: '7CE-PEDS-SAM DAY SUITES', value: 9},
	{ viewValue: 'N9-MED-STEPDOWN TELE', value: 34},
	{ viewValue: '8W-WOMENS CARE UNIT', value: 14},
	{ viewValue: '9E-SPECIAL SERVICES SUITES', value: 16}, 
	{ viewValue: '10W-CARDIOTHORACIC SURGERY', value: 2},
	{ viewValue: 'C7A-ACUTE CARE SURGERY', value: 22}, 
	{ viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 33},
	{ viewValue: 'GB3-GATEWAY BLDG 3RD FLOOR', value: 26},
	{ viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 25}, 
	{ viewValue: '7E-GENERAL CARE PEDS', value: 11},
	{ viewValue: 'N10B-BONE MARROW TRANSPLANT', value: 30},
	{ viewValue: '11EM-EPILEPSY MONITORING', value: 4},
	{ viewValue: '11E-ORTHOPEDICS', value: 3},
	{ viewValue: '7PI-PEDIATRIC ICU (0-21)', value: 13},
	{ viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 31},
	{ viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 20}
	],
  adm_order_md_dept : [
  { viewValue: 'INTERNAL MEDICINE', value: 4},
	{ viewValue: 'RADIOLOGY', value: 10},
	{ viewValue: 'PEDIATRICS', value: 9},
	{ viewValue: 'EMERGENCY MEDICINE', value: 3},
	{ viewValue: 'REHAB MEDICINE', value: 11},
	{ viewValue: 'ANESTHESIOLOGY', value: 1},
	{ viewValue: '0', value: 0},
	{ viewValue: 'NEUROLOGY', value: 5},
	{ viewValue: 'OTOLARYNGOLOGY', value: 8},
	{ viewValue: 'DENTISTRY', value: 2},
	{ viewValue: 'SURGERY', value: 12},
	{ viewValue: 'OBSTETRICS - GYNECOL', value: 6},
	{ viewValue: 'ORTHOPEDIC SURGERY', value: 7}],
  icu_order : [{ viewValue: '0', value: 0 }, { viewValue: 'LEVEL OF CARE - INTENSIVE', value: 1 }],
  stepdown_order :[{ viewValue: 'LEVEL OF CARE - INTERMEDIATE/STEPDOWN', value: 1 }, { viewValue: '0', value: 0 }],
  general_care_order :[{ viewValue: '0', value: 0 }, { viewValue: 'LEVEL OF CARE - GENERAL', value: 1 }],
  attending_change_order_md_dept : [
  { viewValue:'INTERNAL MEDICINE', value:2}, 
  { viewValue: 'RADIOLOGY', value: 8},
  { viewValue: 'EMERGENCY MEDICINE', value: 1},
  { viewValue:  'PEDIATRICS', value:6},
  { viewValue: 'NEUROLOGY', value: 3},
  { viewValue:  'REHAB MEDICINE', value:9}, 
  { viewValue: '0', value:0},
  { viewValue:'OTOLARYNGOLOGY', value:5},
  {viewValue:'SURGERY', value:10}, 
  { viewValue: 'NEUROSURGERY', value:4}, 
  { viewValue:'PSYCHIATRY', value:7 }]
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
