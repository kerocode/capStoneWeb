
import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-depressiveneuroses',
  templateUrl: './depressiveneuroses.component.html',
  styleUrls: ['./depressiveneuroses.component.css']
})
export class DEPRESSIVENEUROSESComponent implements OnInit {

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
      bar:'DEPRESSIVENEUROSES_linearReg.csv1.png',
      line:'DEPRESSIVENEUROSES_linearReg.csv2.png',
      dot:'DEPRESSIVENEUROSES_linearReg.csv3.png',
    },
    "ridge":{
      bar:'DEPRESSIVENEUROSES_ridge.csv1.png',
      line:'DEPRESSIVENEUROSES_ridge.csv2.png',
      dot:'DEPRESSIVENEUROSES_ridge.csv3.png',
    },
    "ridgeCv":{
      bar:'DEPRESSIVENEUROSES_ridgecv.csv1.png',
      line:'DEPRESSIVENEUROSES_ridgecv.csv2.png',
      dot:'DEPRESSIVENEUROSES_ridgecv.csv3.png',
    },
    "lesso":{
      bar:'DEPRESSIVENEUROSES_lasso.csv1.png',
      line:'DEPRESSIVENEUROSES_lasso.csv2.png',
      dot:'DEPRESSIVENEUROSES_lasso.csv3.png',
    },
    "lessoCv":{
      bar:'DEPRESSIVENEUROSES_lassocv.csv1.png',
      line:'DEPRESSIVENEUROSES_lassocv.csv2.png',
      dot:'DEPRESSIVENEUROSES_lassocv.csv3.png',
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
  DEPRESSIVENEUROSESC = {

    "lasso": {
       Admit_Source:  0.000000,
      Primary_Insurance:  0.007048,
  Discharge_Disposition:  0.000000,
             Admit_Unit:  0.034302,
             iso_result: -0.000000,
         stepdown_order: -0.000000,
     general_care_order:  0.000000,
                    age: -0.000000,
        meanSquareError:12.17,
      variance:0.00
    },
    "lassoCv": {
      Admit_Source:  0.063969,
      Primary_Insurance:  0.053383,
  Discharge_Disposition:  0.011556,
             Admit_Unit:  0.355549,
             iso_result: -0.000000,
         stepdown_order: -0.000000,
     general_care_order:  0.000000,
                    age:  0.017291,
        meanSquareError:11.94,
      variance:0.02
    },
    "ridge": {
            Admit_Source:  0.227700,
      Primary_Insurance:  0.069569,
  Discharge_Disposition:  0.053886,
             Admit_Unit:  0.228936,
             iso_result: -0.189270,
         stepdown_order: -1.584155,
     general_care_order:  0.287205,
                    age:  0.026008,
        meanSquareError:11.86,
      variance:0.03
    },
    "ridgeCv": {
            Admit_Source:  0.218527,
      Primary_Insurance:  0.066894,
  Discharge_Disposition:  0.049856,
             Admit_Unit:  0.299411,
             iso_result: -0.110207,
         stepdown_order: -0.251809,
     general_care_order:  0.241527,
                    age:  0.024510,
        meanSquareError:11.87,
      variance:0.03
    },
    "linear": {
         Admit_Source:  0.229700,
      Primary_Insurance:  0.070109,
  Discharge_Disposition:  0.055629,
             Admit_Unit:  0.212819,
             iso_result: -0.201430,
         stepdown_order: -2.088036,
    general_care_order:  0.294119,
                    age:  0.026357,
    meanSquareError:11.86,
      variance:0.03
    }
  };
DEPRESSIVENEUROSESC_model = {
  Admit_Source : [
  { viewValue: 'COURT OR LAW ENFORCE', value: 1}, 
  { viewValue: 'TRANSFER FROM A HOSP', value: 3},
  { viewValue: 'CLINIC OR PHYS OFFIC', value: 0},
  { viewValue: 'HOME /WORK / OTHER', value: 2}],
  
  Primary_Insurance : [
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
  { viewValue: 'MEDICAID', value: 5}],
  
  Discharge_Disposition : [
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
	{ viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC',value: 1}],

  iso_result : [
    { viewValue: 'Isolation', value: 1 },
    { viewValue: '0', value: 0 }],

  Admit_Unit : [
  { viewValue: 'N3-DUAL DIAGNOSIS/MEDICAL PSY', value: 2}, 
	{ viewValue: '10W-CARDIOTHORACIC SURGERY', value: 0},
	{ viewValue: 'N4-GENERAL PSYCHIATRY', value: 3},
	{ viewValue: 'VA TREATMENT CTR(E) ACUTE', value: 6}, 
	{ viewValue: '11E-ORTHOPEDICS', value: 1},
	{ viewValue: 'VA TREATMENT CTR (B) ACUTE', value: 5}, 
	{ viewValue: 'NGCS-N GROUND CRISIS STABILIZ', value: 4}],


 

  icu_order : [{ viewValue: '0', value: 0 }],

  stepdown_order : [{ viewValue: 'LEVEL OF CARE - INTERMEDIATE/STEPDOWN', value: 1 }, { viewValue: '0', value: 0 }],

  general_care_order : [{ viewValue: '0', value: 0 }, { viewValue: 'LEVEL OF CARE - GENERAL', value: 1 }]
};

 // attending_change_order_md_dept = [ 
 // { viewValue: '0', value:0}, 
 // { viewValue:'PSYCHIATRY', value:4 }];


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
