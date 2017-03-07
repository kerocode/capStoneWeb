import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ViewModalComponent } from './view-modal/view-modal.component';

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

    ClickOutsideDirective,

    ViewModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
