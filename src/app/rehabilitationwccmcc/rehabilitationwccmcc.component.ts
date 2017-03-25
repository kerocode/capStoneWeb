import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-rehabilitationwccmcc',
  templateUrl: './rehabilitationwccmcc.component.html',
  styleUrls: ['./rehabilitationwccmcc.component.css']
})
export class REHABILITATIONWCCMCCComponent implements OnInit {

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
      bar:'REHABILITATIONWCCMCC_linearReg.csv1.png',
      line:'REHABILITATIONWCCMCC_linearReg.csv2.png',
      dot:'REHABILITATIONWCCMCC_linearReg.csv3.png',
    },
    "ridge":{
      bar:'REHABILITATIONWCCMCC_ridge.csv1.png',
      line:'REHABILITATIONWCCMCC_ridge.csv2.png',
      dot:'REHABILITATIONWCCMCC_ridge.csv3.png',
    },
    "ridgeCv":{
      bar:'REHABILITATIONWCCMCC_ridgecv.csv1.png',
      line:'REHABILITATIONWCCMCC_ridgecv.csv2.png',
      dot:'REHABILITATIONWCCMCC_ridgecv.csv3.png',
    },
    "lesso":{
      bar:'REHABILITATIONWCCMCC_lasso.csv1.png',
      line:'REHABILITATIONWCCMCC_lasso.csv2.png',
      dot:'REHABILITATIONWCCMCC_lasso.csv3.png',
    },
    "lessoCv":{
      bar:'REHABILITATIONWCCMCC_lassocv.csv1.png',
      line:'REHABILITATIONWCCMCC_lassocv.csv2.png',
      dot:'REHABILITATIONWCCMCC_lassocv.csv3.png',
    }
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
  REHABILITATIONWCCMCCC = {

    "lasso": {
            Admit_Source:  0.000000,
      Primary_Insurance: -0.249450,
  Discharge_Disposition:  0.310182,
             Admit_Unit: -0.000000,
             iso_result:  0.000000,
              icu_order: -0.000000,
         stepdown_order: -0.000000,
     general_care_order:  0.000000,
                    age: -0.061009,
      meanSquareError:106.69,
      variance:0.03
    },
    "lassoCv": {
               Admit_Source:  0.000000,
      Primary_Insurance: -0.158386,
  Discharge_Disposition:  0.250436,
             Admit_Unit: -0.000000,
             iso_result:  0.000000,
              icu_order: -0.000000,
         stepdown_order: -0.000000,
     general_care_order:  0.000000,
                    age: -0.061266,
       meanSquareError:106.91,
      variance:0.02
    },
    "ridge": {
                Admit_Source:  0.334189,
      Primary_Insurance: -0.332293,
  Discharge_Disposition:  0.393711,
             Admit_Unit: -0.156896,
             iso_result:  1.205928,
              icu_order: -4.874864,
         stepdown_order: -2.850425,
     general_care_order:  3.858551,
                    age: -0.062205,
      meanSquareError:105.29,
      variance:0.04
    },
    "ridgeCv": {
               Admit_Source:  0.264763,
      Primary_Insurance: -0.337614,
  Discharge_Disposition:  0.378679,
             Admit_Unit: -0.473947,
             iso_result:  1.096269,
              icu_order: -3.173228,
         stepdown_order: -1.521878,
     general_care_order:  1.694049,
                    age: -0.062832,
      meanSquareError:105.46,
      variance:0.04
    },
    "linear": {
           Admit_Source:  0.341908,
      Primary_Insurance: -0.331420,
  Discharge_Disposition:  0.394981,
             Admit_Unit: -0.119009,
             iso_result:  1.212631,
              icu_order: -5.005231,
         stepdown_order: -2.990685,
     general_care_order:  4.220564,
                    age: -0.062146,
      meanSquareError:105.29,
      variance:0.04
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
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 8},
      { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 6},
      { viewValue: 'DISCH /TRANS TO LONG TERM CARE HOSP (CERT)', value: 5},
      { viewValue: 'DISCH TRANFERRED WITH VCUHS-D/C', value: 10},
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 2},
      { viewValue: 'DISCH /TRANS TO SHORT TERM GEN HOSP FOR IP CAR', value: 7},
      { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 3},
      { viewValue: 'z DISCH /TRANS TO NOT DEFINED HLTH CR INST', value: 12},
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 4},
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 11},
      { viewValue: 'DISCH ADMITTED AS AN IP TO THIS HOSPITAL', value: 9},
      { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 1}
    ],

    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    Admit_Unit: [
      { viewValue: 'N1-REHABILITATIVE MEDICINE', value: 0},
      { viewValue: 'N3-DUAL DIAGNOSIS/MEDICAL PSY', value: 2},
      { viewValue: 'N4-GENERAL PSYCHIATRY', value: 3},
      { viewValue: 'N2-REHAB MED-BRAIN INJURY', value: 1},
      { viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 4}
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
