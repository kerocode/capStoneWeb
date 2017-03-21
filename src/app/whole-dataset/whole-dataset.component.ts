import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-whole-dataset',
  templateUrl: './whole-dataset.component.html',
  styleUrls: ['./whole-dataset.component.css']
})
export class WholeDatasetComponent implements OnInit {

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
    "adm_order_md_dept",
    "icu_order",
    "stepdown_order",
    "general_care_order",
    "attending_change_order",
    "age"]
  patient = {};
  showPrediction=false;
  hide=true;
  reportModel = {};
  model:Model={AdmitSource:0,AdmitUnit:0,DischargeDisposition:0,icuOrder:0,PrimaryInsurance:0,
              age:0,generalCareOrder:0,stepdownOrder:0,isoResult:0};
 WHOLEDATASETC = {

    "lasso": {
           Admit_Source:  -0.000000,
      Primary_Insurance:  -0.000000,
  Discharge_Disposition:  0.417251,
             Admit_Unit:  0.009649,
             iso_result:  0.000000,
              icu_order:  1.876753,
         stepdown_order: 1.692146,
     general_care_order:  0.000000,
                    age: -0.000000,
      meanSquareError:77.73,
      variance:0.11
    },
    "lassoCv": {
               Admit_Source: -0.083267,
      Primary_Insurance: -0.045593,
  Discharge_Disposition:  0.364699,
             Admit_Unit: 0.007204,
             iso_result:  2.629186,
              icu_order: 4.142151,
         stepdown_order: 3.202660,
     general_care_order: 0.293460,
                    age: -0.007990,
       meanSquareError:74.17,
      variance:0.15
    },
    "ridge": {
                Admit_Source:  -0.160650,
      Primary_Insurance: -0.056620,
  Discharge_Disposition:  0.355109,
             Admit_Unit: 0.009746,
             iso_result:  3.571284,
              icu_order: 4.787603,
         stepdown_order: 3.680965,
     general_care_order:   1.219954,
                    age: -0.011916,
      meanSquareError:73.86,
      variance:0.15
    },
    "ridgeCv": {
               Admit_Source:  -0.160366,
      Primary_Insurance: -0.056642,
  Discharge_Disposition:  0.355314,
             Admit_Unit:  0.009743,
             iso_result:  3.563436,
              icu_order: 4.780840,
         stepdown_order: 3.677958,
     general_care_order:  1.216742,
                    age: -0.011894,
      meanSquareError:73.86,
      variance:0.15
    },
    "linear": {
           Admit_Source: -0.160665,
      Primary_Insurance: -0.056618,
  Discharge_Disposition:  0.355098,
             Admit_Unit: 0.009747,
             iso_result:  3.571698,
              icu_order: 4.787959,
         stepdown_order: 3.681123,
     general_care_order:  1.220123,
                    age: -0.011917,
      meanSquareError:73.86,
      variance:0.15
    }
  };

 WHOLEDATASETC_model = {
    Admit_Source: [
      { viewValue: 'TRANSFER FROM A SNF', value: 6},
      { viewValue: 'TRANSFER FROM A HOSP', value: 5},
      { viewValue: 'COURT OR LAW ENFORCE', value: 1},
      { viewValue: 'HOME /WORK / OTHER', value: 2},
      { viewValue: 'TRANSF FROM ANOTH HC', value: 4},
      { viewValue: 'CLINIC OR PHYS OFFIC', value: 0},
      { viewValue: 'TRANS FROM AMB SURG', value: 3}
    ],
    Primary_Insurance: [
      { viewValue: 'INDIGENT CARE', value: 4},
      { viewValue: 'MEDICARE MANA', value: 8},
      { viewValue: 'ANTHEM MANAGE', value: 1},
      { viewValue: 'ANTHEM', value: 0}, 
      { viewValue: 'COMMERCIAL', value: 2},
      { viewValue: 'HMO/PPO', value: 3},
      { viewValue: 'SELF PAY', value: 10},
      { viewValue: 'OTHER', value: 9},
      { viewValue: 'MEDICAID', value: 5},
      { viewValue: 'MEDICARE', value: 7},
      { viewValue: 'MEDICAID MANA', value: 6}
    ],

    Discharge_Disposition: [
      { viewValue: 'z DISCH /TRANS TO HME HLTH SVC ORG W/ACUTE IP', value: 21},
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
      { viewValue: 'z DISCH /TRANS TO COURT/LAW ENFRC W/ACUTE IP R', value: 19},
      { viewValue: 'z DISCH /TRANS TO NOT DEFINED HLTH CR INST', value: 23},
      { viewValue: 'DISCH /TRANS TO CANCER CTR OR CHILD HOSP', value: 1},
      { viewValue: 'DISCH /TRANS TO FED HLTH CARE FACILITY-VA', value: 3}, 
      { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 2},
      { viewValue: 'z DISCH /TRANS TO SNF W/MCR CERT W/ACUTE IP RE', value: 24},
      { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 8}, 
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 6}, 
      { viewValue: 'HOSPICE - MEDICAL FAC (CERT) PROVIDE HOSPICE C', value: 15},
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 10},
      { viewValue: 'z DISCH /TRANS TO IRF/REHAB UNT W/ACUTE IP REA', value: 22},
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 4},
      { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 5},
      { viewValue: 'z DISCH /TRANS TO CUSTDL SUPPT CARE FAC W/IP R', value: 20}, 
      { viewValue: 'LEFT ELOPED -W/O NOTICE-AMA', value: 18}, 
      { viewValue: 'EXPIRED IN THIS FACILITY', value: 13}, 
      { viewValue: 'DISCH /TRANS TO LONG TERM CARE HOSP (CERT)', value: 7}, 
      { viewValue: 'DISCH TRANFERRED WITH VCUHS-D/C', value: 12}, 
      { viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value: 9}, 
      { viewValue: 'DISCH ADMITTED AS AN IP TO THIS HOSPITAL', value: 11}, 
      { viewValue: 'z DISCH STILL PATIENT-CONTINUES BILLING', value: 25}, 
      { viewValue: 'HOSPICE - HOME', value: 14}, 
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 16}, 
      { viewValue: 'LEFT BEFORE CLINICAL EVAL -AMA', value: 17}
    ],

    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    Admit_Unit: [
      { viewValue: '0', value: 0},
      { viewValue: 'C11B-NEUROSCIENCE ICU', value: 34}, 
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 67}, 
      { viewValue: 'C9B-SURGICAL TRAUMA ICU', value: 48}, 
      { viewValue: '7C-ACUTE CARE PEDIATRICS', value: 15}, 
      { viewValue: 'N3-DUAL DIAGNOSIS/MEDICAL PSY', value: 61}, 
      { viewValue: '5ORC-OPERATING ROOM CENTRAL', value: 12}, 
      { viewValue: 'N5-MEDICINE-GENERAL', value: 65}, 
      { viewValue: '9E-SPECIAL SERVICES SUITES', value: 24}, 
      { viewValue: '9W-CLINICAL TRANSPLANT', value: 25}, 
      { viewValue: '11E-ORTHOPEDICS', value: 6}, 
      { viewValue: 'N2-REHAB MED-BRAIN INJURY', value: 59}, 
      { viewValue: '3CCL-CARDIAC CATH LAB', value: 9}, 
      { viewValue: 'BRACHYTHERAPY IMAGING', value: 28}, 
      { viewValue: '7E-GENERAL CARE PEDS', value: 18}, 
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 38}, 
      { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 23}, 
      { viewValue: 'C10A-CORONARY ICU', value: 29}, 
      { viewValue: 'N2C-ISOLATION UNIT', value: 60}, 
      { viewValue: 'C8B-BURN CENTER', value: 45}, 
      { viewValue: 'C10B-CORONARY ICU', value: 30}, 
      { viewValue: '5PAC-POST ANESTHESIA CARE UNIT', value: 13}, 
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 10}, 
      { viewValue: '10CA-CARD/THORASIC SURG PCU', value: 2}, 
      { viewValue: 'GB5-GATEWAY BLDG 5TH FLOOR', value: 54}, 
      { viewValue: '10E-CARDIOLOGY', value: 3}, 
      { viewValue: 'C11C-NEUROSCIENCE ICU', value: 35}, 
      { viewValue: '7PCU-PED PROGRESSIVE CARE', value: 19}, 
      { viewValue: 'C9D-SURGICAL TRAUMA ICU', value: 50}, 
      { viewValue: '11EM-EPILEPSY MONITORING', value: 7}, 
      { viewValue: 'C9C-SURGICAL TRAUMA ICU', value: 49}, 
      { viewValue: 'N10A-BONE MARROW TRANSPLANT', value: 57}, 
      { viewValue: 'C4D-MEDICAL RESP ICU', value: 42}, 
      { viewValue: 'C11D-NEUROSCIENCE ICU', value: 36}, 
      { viewValue: '7CE-PEDS-SAM DAY SUITES', value: 16}, 
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 69}, 
      { viewValue: 'VA TREATMENT CTR-SEAS ACUTE', value: 73}, 
      { viewValue: 'C4C-MEDICAL RESP ICU', value: 41}, 
      { viewValue: 'N1-REHABILITATIVE MEDICINE', value: 56}, 
      { viewValue: 'N5AU-ADMISSION UNIT', value: 66}, 
      { viewValue: 'VA TREATMENT CTR(E) ACUTE', value: 72}, 
      { viewValue: '5LD-Main 5 OB OR', value: 11}, 
      { viewValue: '8W-WOMENS CARE UNIT', value: 22}, 
      { viewValue: '10W-CARDIOTHORACIC SURGERY', value: 4}, 
      { viewValue: '7CW-PEDS MAIN 7 CENTRAL WEST', value: 17}, 
      { viewValue: 'C5A-OR SURGERY', value: 43}, 
      { viewValue: 'N3EC-N 3 ELECTROCONVULSIV THER', value: 62}, 
      { viewValue: '11W-NEUROSURGERY', value: 8}, 
      { viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 68}, 
      { viewValue: 'C11A-NEUROSCIENCE ICU', value: 33}, 
      { viewValue: 'VA TREATMENT CTR (B) ACUTE', value: 71}, 
      { viewValue: "8E-WOMEN'S HEALTH CARE", value: 21}, 
      { viewValue: '10C CICU/CMICU', value: 1}, 
      { viewValue: 'GB3-GATEWAY BLDG 3RD FLOOR', value: 53},
      { viewValue: 'C4B-MEDICAL RESP ICU', value: 40}, 
      { viewValue: '11CA-JOINT RESTORATION', value: 5}, 
      { viewValue: 'C7A-ACUTE CARE SURGERY', value: 44}, 
      { viewValue: '6LD-LABOR AND DELIVERY ROOM', value: 14}, 
      { viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 52}, 
      { viewValue: 'N4-GENERAL PSYCHIATRY', value: 63}, 
      { viewValue: 'C9A-SURGICAL TRAUMA ICU', value: 47}, 
      { viewValue: 'A7PO-AMB SURGERY-PREOP', value: 27}, 
      { viewValue: "GB5P-CHILDREN'S PERIOP", value: 55}, 
      { viewValue: 'N10B-BONE MARROW TRANSPLANT', value: 58}, 
      { viewValue: 'C4A-MEDICAL RESP ICU', value: 39}, 
      { viewValue: 'C10C-CARDIAC SURG ICU', value: 31}, 
      { viewValue: 'CSBC-SECURITY CARE', value: 51}, 
      { viewValue: 'A7PA-AMB SURGERY-POST ANESTH', value: 26}, 
      { viewValue: '7PI-PEDIATRIC ICU (0-21)', value: 20}, 
      { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 64}, 
      { viewValue: 'C10D-CARDIAC SURG ICU', value: 32}, 
      { viewValue: 'C8C-BURN CENTER', value: 46}, 
      { viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 37}, 
      { viewValue: 'NGCS-N GROUND CRISIS STABILIZ', value: 70}
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