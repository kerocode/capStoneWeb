import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { Model } from '../models/modal';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
export interface ImgTypes {
  bar?: string;
  dot?: string;
  line?: string;
}
export interface Images {
  linear?: ImgTypes;
  ridge?: ImgTypes;
  ridgeCv?: ImgTypes;
  lasso?: ImgTypes;
  lassoCv?: ImgTypes;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  images: Images;
  calculatedModal = {};
  variables = [];
  graph = '1';
  constructor(public dialogRef: MdDialogRef<DialogComponent>) {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent implements OnInit {
  @Input() calculatedModal;
  @Input() options;
  @Input() images: Images;
  dialogRef: MdDialogRef<DialogComponent>;
  selectedOption: any;
  calc2Cols = '2 2 calc(10em + 10px);';
  calc3Cols = '3 3 calc(15em + 20px);';
  model: Model = {
    AdmitSource: null, AdmitUnit: null, DischargeDisposition: null, icuOrder: null, PrimaryInsurance: null,
    age: null, generalCareOrder: null, stepdownOrder: null, isoResult: null
  };
  showPrediction = false;

  selectedModel = {
    linear: false,
    ridge: false,
    ridgeCv: false,
    lasso: false,
    lassoCv: false
  };
  prediction = [];
  variables = [
    'Admit_Source',
    'Primary_Insurance',
    'Discharge_Disposition',
    'Admit_Unit',
    'iso_result',
    'icu_order',
    'stepdown_order',
    'age'];
  ngOnInit() {
  }
  predict() {
    if (this.selectedModel.lasso) {
      const lasso = {};
      lasso['results'] = Math.round((this.calculatedModal.lasso.Admit_Source * this.model.AdmitSource) + (
        (this.calculatedModal.lasso.Admit_Unit * this.model.AdmitUnit) +
        (this.calculatedModal.lasso.age * this.model.age) +
        (this.calculatedModal.lasso.Discharge_Disposition * this.model.DischargeDisposition) +
        (this.calculatedModal.lasso.general_care_order * this.model.generalCareOrder) +
        (this.calculatedModal.lasso.icu_order * this.model.icuOrder) +
        (this.calculatedModal.lasso.iso_result * this.model.isoResult) +
        (this.calculatedModal.lasso.Primary_Insurance * this.model.PrimaryInsurance) +
        (this.calculatedModal.lasso.stepdown_order * this.model.stepdownOrder)));
      lasso['model'] = this.calculatedModal.lasso;
      lasso['type'] = 'Lasso';
      this.prediction.push(lasso);
    }
    if (this.selectedModel.lassoCv) {
      const lassoCv = {};
      lassoCv['results'] = Math.round((this.calculatedModal.lassoCv.Admit_Source * this.model.AdmitSource) +
        (this.calculatedModal.lassoCv.Admit_Unit * this.model.AdmitUnit) +
        (this.calculatedModal.lassoCv.age * this.model.age) +
        (this.calculatedModal.lassoCv.Discharge_Disposition * this.model.DischargeDisposition) +
        (this.calculatedModal.lassoCv.general_care_order * this.model.generalCareOrder) +
        (this.calculatedModal.lassoCv.icu_order * this.model.icuOrder) +
        (this.calculatedModal.lassoCv.iso_result * this.model.isoResult) +
        (this.calculatedModal.lassoCv.Primary_Insurance * this.model.PrimaryInsurance) +
        (this.calculatedModal.lassoCv.stepdown_order * this.model.stepdownOrder));
      lassoCv['model'] = this.calculatedModal.lassoCv;
      lassoCv['type'] = 'Lasso Cross Validation';
      this.prediction.push(lassoCv);
    }
    if (this.selectedModel.ridge) {
      const ridge = {};
      ridge['results'] = Math.round((this.calculatedModal.ridge.Admit_Source * this.model.AdmitSource) +
        (this.calculatedModal.ridge.Admit_Unit * this.model.AdmitUnit) +
        (this.calculatedModal.ridge.age * this.model.age) +
        (this.calculatedModal.ridge.Discharge_Disposition * this.model.DischargeDisposition) +
        (this.calculatedModal.ridge.general_care_order * this.model.generalCareOrder) +
        (this.calculatedModal.ridge.icu_order * this.model.icuOrder) +
        (this.calculatedModal.ridge.iso_result * this.model.isoResult) +
        (this.calculatedModal.ridge.Primary_Insurance * this.model.PrimaryInsurance) +
        (this.calculatedModal.ridge.stepdown_order * this.model.stepdownOrder));
      ridge['model'] = this.calculatedModal.ridge;
      ridge['type'] = 'Ridge';
      this.prediction.push(ridge);

    }
    if (this.selectedModel.ridgeCv) {
      const ridgeCv = {};
      ridgeCv['results'] = Math.round((this.calculatedModal.ridgeCv.Admit_Source * this.model.AdmitSource) +
        (this.calculatedModal.ridgeCv.Admit_Unit * this.model.AdmitUnit) +
        (this.calculatedModal.ridgeCv.age * this.model.age) +
        (this.calculatedModal.ridgeCv.Discharge_Disposition * this.model.DischargeDisposition) +
        (this.calculatedModal.ridgeCv.general_care_order * this.model.generalCareOrder) +
        (this.calculatedModal.ridgeCv.icu_order * this.model.icuOrder) +
        (this.calculatedModal.ridgeCv.iso_result * this.model.isoResult) +
        (this.calculatedModal.ridgeCv.Primary_Insurance * this.model.PrimaryInsurance) +
        (this.calculatedModal.ridgeCv.stepdown_order * this.model.stepdownOrder));
      ridgeCv['model'] = this.calculatedModal.ridgeCv;
      ridgeCv['type'] = 'Ridge Cross Validation';
      this.prediction.push(ridgeCv);
    }
    if (this.selectedModel.linear) {
      const linear = {};
      linear['results'] = Math.round((this.calculatedModal.linear.Admit_Source * this.model.AdmitSource) +
        (this.calculatedModal.linear.Admit_Unit * this.model.AdmitUnit) +
        (this.calculatedModal.linear.age * this.model.age) +
        (this.calculatedModal.linear.Discharge_Disposition * this.model.DischargeDisposition) +
        (this.calculatedModal.linear.general_care_order * this.model.generalCareOrder) +
        (this.calculatedModal.linear.icu_order * this.model.icuOrder) +
        (this.calculatedModal.linear.iso_result * this.model.isoResult) +
        (this.calculatedModal.linear.Primary_Insurance * this.model.PrimaryInsurance) +
        (this.calculatedModal.linear.stepdown_order * this.model.stepdownOrder));
      linear['model'] = this.calculatedModal.linear;
      linear['type'] = 'Linear';
      this.prediction.push(linear);
    }

  }
  constructor(public dialog: MdDialog, public viewContainerRef: ViewContainerRef) {

  }
  onSubmit() {
    this.predict();
    this.showPrediction = true;
  }
  rePredict() {
    this.showPrediction = false;
    this.prediction = [];
  }
  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    if (this.calculatedModal && this.images) {
      this.dialogRef = this.dialog.open(DialogComponent, {
        height: '100%',
        width: '90%',
      });
      this.dialogRef.componentInstance.images = this.images;
      this.dialogRef.componentInstance.calculatedModal = this.calculatedModal;
      this.dialogRef.componentInstance.variables = this.variables;
      this.dialogRef.afterClosed().subscribe(result => {
        this.dialogRef = null;
      });
    }

  }

};
