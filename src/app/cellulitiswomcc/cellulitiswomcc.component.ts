import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Model } from '../models/modal';

@Component({
  selector: 'app-cellulitiswomcc',
  templateUrl: './cellulitiswomcc.component.html',
  styleUrls: ['./cellulitiswomcc.component.css']
})
export class CELLULITISWOMCCComponent implements OnInit {

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
    "Bed_Category",
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
  model:Model={AdmitSource:0,AdmitUnit:0,admOrderMdDept:0,DischargeDisposition:0,icuOrder:0,PrimaryInsurance:0,
              age:0,attendingChangeOrder:0,BedCategory:0,generalCareOrder:0,stepdownOrder:0,isoResult:0};
  CELLULITISWOMCCC = {
    "lasso": {
      Admit_Source: -0.0,
      Primary_Insurance: 0.00340259227803,
      Discharge_Disposition: 0.0392774096402,
      Admit_Unit: 0.00722018485266,
      Bed_Category: -0.0116862495,
      iso_result: 0.0,
      adm_order_md_dept: 0.0116246469611,
      icu_order: 0.0,
      stepdown_order: 0.0,
      general_care_order: 0.0,
      attending_change_order: -0.0,
      age: 0.0257077362175
    },
    "lassoCv": {
      Admit_Source: -0.0,
      Primary_Insurance: 0.0410178593546,
      Discharge_Disposition: 0.080051531032,
      Admit_Unit: 0.0,
      Bed_Category: -0.189478961247,
      iso_result: 0.199097668155,
      adm_order_md_dept: 0.0932652157197,
      icu_order: 0.0,
      stepdown_order: 0.0,
      general_care_order: 0.0,
      attending_change_order: -0.0,
      age: 0.0204332390504
    },
    "ridge": {
      Admit_Source: -0.0223833434221,
      Primary_Insurance: 0.0512759348566,
      Discharge_Disposition: 0.0895594012177,
      Admit_Unit: 0.000133901969721,
      Bed_Category: -0.222953519847,
      iso_result: 0.747506969395,
      adm_order_md_dept: 0.104160037162,
      icu_order: 2.40837203587,
      stepdown_order: 0.938162920645,
      general_care_order: 1.27473594726,
      attending_change_order: -0.0324948701238,
      age: 0.0203198332994,
    },
    "ridgeCv": {
      Admit_Source: -0.0137926436491,
      Primary_Insurance: 0.0499892301597,
      Discharge_Disposition: 0.0910987162687,
      Admit_Unit: -0.000306611152698,
      Bed_Category: -0.225116645204,
      iso_result: 0.690698996999,
      adm_order_md_dept: 0.107390023657,
      icu_order: 1.07574275885,
      stepdown_order: 0.708812388731,
      general_care_order: 0.505660217795,
      attending_change_order: -0.0294285849469,
      age: 0.0199766606354
    },
    "linear": {
      Admit_Source: -0.0234223955739,
      Primary_Insurance: 0.0514521384291,
      Discharge_Disposition: 0.0893625320355,
      Admit_Unit: 0.000187225150411,
      Bed_Category: -0.222636714937,
      iso_result: 0.75106167702,
      adm_order_md_dept: 0.103760614987,
      icu_order: 2.57972353467,
      stepdown_order: 0.956927017538,
      general_care_order: 1.374300281,
      attending_change_order: -0.0328070361039,
      age: 0.0203641846122,
    }
  };
  CELLULITISWOMCCC_model = {
    Admit_Source: [{ viewValue: 'CLINIC OR PHYS OFFIC', value: 0 },
    { viewValue: 'TRANSFER FROM A HOSP', value: 4 }, { viewValue: 'COURT OR LAW ENFORCE', value: 1 },
    { viewValue: 'HOME /WORK / OTHER', value: 2 }, { viewValue: 'TRANSF FROM ANOTH HC', value: 3 }
    ],
    Primary_Insurance: [
      { viewValue: 'INDIGENT CARE', value: 4 }, { viewValue: 'MEDICAID MANA', value: 6 }, { viewValue: 'ANTHEM MANAGE', value: 1 },
      { viewValue: 'ANTHEM', value: 0 }, { viewValue: 'COMMERCIAL', value: 2 }, { viewValue: 'HMO/PPO', value: 3 },
      { viewValue: 'SELF PAY', value: 10 }, { viewValue: 'OTHER', value: 9 }, { viewValue: 'MEDICARE', value: 7 },
      { viewValue: 'MEDICARE MANA', value: 8 },
      { viewValue: 'MEDICAID', value: 5 }
    ],
    Discharge_Disposition: [
      { viewValue: 'DISCH /TRANS TO SNF MCR CERT OF SKILL CARE', value: 8 },
      { viewValue: 'DISCH /TRANS TO PSYCH HOSP/PSY UNIT', value: 7 },
      { viewValue: 'HOSPICE - HOME', value: 9 },
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0 },
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/COUR', value: 6 },
      { viewValue: 'LEFT ELOPED -W/O NOTICE-AMA', value: 12 },
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 3 },
      { viewValue: 'DISCH /TRANS TO IRF INCLD REHAB UNIT OF HOSP', value: 4 },
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 5 },
      { viewValue: 'DISCH /TRANS TO CANCER CTR OR CHILD HOSP', value: 1 },
      { viewValue: 'LEFT AGAINST MEDICAL ADVICE OR DISC CARE (AMA)', value: 11 },
      { viewValue: 'DISCH /TRANS TO CUSTODIAL/SUPPT CARE FAC', value: 2 },
      { viewValue: 'HOSPICE - MEDICAL FAC (CERT) PROVIDE HOSPICE C', value: 10 }
    ],
    Bed_Category: [
      { viewValue: 'SAME DAY', value: 10 },
      { viewValue: 'PED MED/SU', value: 7 },
      { viewValue: 'ED', value: 2 },
      { viewValue: 'CORRECTION', value: 1 },
      { viewValue: 'RESEARCH', value: 9 },
      { viewValue: 'MED/SURG', value: 5 },
      { viewValue: '0', value: 0 },
      { viewValue: 'GUM SUITES', value: 3 },
      { viewValue: 'PICU', value: 8 },
      { viewValue: 'OR', value: 6 },
      { viewValue: 'ICU', value: 4 }
    ],
    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],
    Admit_Unit: [
      { viewValue: 'C3A-ACUTE CARE MEDICINE', value: 22 },
      { viewValue: '5ORC-OPERATING ROOM CENTRAL', value: 9 },
      { viewValue: '9W-CLINICAL TRANSPLANT', value: 19 },
      { viewValue: 'N5DH-DIGESTIVE HLTH MEDICINE', value: 34 },
      { viewValue: '11W-NEUROSURGERY', value: 7 },
      { viewValue: '11E-ORTHOPEDICS', value: 5 },
      { viewValue: '7PCU-PED PROGRESSIVE CARE', value: 14 },
      { viewValue: '9C-TRAUMA - GENERAL SURGERY', value: 17 },
      { viewValue: 'C8B-BURN CENTER', value: 26 },
      { viewValue: '5PAC-POST ANESTHESIA CARE UNIT', value: 10 },
      { viewValue: '4TCU-TRANSITIONAL CARE UNIT', value: 8 },
      { viewValue: '10CA-CARD/THORASIC SURG PCU', value: 2 },
      { viewValue: 'GB5-GATEWAY BLDG 5TH FLOOR', value: 31 },
      { viewValue: '0', value: 0 },
      { viewValue: '10E-CARDIOLOGY', value: 3 },
      { viewValue: '7CW-PEDS MAIN 7 CENTRAL WEST', value: 12 },
      { viewValue: 'C4D-MEDICAL RESP ICU', value: 23 },
      { viewValue: '7CE-PEDS-SAM DAY SUITES', value: 11 },
      { viewValue: 'N9-MED-STEPDOWN TELE', value: 36 },
      { viewValue: '8W-WOMENS CARE UNIT', value: 16 },
      { viewValue: '9E-SPECIAL SERVICES SUITES', value: 18 },
      { viewValue: '11EM-EPILEPSY MONITORING', value: 6 },
      { viewValue: 'C5A-OR SURGERY', value: 24 },
      { viewValue: 'C7A-ACUTE CARE SURGERY', value: 25 },
      { viewValue: 'N8-GENERAL CLINICAL RESEAR CTR', value: 35 },
      { viewValue: '10C CICU/CMICU', value: 1 },
      { viewValue: '10W-CARDIOTHORACIC SURGERY', value: 4 },
      { viewValue: 'ED-CLINICAL DECISION UNIT(ORN)', value: 30 },
      { viewValue: '7E-GENERAL CARE PEDS', value: 13 },
      { viewValue: 'N10B-BONE MARROW TRANSPLANT', value: 32 },
      { viewValue: 'C9B-SURGICAL TRAUMA ICU', value: 28 },
      { viewValue: '7PI-PEDIATRIC ICU (0-21)', value: 15 },
      { viewValue: 'N4N-PALLIATIVE CARE UNIT', value: 33 },
      { viewValue: 'CSBC-SECURITY CARE', value: 29 },
      { viewValue: 'C10D-CARDIAC SURG ICU', value: 20 },
      { viewValue: 'C8C-BURN CENTER', value: 27 },
      { viewValue: 'C2A-ACUTE CARE ONCOLOGY', value: 21 }
    ],
    adm_order_md_dept: [{ viewValue: 'INTERNAL MEDICINE', value: 4 },
    { viewValue: 'PEDIATRICS', value: 8 }, { viewValue: 'EMERGENCY MEDICINE', value: 3 },
    { viewValue: 'REHAB MEDICINE', value: 10 }, { viewValue: 'ANESTHESIOLOGY', value: 1 },
    { viewValue: '0', value: 0 }, { viewValue: 'OTOLARYNGOLOGY', value: 7 },
    { viewValue: 'DENTISTRY', value: 2 }, { viewValue: 'PSYCHIATRY', value: 9 },
    { viewValue: 'SURGERY', value: 11 }, { viewValue: 'OBSTETRICS - GYNECOL', value: 5 },
    { viewValue: 'ORTHOPEDIC SURGERY', value: 6 }
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
      { viewValue: 'INTERNAL MEDICINE', value: 1 },
      { viewValue: 'RADIOLOGY', value: 7 },
      { viewValue: 'PEDIATRICS', value: 6 },
      { viewValue: 'OBSTETRICS - GYNECO', value: 3 },
      { viewValue: 'REHAB MEDICINE', value: 8 },
      { viewValue: '0', value: 0 },
      { viewValue: 'OTOLARYNGOLOGY', value: 5 },
      { viewValue: 'SURGERY', value: 9 },
      { viewValue: 'NEUROLOGY', value: 2 },
      { viewValue: 'ORTHOPEDIC SURGERY', value: 4 }
    ]
  };

  ngOnInit() {

  }
  clickOutside(event) {
    this.hide = true;
  }

  predict() {

    if (this.selectedModel.lasso){
      let lasso={};
        lasso["results"] = Math.round((this.CELLULITISWOMCCC.lasso.Admit_Source * this.model.AdmitSource) + (this.CELLULITISWOMCCC.lasso.adm_order_md_dept * this.model.admOrderMdDept) +
          (this.CELLULITISWOMCCC.lasso.Admit_Unit * this.model.AdmitUnit) + (this.CELLULITISWOMCCC.lasso.age * this.model.age) + (this.CELLULITISWOMCCC.lasso.attending_change_order * this.model.attendingChangeOrder) +
          (this.CELLULITISWOMCCC.lasso.Bed_Category * this.model.BedCategory) + (this.CELLULITISWOMCCC.lasso.Discharge_Disposition * this.model.DischargeDisposition) +
          (this.CELLULITISWOMCCC.lasso.general_care_order * this.model.generalCareOrder) + (this.CELLULITISWOMCCC.lasso.icu_order * this.model.icuOrder) + (this.CELLULITISWOMCCC.lasso.iso_result * this.model.isoResult) +
          (this.CELLULITISWOMCCC.lasso.Primary_Insurance * this.model.PrimaryInsurance) + (this.CELLULITISWOMCCC.lasso.stepdown_order * this.model.stepdownOrder));
    lasso["model"]=this.CELLULITISWOMCCC.lasso; 
    lasso["type"]="Lasso";
    this.prediction.push(lasso);
    } 
       if (this.selectedModel.lassoCv){
         let lassoCv={};
        lassoCv["results"]= Math.round((this.CELLULITISWOMCCC.lassoCv.Admit_Source * this.model.AdmitSource) +
          (this.CELLULITISWOMCCC.lassoCv.adm_order_md_dept * this.model.admOrderMdDept) +
          (this.CELLULITISWOMCCC.lassoCv.Admit_Unit * this.model.AdmitUnit) +
          (this.CELLULITISWOMCCC.lassoCv.age * this.model.age) +
          (this.CELLULITISWOMCCC.lassoCv.attending_change_order * this.model.attendingChangeOrder) +
          (this.CELLULITISWOMCCC.lassoCv.Bed_Category * this.model.BedCategory) +
          (this.CELLULITISWOMCCC.lassoCv.Discharge_Disposition * this.model.DischargeDisposition) +
          (this.CELLULITISWOMCCC.lassoCv.general_care_order * this.model.generalCareOrder) +
          (this.CELLULITISWOMCCC.lassoCv.icu_order * this.model.icuOrder) +
          (this.CELLULITISWOMCCC.lassoCv.iso_result * this.model.isoResult) +
          (this.CELLULITISWOMCCC.lassoCv.Primary_Insurance * this.model.PrimaryInsurance) +
          (this.CELLULITISWOMCCC.lassoCv.stepdown_order * this.model.stepdownOrder));
         lassoCv["model"]=this.CELLULITISWOMCCC.lassoCv;  
        lassoCv["type"]="Lasso Cross Validation";
         this.prediction.push(lassoCv);
        } 
       if (this.selectedModel.ridge){
        let ridge={};
        ridge["results"] = Math.round((this.CELLULITISWOMCCC.ridge.Admit_Source * this.model.AdmitSource) +
          (this.CELLULITISWOMCCC.ridge.adm_order_md_dept * this.model.admOrderMdDept) +
          (this.CELLULITISWOMCCC.ridge.Admit_Unit * this.model.AdmitUnit) +
          (this.CELLULITISWOMCCC.ridge.age * this.model.age) +
          (this.CELLULITISWOMCCC.ridge.attending_change_order * this.model.attendingChangeOrder) +
          (this.CELLULITISWOMCCC.ridge.Bed_Category * this.model.BedCategory) +
          (this.CELLULITISWOMCCC.ridge.Discharge_Disposition * this.model.DischargeDisposition) +
          (this.CELLULITISWOMCCC.ridge.general_care_order * this.model.generalCareOrder) +
          (this.CELLULITISWOMCCC.ridge.icu_order * this.model.icuOrder) +
          (this.CELLULITISWOMCCC.ridge.iso_result * this.model.isoResult) +
          (this.CELLULITISWOMCCC.ridge.Primary_Insurance * this.model.PrimaryInsurance) +
          (this.CELLULITISWOMCCC.ridge.stepdown_order * this.model.stepdownOrder));
          ridge["model"]=this.CELLULITISWOMCCC.ridge;
                    ridge["type"]="Ridge";
          this.prediction.push(ridge);

        } 
        if (this.selectedModel.ridgeCv){
         let ridgeCv={}; 
        ridgeCv["results"] = Math.round((this.CELLULITISWOMCCC.ridgeCv.Admit_Source * this.model.AdmitSource) +
          (this.CELLULITISWOMCCC.ridgeCv.adm_order_md_dept * this.model.admOrderMdDept) +
          (this.CELLULITISWOMCCC.ridgeCv.Admit_Unit * this.model.AdmitUnit) +
          (this.CELLULITISWOMCCC.ridgeCv.age * this.model.age) +
          (this.CELLULITISWOMCCC.ridgeCv.attending_change_order * this.model.attendingChangeOrder) +
          (this.CELLULITISWOMCCC.ridgeCv.Bed_Category * this.model.BedCategory) +
          (this.CELLULITISWOMCCC.ridgeCv.Discharge_Disposition * this.model.DischargeDisposition) +
          (this.CELLULITISWOMCCC.ridgeCv.general_care_order * this.model.generalCareOrder) +
          (this.CELLULITISWOMCCC.ridgeCv.icu_order * this.model.icuOrder) +
          (this.CELLULITISWOMCCC.ridgeCv.iso_result * this.model.isoResult) +
          (this.CELLULITISWOMCCC.ridgeCv.Primary_Insurance * this.model.PrimaryInsurance) +
          (this.CELLULITISWOMCCC.ridgeCv.stepdown_order * this.model.stepdownOrder));
          ridgeCv["model"]=this.CELLULITISWOMCCC.ridgeCv;
          ridgeCv["type"]="Ridge Cross Validation";
          this.prediction.push(ridgeCv);
          }
        if (this.selectedModel.linear){
          let linear={};
        linear["results"] =Math.round ((this.CELLULITISWOMCCC.linear.Admit_Source * this.model.AdmitSource) +
          (this.CELLULITISWOMCCC.linear.adm_order_md_dept * this.model.admOrderMdDept) +
          (this.CELLULITISWOMCCC.linear.Admit_Unit * this.model.AdmitUnit) +
          (this.CELLULITISWOMCCC.linear.age * this.model.age) +
          (this.CELLULITISWOMCCC.linear.attending_change_order * this.model.attendingChangeOrder) +
          (this.CELLULITISWOMCCC.linear.Bed_Category * this.model.BedCategory) +
          (this.CELLULITISWOMCCC.linear.Discharge_Disposition * this.model.DischargeDisposition) +
          (this.CELLULITISWOMCCC.linear.general_care_order * this.model.generalCareOrder) +
          (this.CELLULITISWOMCCC.linear.icu_order * this.model.icuOrder) +
          (this.CELLULITISWOMCCC.linear.iso_result * this.model.isoResult) +
          (this.CELLULITISWOMCCC.linear.Primary_Insurance * this.model.PrimaryInsurance) +
          (this.CELLULITISWOMCCC.linear.stepdown_order * this.model.stepdownOrder));
          linear["model"]=this.CELLULITISWOMCCC.linear;
          linear["type"]="Linear";
          this.prediction.push(linear);
         }

  }
  onSubmit() {
    this.predict();
    this.showPrediction=true;
  }
rePredict(){
  this.showPrediction=false;
  this.prediction=[];
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


