import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaginaldeliverywocomplicatingdiagnoses',
  templateUrl: './vaginaldeliverywocomplicatingdiagnoses.component.html',
  styleUrls: ['./vaginaldeliverywocomplicatingdiagnoses.component.css']
})
export class VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESComponent implements OnInit {

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
  VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESC = {

    "lasso": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.0,
      Discharge_Disposition: 0.00392774096402,
      Admit_Unit: -0.0,
      Bed_Category: -0.0,
      iso_result: 0.0,
      adm_order_md_dept: -0.0,
      icu_order: -0.0,
      stepdown_order: 0.0,
      general_care_order: 0.0,
      attending_change_order: -0.0,
      age: -0.0
    },
    "lassoCv": {
      Admit_Source: 0.0,
      Primary_Insurance: 0.0,
      Discharge_Disposition: 0.0,
      Admit_Unit: -0.0,
      Bed_Category: -0.0,
      iso_result: 0.0,
      adm_order_md_dept: -0.0,
      icu_order: -0.0,
      stepdown_order: 0.0,
      general_care_order: 0.0,
      attending_change_order: -0.0,
      age: -0.0103131745052
    },
    "ridge": {
      Admit_Source: 0.414777421281,
      Primary_Insurance: 0.0158495861727,
      Discharge_Disposition: 0.00931226977403,
      Admit_Unit: -0.143904942377,
      Bed_Category: -0.0282347427845,
      iso_result: 0.426392169926,
      adm_order_md_dept: -0.0138907031739,
      icu_order: -0.206590188797,
      stepdown_order: 0.0,
      general_care_order: 0.0356205556628,
      attending_change_order: -0.196836391818,
      age: -0.0117137313879,
    },
    "ridgeCv": {
      Admit_Source: 0.168404545261,
      Primary_Insurance: 0.0160383257976,
      Discharge_Disposition: 0.00866023842177,
      Admit_Unit: -0.0791705086384,
      Bed_Category: -0.0188606324928,
      iso_result: 0.187791266584,
      adm_order_md_dept: -0.0125777848205,
      icu_order: -0.0556616710421,
      stepdown_order: 0.0,
      general_care_order: 0.0336725277513,
      attending_change_order: -0.153098136441,
      age: -0.0118800592775
    },
    "linear": {
      Admit_Source: 0.449348421238,
      Primary_Insurance: 0.0158327297588,
      Discharge_Disposition: 0.00935080781341,
      Admit_Unit: -0.150416168882,
      Bed_Category: -0.0288729829576,
      iso_result: 0.456980842915,
      adm_order_md_dept: -0.0141763890045,
      icu_order: -0.246496058657,
      stepdown_order: 0.000000000000000318423414082,
      general_care_order: 0.0278090761231,
      attending_change_order: -0.199833112254,
      age: -0.011693669007,
    }
  };

  VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESC_model = {
    Admit_Source: [
      { viewValue: 'CLINIC OR PHYS OFFIC', value: 0}, 
      { viewValue: 'HOME /WORK / OTHER', value: 1},
      { viewValue: 'TRANSF FROM ANOTH HC', value: 2}
    ],

    Primary_Insurance: [
      { viewValue: 'INDIGENT CARE', value: 3},
      { viewValue: 'MEDICAID MANA', value: 5},
      { viewValue: 'ANTHEM MANAGE', value: 1},
      { viewValue: 'ANTHEM', value: 0},
      { viewValue: 'HMO/PPO', value: 2},
      { viewValue: 'SELF PAY', value: 8},
      { viewValue: 'OTHER', value: 7},
      { viewValue: 'MEDICAID', value: 4},
      { viewValue: 'MEDICARE', value: 6}
    ],

    Discharge_Disposition: [
      { viewValue: 'DISCH /TRANS TO HOME HLTH CARE (AGENCY)', value: 1},
      { viewValue: 'HOSPICE - HOME', value: 3},
      { viewValue: '*DISCHARGED TO HOME OR SELF CARE (ROUTINE)', value: 0},
      { viewValue: 'DISCH /TRANS TO LAW ENFORCEMENT/JAIL/DETENS/CO', value: 2}
    ],

    Bed_Category: [
      { viewValue: 'L&D', value: 2 },
      { viewValue: 'MED/SURG', value: 3 },
      { viewValue: '0', value: 0 },
      { viewValue: 'GUM SUITES', value: 1 },
    ],

    iso_result: [
      { viewValue: 'Isolation', value: 1 },
      { viewValue: '0', value: 0 }
    ],

    Admit_Unit: [
      { viewValue: '0', value: 0},
      { viewValue: '8W-WOMENS CARE UNIT', value: 2},
      { viewValue: '6LD-LABOR AND DELIVERY ROOM', value: 1},
      { viewValue: '9E-SPECIAL SERVICES SUITES', value: 3}
    ],

    adm_order_md_dept: [
      { viewValue: 'INTERNAL MEDICINE', value: 3},
      { viewValue: '0', value: 0},
      { viewValue: 'OBSTETRICS - GYNECOL', value: 4},
      { viewValue: 'ANESTHESIOLOGY', value: 1},
      { viewValue: 'EMERGENCY MEDICINE', value: 2}
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
      { viewValue: 'ANESTHESIOLOGY', value: 1 },
      { viewValue: 'OBSTETRICS - GYNECO', value: 2 },
      { viewValue: '0', value: 0 }
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