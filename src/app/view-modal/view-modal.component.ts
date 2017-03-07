import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../models/modal';
@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent implements OnInit {

  @Input() calculatedModal;
  @Input() options;
  model: Model = {
    AdmitSource: 0, AdmitUnit: 0, DischargeDisposition: 0, icuOrder: 0, PrimaryInsurance: 0,
    age: 0,  BedCategory: 0, generalCareOrder: 0, stepdownOrder: 0, isoResult: 0
  };
  showPrediction = false;
  constructor() { }
  selectedModel = {
    linear: false,
    ridge: false,
    ridgeCv: false,
    lasso: false,
    lassoCv: false
  }
  prediction = [];
  variables = [
    "Admit_Source",
    "Primary_Insurance",
    "Discharge_Disposition",
    "Admit_Unit",
    "Bed_Category",
    "iso_result",
    "icu_order",
    "stepdown_order",
    "age"];
  ngOnInit() {
  }
  predict() {
    if (this.selectedModel.lasso) {
      let lasso = {};
      lasso["results"] = Math.round((this.calculatedModal.lasso.Admit_Source * this.model.AdmitSource) + (
        (this.calculatedModal.lasso.Admit_Unit * this.model.AdmitUnit) +
        (this.calculatedModal.lasso.age * this.model.age) +
        (this.calculatedModal.lasso.Bed_Category * this.model.BedCategory) +
        (this.calculatedModal.lasso.Discharge_Disposition * this.model.DischargeDisposition) +
        (this.calculatedModal.lasso.general_care_order * this.model.generalCareOrder) +
        (this.calculatedModal.lasso.icu_order * this.model.icuOrder) +
        (this.calculatedModal.lasso.iso_result * this.model.isoResult) +
        (this.calculatedModal.lasso.Primary_Insurance * this.model.PrimaryInsurance) +
        (this.calculatedModal.lasso.stepdown_order * this.model.stepdownOrder));
      lasso["model"] = this.calculatedModal.lasso;
      lasso["type"] = "Lasso";
      this.prediction.push(lasso);
    }
    if (this.selectedModel.lassoCv) {
      let lassoCv = {};
      lassoCv["results"] = Math.round((this.calculatedModal.lassoCv.Admit_Source * this.model.AdmitSource) +
        (this.calculatedModal.lassoCv.Admit_Unit * this.model.AdmitUnit) +
        (this.calculatedModal.lassoCv.age * this.model.age) +
        (this.calculatedModal.lassoCv.Bed_Category * this.model.BedCategory) +
        (this.calculatedModal.lassoCv.Discharge_Disposition * this.model.DischargeDisposition) +
        (this.calculatedModal.lassoCv.general_care_order * this.model.generalCareOrder) +
        (this.calculatedModal.lassoCv.icu_order * this.model.icuOrder) +
        (this.calculatedModal.lassoCv.iso_result * this.model.isoResult) +
        (this.calculatedModal.lassoCv.Primary_Insurance * this.model.PrimaryInsurance) +
        (this.calculatedModal.lassoCv.stepdown_order * this.model.stepdownOrder));
      lassoCv["model"] = this.calculatedModal.lassoCv;
      lassoCv["type"] = "Lasso Cross Validation";
      this.prediction.push(lassoCv);
    }
    if (this.selectedModel.ridge) {
      let ridge = {};
      ridge["results"] = Math.round((this.calculatedModal.ridge.Admit_Source * this.model.AdmitSource) +
        (this.calculatedModal.ridge.Admit_Unit * this.model.AdmitUnit) +
        (this.calculatedModal.ridge.age * this.model.age) +
        (this.calculatedModal.ridge.Bed_Category * this.model.BedCategory) +
        (this.calculatedModal.ridge.Discharge_Disposition * this.model.DischargeDisposition) +
        (this.calculatedModal.ridge.general_care_order * this.model.generalCareOrder) +
        (this.calculatedModal.ridge.icu_order * this.model.icuOrder) +
        (this.calculatedModal.ridge.iso_result * this.model.isoResult) +
        (this.calculatedModal.ridge.Primary_Insurance * this.model.PrimaryInsurance) +
        (this.calculatedModal.ridge.stepdown_order * this.model.stepdownOrder));
      ridge["model"] = this.calculatedModal.ridge;
      ridge["type"] = "Ridge";
      this.prediction.push(ridge);

    }
    if (this.selectedModel.ridgeCv) {
      let ridgeCv = {};
      ridgeCv["results"] = Math.round((this.calculatedModal.ridgeCv.Admit_Source * this.model.AdmitSource) +
        (this.calculatedModal.ridgeCv.Admit_Unit * this.model.AdmitUnit) +
        (this.calculatedModal.ridgeCv.age * this.model.age) +
        (this.calculatedModal.ridgeCv.Bed_Category * this.model.BedCategory) +
        (this.calculatedModal.ridgeCv.Discharge_Disposition * this.model.DischargeDisposition) +
        (this.calculatedModal.ridgeCv.general_care_order * this.model.generalCareOrder) +
        (this.calculatedModal.ridgeCv.icu_order * this.model.icuOrder) +
        (this.calculatedModal.ridgeCv.iso_result * this.model.isoResult) +
        (this.calculatedModal.ridgeCv.Primary_Insurance * this.model.PrimaryInsurance) +
        (this.calculatedModal.ridgeCv.stepdown_order * this.model.stepdownOrder));
      ridgeCv["model"] = this.calculatedModal.ridgeCv;
      ridgeCv["type"] = "Ridge Cross Validation";
      this.prediction.push(ridgeCv);
    }
    if (this.selectedModel.linear) {
      let linear = {};
      linear["results"] = Math.round((this.calculatedModal.linear.Admit_Source * this.model.AdmitSource) +
        (this.calculatedModal.linear.Admit_Unit * this.model.AdmitUnit) +
        (this.calculatedModal.linear.age * this.model.age) +
        (this.calculatedModal.linear.Bed_Category * this.model.BedCategory) +
        (this.calculatedModal.linear.Discharge_Disposition * this.model.DischargeDisposition) +
        (this.calculatedModal.linear.general_care_order * this.model.generalCareOrder) +
        (this.calculatedModal.linear.icu_order * this.model.icuOrder) +
        (this.calculatedModal.linear.iso_result * this.model.isoResult) +
        (this.calculatedModal.linear.Primary_Insurance * this.model.PrimaryInsurance) +
        (this.calculatedModal.linear.stepdown_order * this.model.stepdownOrder));
      linear["model"] = this.calculatedModal.linear;
      linear["type"] = "Linear";
      this.prediction.push(linear);
    }

  }
  onSubmit() {
    this.predict();
    this.showPrediction = true;
  }
  rePredict() {
    this.showPrediction = false;
    this.prediction = [];
  }
}
