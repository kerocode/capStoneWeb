import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redbloodcelldisorderswomcc',
  templateUrl: './redbloodcelldisorderswomcc.component.html',
  styleUrls: ['./redbloodcelldisorderswomcc.component.css']
})
export class REDBLOODCELLDISORDERSWOMCCComponent implements OnInit {

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
  REDBLOODCELLDISORDERSWOMCCC = {

    "lasso": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.0706185989013,
      Discharge_Disposition: 0.0,
      Admit_Unit: 0.0373924752677,
      Bed_Category: -0.341713299841,
      iso_result: -0.0,
      adm_order_md_dept: -0.0650785273238,
      icu_order: 0.0,
      stepdown_order: -0.0,
      general_care_order: 0.0,
      attending_change_order: 0.0,
      age: -0.00241042199541
    },
    "lassoCv": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.142283894839,
      Discharge_Disposition: 0.0392953228378,
      Admit_Unit: 0.0298684050494,
      Bed_Category: -0.660977263774,
      iso_result: -0.0,
      adm_order_md_dept: 0.141470315191,
      icu_order: -0.0,
      stepdown_order: -0.0,
      general_care_order: 0.0,
      attending_change_order: 0.480496403343,
      age: -0.0165697224856
    },
    "ridge": {
      Admit_Source: 0.182295516783,
      Primary_Insurance: 0.174969190909,
      Discharge_Disposition: 0.109810950735,
      Admit_Unit: 0.0351353221079,
      Bed_Category: -0.708686627592,
      iso_result: -0.344449397629,
      adm_order_md_dept: -0.130664270723,
      icu_order: -1.01361352345,
      stepdown_order: 0.319867705165,
      general_care_order: 2.07516781449,
      attending_change_order: 0.675340353534,
      age: -0.0187346197623,
    },
    "ridgeCv": {
      Admit_Source: 0.177108893466,
      Primary_Insurance: 0.169982921445,
      Discharge_Disposition: 0.108795372064,
      Admit_Unit: 0.0338015926419,
      Bed_Category: -0.704673424245,
      iso_result: -0.307090227961,
      adm_order_md_dept: -0.134156029196,
      icu_order: -0.468860197838,
      stepdown_order: 0.13143084453,
      general_care_order: 1.41269410654,
      attending_change_order: 0.637805956645,
      age: -0.0186979403689
    },
    "linear": {
      Admit_Source: 0.182776891412,
      Primary_Insurance: 0.175475789787,
      Discharge_Disposition: 0.10991913208,
      Admit_Unit: 0.0352611968707,
      Bed_Category: -0.708725756879,
      iso_result: -0.344420633777,
      adm_order_md_dept: -0.130373293464,
      icu_order: -1.07642906387,
      stepdown_order: 0.335817248541,
      general_care_order: 2.12936325081,
      attending_change_order: 0.679118725239,
      age: -0.0187377460916,
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

    Bed_Category: [
      { viewValue: 'SAME DAY', value: 9},
      { viewValue: 'PED MED/SU', value: 6},
      { viewValue: 'ED', value: 2},
      { viewValue: 'CORRECTION', value: 1},
      { viewValue: 'RESEARCH', value: 8},
      { viewValue: 'MED/SURG', value: 4},
      { viewValue: '0', value: 0},
      { viewValue: 'PICU', value: 7},
      { viewValue: 'OR', value: 5},
      { viewValue: 'ICU', value: 3}
    ],

    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    Admit_Unit: [
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 33},
      { viewValue: 'C9D-SURGICAL TRAUMA ICU', value: 26},
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 21},
      { viewValue: '9W-CLINICAL TRANSPLANT', value: 17},
      { viewValue: '11E-ORTHOPEDICS', value: 5},
      { viewValue: '7C-ACUTE CARE PEDIATRICS', value: 9},
      { viewValue: '7PCU-PED PROGRESSIVE CARE', value: 13},
      { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 16},
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 8},
      { viewValue: '10CA-CARD/THORASIC SURG PCU', value: 1},
      { viewValue: 'GB5-GATEWAY BLDG 5TH FLOOR', value: 29},
      { viewValue: '0', value: 0},
      { viewValue: '10E-CARDIOLOGY', value: 2},
      { viewValue: '11EM-EPILEPSY MONITORING', value: 6},
      { viewValue: 'C9C-SURGICAL TRAUMA ICU', value: 25},
      { viewValue: 'N10A-BONE MARROW TRANSPLANT', value: 30},
      { viewValue: 'C4D-MEDICAL RESP ICU', value: 23},
      { viewValue: '7CE-PEDS-SAM DAY SUITES', value: 10},
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 35},
      { viewValue: '8W-WOMENS CARE UNIT', value: 15},
      { viewValue: '7CW-PEDS MAIN 7 CENTRAL WEST', value: 11},
      { viewValue: '11W-NEUROSURGERY', value: 7},
      { viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 34},
      { viewValue: 'C4B-MEDICAL RESP ICU', value: 22},
      { viewValue: '11CA-JOINT RESTORATION', value: 4},
      { viewValue: 'C7A-ACUTE CARE SURGERY', value: 24},
      { viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 28},
      { viewValue: '7E-GENERAL CARE PEDS', value: 12},
      { viewValue: 'A7PO-AMB SURGERY-PREOP', value: 18},
      { viewValue: 'N10B-BONE MARROW TRANSPLANT', value: 31},
      { viewValue: 'CSBC-SECURITY CARE', value: 27}, 
      { viewValue: '7PI-PEDIATRIC ICU (0-21)', value: 14},
      { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 32},
      { viewValue: 'C10D-CARDIAC SURG ICU', value: 19},
      { viewValue: '10W-CARDIOTHORACIC SURGERY', value: 3},
      { viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 20}
    ],

    adm_order_md_dept: [
      { viewValue: 'INTERNAL MEDICINE', value: 3},
      { viewValue: 'RADIOLOGY', value: 9},
      { viewValue: 'PEDIATRICS', value: 8},
      { viewValue: 'EMERGENCY MEDICINE', value: 2},
      { viewValue: 'ANESTHESIOLOGY', value: 1},
      { viewValue: 'OPHTHALMOLOGY', value: 6},
      { viewValue: '0', value: 0},
      { viewValue: 'NEUROSURGERY', value: 4},
      { viewValue: 'SURGERY', value: 10},
      { viewValue: 'OBSTETRICS - GYNECOL', value: 5},
      { viewValue: 'ORTHOPEDIC SURGERY', value: 7}
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
      { viewValue: 'INTERNAL MEDICINE', value: 3},
      { viewValue: 'RADIOLOGY', value: 9},
      { viewValue: 'PEDIATRICS', value: 8},
      { viewValue: 'EMERGENCY MEDICINE', value: 2},
      { viewValue: 'ANESTHESIOLOGY', value: 1},
      { viewValue: 'OPHTHALMOLOGY', value: 6},
      { viewValue: '0', value: 0},
      { viewValue: 'NEUROSURGERY', value: 4},
      { viewValue: 'SURGERY', value: 10},
      { viewValue: 'OBSTETRICS - GYNECOL', value: 5},
      { viewValue: 'ORTHOPEDIC SURGERY', value: 7}      
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
