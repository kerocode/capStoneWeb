import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rehabilitationwccmcc',
  templateUrl: './rehabilitationwccmcc.component.html',
  styleUrls: ['./rehabilitationwccmcc.component.css']
})
export class REHABILITATIONWCCMCCComponent implements OnInit {

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
  REHABILITATIONWCCMCCC = {

    "lasso": {
      Admit_Source: 0.0,
      Primary_Insurance: -0.242494969082,
      Discharge_Disposition: 0.317689532226,
      Admit_Unit: -0.0,
      Bed_Category: -0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.0,
      icu_order: -0.0,
      stepdown_order: -0.0,
      general_care_order: 0.0,
      attending_change_order: -0.0,
      age: -0.0676245363897
    },
    "lassoCv": {
      Admit_Source: 0.0,
      Primary_Insurance: -0.160349306705,
      Discharge_Disposition: 0.265484695768,
      Admit_Unit: -0.0,
      Bed_Category: -0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.0,
      icu_order: -0.0,
      stepdown_order: -0.0,
      general_care_order: 0.0,
      attending_change_order: 0.0,
      age: -0.0661643429638
    },
    "ridge": {
      Admit_Source: 0.451766742069,
      Primary_Insurance: -0.3005829579,
      Discharge_Disposition: 0.402140098657,
      Admit_Unit: -0.223258027733,
      Bed_Category: -1.71868480911,
      iso_result: 1.08832462248,
      adm_order_md_dept: 1.9592948437,
      icu_order: -5.56379184561,
      stepdown_order: -3.66574810184,
      general_care_order: 0.434542387846,
      attending_change_order: 0.543879969103,
      age: -0.0755847903339,
    },
    "ridgeCv": {
      Admit_Source: 0.417569681539,
      Primary_Insurance:- 0.296164190846,
      Discharge_Disposition: 0.385886408217,
      Admit_Unit: -0.318900831472,
      Bed_Category: -1.52929177522,
      iso_result: 0.972421861523,
      adm_order_md_dept: 1.73629637591,
      icu_order: -3.3798321534,
      stepdown_order: -1.82550047362,
      general_care_order: 0.470531330726,
      attending_change_order: 0.306725887601,
      age: -0.0751017398837
    },
    "linear": {
      Admit_Source: 0.454743877878,
      Primary_Insurance: -0.301139069571,
      Discharge_Disposition: 0.403743021483,
      Admit_Unit: -0.21705851035,
      Bed_Category: -1.73044396499,
      iso_result: 1.09687240766,
      adm_order_md_dept: 1.98364856576,
      icu_order: -5.7645774392,
      stepdown_order: -3.86674835039,
      general_care_order: 0.369724430049,
      attending_change_order: 0.567318577926,
      age: -0.0756273425777,
    }
  };

  REHABILITATIONWCCMCCC_model = {
    Admit_Source: [
      { viewValue: 'TRANSFER FROM A HOSP', value: 3},
      { viewValue: 'HOME /WORK / OTHER', value: 1},
      { viewValue: 'CLINIC OR PHYS OFFIC', value: 0},
      { viewValue: 'TRANSF FROM ANOTH HC', value: 2}
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
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 9},
      { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 6},
      { viewValue: 'DISCH /TRANS TO LONG TERM CARE HOSP (CERT)', value: 5},
      { viewValue: 'DISCH TRANFERRED WITH VCUHS-D/C', value: 11},
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 2},
      { viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value: 7},
      { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 3},
      { viewValue: 'z DISCH /TRANS TO NOT DEFINED HLTH CR INST', value: 13},
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 4},
      { viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CARE', value: 8},
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 12},
      { viewValue: 'DISCH ADMITTED AS AN IP TO THIS HOSPITAL', value: 10},
      { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 1}
    ],

    Bed_Category: [
      { viewValue: 'PSYCH', value: 1 },
      { viewValue: 'RESEARCH', value: 2 },
      { viewValue: '0', value: 0 },
      { viewValue: 'REHAB', value: 3 },
    ],

    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    Admit_Unit: [
      { viewValue: 'N1-REHABILITATIVE MEDICINE', value: 1},
      { viewValue: 'N3-DUAL DIAGNOSIS/MEDICAL PSY', value: 3},
      { viewValue: 'N4-GENERAL PSYCHIATRY', value: 4},
      { viewValue: '0', value: 0},
      { viewValue: 'N2-REHAB MED-BRAIN INJURY', value: 2},
      { viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 5}
    ],

    adm_order_md_dept: [
      { viewValue: 'INTERNAL MEDICINE', value: 2},
      { viewValue: 'REHAB MEDICINE', value: 5},
      { viewValue: 'ANESTHESIOLOGY', value: 1},
      { viewValue: '0', value: 0},
      { viewValue: 'NEUROSURGERY', value: 3},
      { viewValue: 'ORTHOPEDIC SURGERY', value: 4}
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
      { viewValue: 'INTERNAL MEDICINE', value: 1},
      { viewValue: 'OTOLARYNGOLOGY', value: 4},
      { viewValue: 'REHAB MEDICINE', value: 5},
      { viewValue: '0', value: 0},
      { viewValue: 'NEUROSURGERY', value: 3},
      { viewValue: 'NEUROLOGY', value: 2},
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
