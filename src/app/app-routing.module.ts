import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'new-patient-registration',
    loadChildren: () => import('./new-patient-registration/new-patient-registration.module').then( m => m.NewPatientRegistrationPageModule)
  },
  {
    path: 'clinic',
    loadChildren: () => import('./clinic/clinic.module').then( m => m.ClinicPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'accessbility-features',
    loadChildren: () => import('./accessbility-features/accessbility-features.module').then( m => m.AccessbilityFeaturesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
