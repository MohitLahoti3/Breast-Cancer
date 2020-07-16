import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { TripleNegetiveBreastCancerComponent } from './triple-negetive-breast-cancer/triple-negetive-breast-cancer.component';
import { InvasiveDuctalCarcinomaComponent } from './invasive-ductal-carcinoma/invasive-ductal-carcinoma.component';
import { InflammatoryBreastCancerComponent } from './inflammatory-breast-cancer/inflammatory-breast-cancer.component';
import { BreastCancerDuringPregnancyComponent } from './breast-cancer-during-pregnancy/breast-cancer-during-pregnancy.component';
import { OtherTypesComponent } from './other-types/other-types.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  {path: '', redirectTo : 'Overview', pathMatch: 'full'},
  {path: 'Overview', component: OverviewComponent },
  {path: 'Risk-Factor', component: RiskFactorComponent},
  {path: 'Types',
  children : [
    {path: '', component: TypesComponent},
    { path: 'Metastatic-Breast-Cancer', component: MetastaticBreastCancerComponent},
    {path: 'Ductal-Carcinoma-In-Situ', component: DuctalCarcinomaInSituComponent},
    {path: 'Invasive-Ductal-Carcinoma', component: InvasiveDuctalCarcinomaComponent},
    {path: 'Triple-Negetive-Breast-Cancer', component: TripleNegetiveBreastCancerComponent},
    {path: 'Inflammatory-Breast-Cancer', component: InflammatoryBreastCancerComponent},
    {path: 'Breast-Cancer-During-Pregnancy', component: BreastCancerDuringPregnancyComponent},
    {path: 'Other-Types', component: OtherTypesComponent}
  ]
  },
  {path: 'Statistics', component: StatisticsComponent},
  {path: 'Symptoms', component: SymptomsComponent},
  {path: 'Diagnosis', component: DiagnosisComponent},
  {path: 'Treatment', component: TreatmentComponent},
  {path: 'Precautions', component: PrecautionsComponent},
  {path: 'FAQs', component: FaqsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
