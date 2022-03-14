import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { LoginComponent } from './login/login.component';
import { ActiveDirective } from './active.directive';
import { Route, RouterModule, Routes } from '@angular/router';
const routes: Route[] = [
  { path: 'new-cmp', component: NewCmpComponent }]

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    LoginComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [ RouterModule.forRoot(routes) ]
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
  
})
export class AppModule { }
