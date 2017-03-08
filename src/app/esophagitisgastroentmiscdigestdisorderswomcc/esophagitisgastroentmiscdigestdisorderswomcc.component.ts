import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-esophagitisgastroentmiscdigestdisorderswomcc',
  templateUrl: './esophagitisgastroentmiscdigestdisorderswomcc.component.html',
  styleUrls: ['./esophagitisgastroentmiscdigestdisorderswomcc.component.css']
})
export class ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCComponent implements OnInit {

  constructor() { }
  lines = [];
    selectedModel={
    linear:false,
    ridge:false,
    ridgeCv:false,
    lasso:false,
    lassoCv:false
  }
   prediction=[];
  variables = [
    "Admit_Source",
    "Primary_Insurance",
    "Discharge_Disposition",
    "Admit_Unit",
    "iso_result",
    "icu_order",
    "stepdown_order",
    "general_care_order",
    "age"]
    patient={};
    showPrediction=false;
  hide=true;
  reportModel = {};
  model:Model={AdmitSource:0,AdmitUnit:0,DischargeDisposition:0,icuOrder:0,PrimaryInsurance:0,
              age:0,generalCareOrder:0,stepdownOrder:0,isoResult:0};
  ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCC = {

    "lasso": {
      Admit_Source:  0.000000,
      Primary_Insurance: -0.000000,
  Discharge_Disposition:  0.003357,
             Admit_Unit : 0.000000,
             iso_result : 0.000000,
              icu_order :-0.000000,
         stepdown_order : 0.000000,
     general_care_order :-0.000000,
                    age : 0.003695,
      meanSquareError:9.57,
     variance:0.00
    },
    "lassoCv": {
       Admit_Source : 0.0,
      Primary_Insurance:  0.0,
  Discharge_Disposition : 0.0,
             Admit_Unit : 0.0,
             iso_result : 0.0,
              icu_order :-0.0,
         stepdown_order : 0.0,
     general_care_order :-0.0,
                    age : 0.0,
       meanSquareError:8.58,
      variance:0.00
    },
    "ridge": {
      Admit_Source:  0.188041,
      Primary_Insurance: -0.037812,
  Discharge_Disposition:  0.213655,
             Admit_Unit:  0.003526,
             iso_result:  0.517688,
              icu_order: -0.518233,
         stepdown_order:  0.242905,
     general_care_order:  0.063689,
                    age:  0.004417,
       meanSquareError:9.39,
      variance:0.02
    },
    "ridgeCv": {
     Admit_Source:  0.184075,
      Primary_Insurance: -0.037071,
  Discharge_Disposition:  0.214338,
             Admit_Unit:  0.003855,
             iso_result:  0.461032,
              icu_order: -0.237894,
         stepdown_order:  0.186609,
     general_care_order:  0.026784,
                    age:  0.004387,
       meanSquareError:9.39,
      variance:0.02
    },
    "linear": {
           Admit_Source:  0.188188,
      Primary_Insurance: -0.037819,
  Discharge_Disposition:  0.213524,
             Admit_Unit:  0.003484,
             iso_result:  0.520479,
              icu_order: -0.552745,
         stepdown_order:  0.248328,
     general_care_order:  0.067134,
                    age:  0.004426,
       meanSquareError:9.39,
      variance:0.02
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

  iso_result: [
    { viewValue: 'Isolation', value: 1 },
    { viewValue: '0', value: 0 }
	],

  Admit_Unit : [
  { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 29},
  { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 19},
  { viewValue:  '9W-CLINICAL TRANSPLANT', value: 15}, 
  { viewValue: '11E-ORTHOPEDICS', value: 3}, 
  { viewValue: '3CCL-CARDIAC CATH LAB', value: 6},
  { viewValue:  '7PCU-PED PROGRESSIVE CARE', value: 11}, 
  { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 13}, 
  { viewValue: 'C10A-CORONARY ICU', value: 16}, 
  { viewValue: 'C10B-CORONARY ICU', value: 17}, 
  { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 7}, 
  { viewValue: '10CA-CARD/THORASIC SURG PCU', value: 0}, 
  { viewValue: 'GB5-GATEWAY BLDG 5TH FLOOR', value: 25}, 
  { viewValue: '10E-CARDIOLOGY', value: 1}, 
  { viewValue: '7CW-PEDS MAIN 7 CENTRAL WEST', value: 9}, 
  { viewValue: 'N10A-BONE MARROW TRANSPLANT', value: 26}, 
  { viewValue: 'C9A-SURGICAL TRAUMA ICU', value: 21}, 
  { viewValue: '7CE-PEDS-SAM DAY SUITES', value: 8}, 
  { viewValue: 'N9-MED-STEPDOWN TELE', value: 31}, 
  { viewValue: '8W-WOMENS CARE UNIT', value: 12}, 
  { viewValue: '9E-SPECIAL SERVICES SUITES', value: 14}, 
  { viewValue: '10W-CARDIOTHORACIC SURGERY', value: 2}, 
  { viewValue: '11W-NEUROSURGERY', value: 5}, 
  { viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 30}, 
  { viewValue: 'GB3-GATEWAY BLDG 3RD FLOOR', value: 24}, 
  { viewValue: 'C7A-ACUTE CARE SURGERY', value: 20}, 
  { viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 23}, 
  { viewValue: '7E-GENERAL CARE PEDS', value: 10}, 
  { viewValue: 'N10B-BONE MARROW TRANSPLANT', value: 27}, 
  { viewValue: '11EM-EPILEPSY MONITORING', value: 4}, 
  { viewValue: 'CSBC-SECURITY CARE', value: 22}, 
  { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 28}, 
  { viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 18}
	],
  icu_order : [{ viewValue: '0', value: 0 }, { viewValue: 'LEVEL OF CARE - INTENSIVE', value: 1 }],
  stepdown_order :[{ viewValue: 'LEVEL OF CARE - INTERMEDIATE/STEPDOWN', value: 1 }, { viewValue: '0', value: 0 }],
  general_care_order :[{ viewValue: '0', value: 0 }, { viewValue: 'LEVEL OF CARE - GENERAL', value: 1 }],
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
