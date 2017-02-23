
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depressiveneuroses',
  templateUrl: './depressiveneuroses.component.html',
  styleUrls: ['./depressiveneuroses.component.css']
})
export class DEPRESSIVENEUROSESComponent implements OnInit {

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
  DEPRESSIVENEUROSESC = {

    "lasso": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.0,
      Discharge_Disposition: 0.0,
      Admit_Unit: 0.082947263,
      Bed_Category: 0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.0,
      icu_order: 0.0,
      stepdown_order: 0.0,
      general_care_order: 0.0,
      attending_change_order: 0.0,
      age: 0.005938927
    },
    "lassoCv": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.030155711,
      Discharge_Disposition: 0.001558875,
      Admit_Unit: 0.362891184,
      Bed_Category: 0.0,
      iso_result: 0.0,
      adm_order_md_dept: 0.119449151,
      icu_order: 0.0,
      stepdown_order: 0.0,
      general_care_order: 0.0,
      attending_change_order: 0.0,
      age: 0.02511284
    },
    "ridge": {
      Admit_Source: 0.084255511,
      Primary_Insurance: 0.052928989,
      Discharge_Disposition: 0.047040158,
      Admit_Unit: 0.241462665,
      Bed_Category: -0.848906968,
      iso_result: -0.286896797,
      adm_order_md_dept: 0.138235365,
      icu_order: 0.0,
      stepdown_order: -1.609790033,
      general_care_order: 0.230221801,
      attending_change_order: 0.24058012,
      age: 0.032957668,
    },
    "ridgeCv": {
      Admit_Source: 0.07864412,
      Primary_Insurance: 0.050076912,
      Discharge_Disposition: 0.042076455,
      Admit_Unit: 0.288911079,
      Bed_Category: -0.638090786,
      iso_result: -0.171387382,
      adm_order_md_dept: 0.142102013,
      icu_order: 0.0,
      stepdown_order: -0.273463151,
      general_care_order: 0.203255437,
      attending_change_order: 0.179459199,
      age: 0.031748252
    },
    "linear": {
      Admit_Source: 0.085870738,
      Primary_Insurance: 0.053317973,
      Discharge_Disposition: 0.048919188,
      Admit_Unit: 0.231796392,
      Bed_Category: -0.889028372,
      iso_result: -0.30155234,
      adm_order_md_dept: 0.137359577,
      icu_order: -0.0000000000000000479,
      stepdown_order: -2.089729976,
      general_care_order: 0.233840823,
      attending_change_order: 0.250841142,
      age: 0.033221184,
    }
  };

  Admit_Source = [
  { viewValue: 'COURT OR LAW ENFORCE', value: 1}, 
  { viewValue: 'TRANSFER FROM A SNF', value: 4},
  { viewValue: 'TRANSFER FROM A HOSP', value: 3},
  { viewValue: 'CLINIC OR PHYS OFFIC', value: 0},
  { viewValue: 'HOME /WORK / OTHER', value: 2}];
  
  Primary_Insurance = [
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
  { viewValue: 'MEDICAID', value: 5}];
  
  Discharge_Disposition = [
    { viewValue: 'EXPIRED IN THIS FACILITY', value: 9},
	{ viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 7},
	{ viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 5},
	{ viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
	{ viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 2},
	{ viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value: 6},
	{ viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 3},
	{ viewValue: 'z DISCH /TRANS TO NOT DEFINED HLTH CR INST', value: 11},
	{ viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 4},
	{ viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 10},
	{ viewValue: 'DISCH ADMITTED AS AN IP TO THIS HOSPITAL', value: 8},
	{ viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC',value: 1}];

  Bed_Category = [
    { viewValue: 'PSY-VTC', value: 2 },
    { viewValue: 'MED/SURG', value: 1 },
    { viewValue: '0', value: 0 },
    { viewValue: 'PSYCH', value: 3 }];

  iso_result = [
    { viewValue: 'Isolation', value: 1 },
    { viewValue: '0', value: 0 }];

  Admit_Unit = [
  { viewValue: 'N3-DUAL DIAGNOSIS/MEDICAL PSY', value: 3}, 
	{ viewValue: '10W-CARDIOTHORACIC SURGERY', value: 1},
	{ viewValue: 'N4-GENERAL PSYCHIATRY', value: 4},
	{ viewValue: 'VA TREATMENT CTR(E) ACUTE', value: 7}, 
	{ viewValue: '0', value: 0},
	{ viewValue: '11E-ORTHOPEDICS', value: 2},
	{ viewValue: 'VA TREATMENT CTR (B) ACUTE', value: 6}, 
	{ viewValue: 'NGCS-N GROUND CRISIS STABILIZ', value: 5}];


  adm_order_md_dept = [ 
  { viewValue: '0', value: 0 }, 
  { viewValue: 'PSYCHIATRY', value: 2 },
  { viewValue: 'EMERGENCY MEDICINE', value: 1 }];

  icu_order = [{ viewValue: '0', value: 0 }];

  stepdown_order = [{ viewValue: 'LEVEL OF CARE - INTERMEDIATE/STEPDOWN', value: 1 }, { viewValue: '0', value: 0 }];

  general_care_order = [{ viewValue: '0', value: 0 }, { viewValue: 'LEVEL OF CARE - GENERAL', value: 1 }];

  attending_change_order_md_dept = [ 
  { viewValue: '0', value:0}, 
  { viewValue:'PSYCHIATRY', value:4 }];


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
