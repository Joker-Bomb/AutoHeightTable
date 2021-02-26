import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntdGridPageComponent } from './antd-grid-page/antd-grid-page.component';
import { AgGridPageComponent } from './ag-grid-page/ag-grid-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NsAutoHeightTableDirective } from './ns-auto-height-table.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AntdGridPageComponent,
    AgGridPageComponent,
    NsAutoHeightTableDirective
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    
    AppRoutingModule,
    
    FormsModule,
    
    HttpClientModule,
    
    BrowserAnimationsModule,
    NzTableModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
