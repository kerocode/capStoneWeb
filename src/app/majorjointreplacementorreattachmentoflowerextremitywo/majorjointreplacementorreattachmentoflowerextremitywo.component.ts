import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-majorjointreplacementorreattachmentoflowerextremitywo',
  templateUrl: './majorjointreplacementorreattachmentoflowerextremitywo.component.html',
  styleUrls: ['./majorjointreplacementorreattachmentoflowerextremitywo.component.css']
})
export class MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWOComponent implements OnInit {

  constructor() { }
  lines = [];
   selectedModel={
    linear:false,
    ridge:false,
    ridgeCv:false,
    lasso:false,
    lassoCv:false
  }
  images={
    "linear":{
      bar:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_linearReg.csv1.png',
      line:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_linearReg.csv2.png',
      dot:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_linearReg.csv3.png',
    },
    "ridge":{
      bar:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_ridge.csv1.png',
      line:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_ridge.csv2.png',
      dot:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_ridge.csv3.png',
    },
    "ridgeCv":{
      bar:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_ridgecv.csv1.png',
      line:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_ridgecv.csv2.png',
      dot:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_ridgecv.csv3.png',
    },
    "lesso":{
      bar:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_lasso.csv1.png',
      line:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_lasso.csv2.png',
      dot:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_lasso.csv3.png',
    },
    "lessoCv":{
      bar:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_lassocv.csv1.png',
      line:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_lassocv.csv2.png',
      dot:'MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWO_lassocv.csv3.png',
    }
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
 MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWOC = {

    "lasso": {
           Admit_Source:  0.000000,
      Primary_Insurance:  0.041895,
  Discharge_Disposition:  0.000000,
             Admit_Unit: -0.201459,
             iso_result:  0.000000,
              icu_order:  0.000000,
         stepdown_order:  0.000000,
     general_care_order: -0.000000,
                    age:  0.005660,
         meanSquareError:3.54,
                variance:0.13
    },
    "lassoCv": {
               Admit_Source:  0.000000,
      Primary_Insurance:  0.076663,
  Discharge_Disposition:  0.265316,
             Admit_Unit: -0.100358,
             iso_result:  0.000000,
              icu_order:  0.000000,
         stepdown_order:  0.631999,
     general_care_order:  0.000000,
                    age: -0.003644,
         meanSquareError:2.98,
                variance:0.27
    },
    "ridge": {
           Admit_Source: -0.713658,
      Primary_Insurance:  0.079857,
  Discharge_Disposition:  0.286834,
             Admit_Unit:  0.004255,
             iso_result:  0.051707,
              icu_order:  1.715156,
        stepdown_order:  1.673416,
    general_care_order:  0.632437,
                    age: -0.011368,
         meanSquareError:2.74,
                variance:0.33
    },
    "ridgeCv": {
               Admit_Source: -0.126588,
      Primary_Insurance:  0.082280,
  Discharge_Disposition:  0.296699,
             Admit_Unit: -0.024255,
             iso_result:  0.074803,
              icu_order:  1.055107,
         stepdown_order:  1.498598,
     general_care_order:  0.151487,
                    age: -0.010450,
   meanSquareError:2.76,
                variance:0.32
    },
    "linear": {
           Admit_Source: -0.792804,
      Primary_Insurance:  0.079672,
  Discharge_Disposition:  0.286421,
             Admit_Unit:  0.006480,
             iso_result:  0.048151,
              icu_order:  1.786357,
         stepdown_order:  1.681240,
     general_care_order:  0.741075,
                    age: -0.011425,
      meanSquareError:2.74,
                variance:0.33
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
  iso_result : [
    { viewValue: 'Isolation', value: 1 },
    { viewValue: '0', value: 0 }
  ],
  Admit_Unit : [
    { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 6},
    { viewValue: "GB5P-CHILDREN'S PERIOP", value: 14},
    { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 8},
    { viewValue: '11CA-JOINT RESTORATION', value: 0},
    { viewValue: '11E-ORTHOPEDICS', value: 1},
    { viewValue: '8W-WOMENS CARE UNIT', value: 5},
    { viewValue: 'C8B-BURN CENTER', value: 9},
    { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 3},
    { viewValue: '5ORC-OPERATING ROOM CENTRAL', value: 4},
    { viewValue: '9E-SPECIAL SERVICES SUITES', value: 7},
    { viewValue: 'GB5-GATEWAY BLDG 5TH FLOOR', value: 13},
    { viewValue: 'CSBC-SECURITY CARE', value: 12},
    { viewValue: 'C9B-SURGICAL TRAUMA ICU', value: 10},
    { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 16},
    { viewValue: '11W-NEUROSURGERY', value: 2},
    { viewValue: 'C9C-SURGICAL TRAUMA ICU', value: 11},
    { viewValue: 'N10A-BONE MARROW TRANSPLANT', value: 15}
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



