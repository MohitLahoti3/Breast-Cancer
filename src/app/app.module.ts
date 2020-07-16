import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { RiskFactorComponent } from './risk-factor/risk-factor.component';
import { TypesComponent } from './types/types.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { FaqsComponent } from './faqs/faqs.component';
import { MetastaticBreastCancerComponent } from './metastatic-breast-cancer/metastatic-breast-cancer.component';
import { DuctalCarcinomaInSituComponent } from './ductal-carcinoma-in-situ/ductal-carcinoma-in-situ.component';
import { InvasiveDuctalCarcinomaComponent } from './invasive-ductal-carcinoma/invasive-ductal-carcinoma.component';
import { TripleNegetiveBreastCancerComponent } from './triple-negetive-breast-cancer/triple-negetive-breast-cancer.component';
import { InflammatoryBreastCancerComponent } from './inflammatory-breast-cancer/inflammatory-breast-cancer.component';
import { BreastCancerDuringPregnancyComponent } from './breast-cancer-during-pregnancy/breast-cancer-during-pregnancy.component';
import { OtherTypesComponent } from './other-types/other-types.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    RiskFactorComponent,
    TypesComponent,
    SymptomsComponent,
    DiagnosisComponent,
    TreatmentComponent,
    PrecautionsComponent,
    FaqsComponent,
    MetastaticBreastCancerComponent,
    DuctalCarcinomaInSituComponent,
    InvasiveDuctalCarcinomaComponent,
    TripleNegetiveBreastCancerComponent,
    InflammatoryBreastCancerComponent,
    BreastCancerDuringPregnancyComponent,
    OtherTypesComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
