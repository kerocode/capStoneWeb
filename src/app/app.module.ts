import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyTabsComponent } from './my-tabs/my-tabs.component';
import { CELLULITISWOMCCComponent } from './cellulitiswomcc/cellulitiswomcc.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyTabsComponent,
    CELLULITISWOMCCComponent
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
