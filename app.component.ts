import { Component, VERSION } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ApiService } from './api.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  title = 'Angular4app';
  Customers: any = [];
 
  constructor(private apiService: ApiService) {
  
  }
   ngOnInit(){

     this.apiService.getCustomers().subscribe((data)=>{
      this.Customers = data;
      
     });
    
 }



}
