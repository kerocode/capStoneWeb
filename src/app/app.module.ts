import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyTabsComponent } from './my-tabs/my-tabs.component';
import { CELLULITISWOMCCComponent } from './cellulitiswomcc/cellulitiswomcc.component';
import { CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCComponent } from './circulatorydisordersexceptamiwcardcathwomcc/circulatorydisordersexceptamiwcardcathwomcc.component';
import { DEPRESSIVENEUROSESComponent } from './depressiveneuroses/depressiveneuroses.component';
import { ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCComponent } from './esophagitisgastroentmiscdigestdisorderswomcc/esophagitisgastroentmiscdigestdisorderswomcc.component';
import { HEARTFAILURESHOCKWCCComponent } from './heartfailureshockwcc/heartfailureshockwcc.component';
import { MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWOComponent } from './majorjointreplacementorreattachmentoflowerextremitywo/majorjointreplacementorreattachmentoflowerextremitywo.component';
import { PSYCHOSESComponent } from './psychoses/psychoses.component';
import { REDBLOODCELLDISORDERSWOMCCComponent } from './redbloodcelldisorderswomcc/redbloodcelldisorderswomcc.component';
import { REHABILITATIONWCCMCCComponent } from './rehabilitationwccmcc/rehabilitationwccmcc.component';
import { VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESComponent } from './vaginaldeliverywocomplicatingdiagnoses/vaginaldeliverywocomplicatingdiagnoses.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ViewModalComponent, DialogComponent } from './view-modal/view-modal.component';
import { WholeDatasetComponent } from './whole-dataset/whole-dataset.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PredictionComponent } from './prediction/prediction.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'prediction', component: MyTabsComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyTabsComponent,
    CELLULITISWOMCCComponent,
    CIRCULATORYDISORDERSEXCEPTAMIWCARDCATHWOMCCComponent,
    DEPRESSIVENEUROSESComponent,
    ESOPHAGITISGASTROENTMISCDIGESTDISORDERSWOMCCComponent,
    HEARTFAILURESHOCKWCCComponent,
    MAJORJOINTREPLACEMENTORREATTACHMENTOFLOWEREXTREMITYWOComponent,
    PSYCHOSESComponent,
    REDBLOODCELLDISORDERSWOMCCComponent,
    REHABILITATIONWCCMCCComponent,
    VAGINALDELIVERYWOCOMPLICATINGDIAGNOSESComponent,
    DialogComponent,

    ClickOutsideDirective,
    ViewModalComponent,
    WholeDatasetComponent,
    FooterComponent,
    HomeComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
