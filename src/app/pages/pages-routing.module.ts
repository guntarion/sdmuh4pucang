import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'analisishasil',
    loadChildren: './analisishasil/hasilanalisis.module#HasilAnalisisModule',
  }, {
    path: 'konsepilmiah',
    loadChildren: './a-konsep-ilmiah/konsep-ilmiah.module#KonsepIlmiahModule',
  }, {
    path: 'hasilhemisfer',
    loadChildren: './japo-hemisfer/japo-hemisfer.module#JapoHemisferModule',
  }, {
    path: 'hasilmodalitas',
    loadChildren: './japo-modalitas/japo-modalitas.module#JapoModalitasModule',
  }, {
    path: 'hasilkecmajemuk',
    loadChildren: './japo-kecmajemuk/japo-kecmajemuk.module#JapoKecmajemukModule',
  }, {
    path: 'bantuan',
    loadChildren: './a-bantuan/bantuan.module#BantuanModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
