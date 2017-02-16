import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circulatorydisordersexceptamiwcardcathwomcc',
  templateUrl: './circulatorydisordersexceptamiwcardcathwomcc.component.html',
  styleUrls: ['./circulatorydisordersexceptamiwcardcathwomcc.component.css']
})
export class CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCComponent implements OnInit {

  constructor() { }
<<<<<<< HEAD

  ngOnInit() {
  }

=======
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
  CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCC = {

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

  Admit_Source = [{ viewValue: 'CLINIC OR PHYS OFFIC', value: 0 },
  { viewValue: 'TRANSFER FROM A HOSP', value: 3 }, { viewValue: 'COURT OR LAW ENFORCE', value: 1 },
  { viewValue: 'HOME /WORK / OTHER', value: 2 }, { viewValue: 'TRANSF FROM A SNF', value: 3 }];

  Primary_Insurance = [{ viewValue: 'INDIGENT CARE', value: 4 }, { viewValue: 'MEDICAID MANA', value: 6 }, { viewValue: 'ANTHEM MANAGE', value: 1 },
  { viewValue: 'ANTHEM', value: 0 }, { viewValue: 'COMMERCIAL', value: 2 }, { viewValue: 'HMO/PPO', value: 3 },
  { viewValue: 'SELF PAY', value: 10 }, { viewValue: 'OTHER', value: 9 }, { viewValue: 'MEDICARE', value: 7 },
  { viewValue: 'MEDICARE MANA', value: 8 }, { viewValue: 'MEDICAID', value: 5 }];

  Discharge_Disposition = [
    { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 8 },
    { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 6 },
    { viewValue: 'HOSPICE - HOME', value: 9 },
    { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0 },
    { viewValue: 'LEFT ELOPED -W/O NOTICE-AMA', value: 11 },
    { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 2 },
	{ viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value : 7},
    { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 3 },
	{ viewValue: 'DISCH /TRANS TO LONG TERM CARE HOSP (CERT)'value : 5},
    { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 4 },
    { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 10 },
    { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 1 }];


  Bed_Category = [
    { viewValue: 'ED', value: 2 },
    { viewValue: 'CORRECTION', value: 1 },
    { viewValue: 'RESEARCH', value: 7 },
    { viewValue: 'MED/SURG', value: 5 },
    { viewValue: '0', value: 0 },
    { viewValue: 'GUM SUITES', value: 3 },
    { viewValue: 'PICU', value: 6 },
    { viewValue: 'ICU', value: 4 }];

  iso_result = [
    { viewValue: 'Isolation', value: 1 },
    { viewValue: '0', value: 0 }];

  Admit_Unit = [
    { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 23},
	{ viewValue: 'C3A-ACUTE CARE MEDICINE', value: 16},
	{ viewValue: '9W-CLINICAL TRANSPLANT', value: 10},
	{ viewValue: 'CSBC-SECURITY CARE', value: 20},
	{ viewValue: '3CCL-CARDIAC CATH LAB', value: 5},
	{ viewValue: '11W-NEUROSURGERY', value: 4},
	{ viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 8},
	{ viewValue: 'C10A-CORONARY ICU', value : 11},
	{ viewValue: 'C10B-CORONARY ICU', value : 12},
	{ viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 6},
	( viewValue: '10CA-CARD/THORASIC SURG PCU', value: 1},
	( viewValue: '0', value : 0},
	( viewValue: '10E-CARDIOLOGY', value: 2},
	{ viewValue: 'C11C-NEUROSCIENCE ICU', value: 14},
	{ viewValue: 'N9-MED-STEPDOWN TELE', value: 25},
	( viewValue: '9E-SPECIAL SERVICES SUITES', value: 9},
	{ viewValue: '10W-CARDIOTHORACIC SURGERY', value: 3},
	{ viewValue: 'C7A-ACUTE CARE SURGERY', value: 18},
	{ viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 24}, 
	{ viewValue: 'GB3-GATEWAY BLDG 3RD FLOOR', value: 22},
	{ viewValue: 'C4B-MEDICAL RESP ICU', value: 17},
	{ viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 21},
	{ viewValue: '7PI-PEDIATRIC ICU (0-21)', value: 7},
	{ viewValue: 'C10D-CARDIAC SURG ICU', value: 13},
	{ viewValue: 'C8C-BURN CENTER', value: 19},
	{ viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 15}];


  adm_order_md_dept = [{ viewValue: 'INTERNAL MEDICINE', value: 1 }, 
  { viewValue: '0', value: 0 }, { viewValue: 'SURGERY', value: 2 }] ; 

  icu_order = [{ viewValue: '0', value: 0 }, { viewValue: 'LEVEL OF CARE - INTENSIVE', value: 1 }];

  stepdown_order = [{ viewValue: 'LEVEL OF CARE - INTERMEDIATE/STEPDOWN', value: 1 }, { viewValue: '0', value: 0 }];

  general_care_order = [{ viewValue: '0', value: 0 }, { viewValue: 'LEVEL OF CARE - GENERAL', value: 1 }];

  attending_change_order_md_dept = [
    { viewValue: 'INTERNAL MEDICINE',value: 2},
	{ viewValue: '0',value: 0},
	{ viewValue: 'SURGERY', value: 4},
	{ viewValue: 'NEUROLOGY', value: 3},
	{ viewValue: 'EMERGENCY MEDICINE', value: 1}];

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
>>>>>>> origin/master
}
