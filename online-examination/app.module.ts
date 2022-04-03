import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ExaminationsectionComponent } from './examinationsection/examinationsection.component';
import { RulesComponent } from './rules/rules.component';
import { AudiovideoComponent } from './audiovideo/audiovideo.component';
import { TestpageComponent } from './testpage/testpage.component';
import { ResultComponent } from './result/result.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsectionComponent } from './adminsection/adminsection.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AddrulesComponent } from './addrules/addrules.component';
import { UpdaterulesComponent } from './updaterules/updaterules.component';
import { SetparameterComponent } from './setparameter/setparameter.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentloginComponent,
    HomeComponent,
    ExaminationsectionComponent,
    RulesComponent,
    AudiovideoComponent,
    TestpageComponent,
    ResultComponent,
    AdminloginComponent,
    AdminsectionComponent,
    StudentregistrationComponent,
    UpdatestudentComponent,
    AddrulesComponent,
    UpdaterulesComponent,
    SetparameterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
