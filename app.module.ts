import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { LoginComponent } from './login/login.component';
import { ActiveDirective } from './active.directive';
import { Route, RouterModule, Routes } from '@angular/router';
import { SqrtPipe } from './app.sqrt';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
const routes: Route[] = [
  { path: 'new-cmp', component: NewCmpComponent },
  { path: 'customerlist', component: CustomerlistComponent },
  {path:'customerdetail/:id',component:CustomerdetailComponent}
]

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    NewCmpComponent,
    LoginComponent,
    ActiveDirective,
    CustomerlistComponent,
    CustomerdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    [ RouterModule.forRoot(routes) ],
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
  
})
export class AppModule { }
