import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MaincontainerComponent } from './pages/maincontainer/maincontainer.component';


const routes: Routes = [
  { path: 'home', component: MaincontainerComponent, data: {load: 'home'} },
  { path: 'metadata', component: MaincontainerComponent, data: {load: 'metadata'} },
  { path: 'themes', component: MaincontainerComponent, data: {load: 'themes'} },
  { path: 'audit', component: MaincontainerComponent, data: {load: 'audit'} },
  { path: 'bin', component: MaincontainerComponent, data: {load: 'bin'} },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
