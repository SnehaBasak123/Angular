import { Component, VERSION } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ApiService } from './api.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  title = 'Angular4app';
  Customers: any = [];
  formdata:any;
  emailid:any;
  constructor(private apiService: ApiService) {
  
  }
   ngOnInit(){

     this.apiService.getCustomers().subscribe((data)=>{
      this.Customers = data;
      
     });
     this.formdata = new FormGroup({
      // emailid: new FormControl("angular@gmail.com"),
      // passwd: new FormControl("abcd1234")
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
     ])),
     passwd: new FormControl("")
   });
    
 }
//  passwordvalidation(formcontrol:any){
//   if (formcontrol.value.length < 5) {
//     return {"passwd" : true};
//  }
//  }
//  passwordvalidation(formcontrol:any) {
//   if (formcontrol.value.length < 5) {
//      return {"passwd" : true};
//   }
// }
 onClickSubmit(data:any) {
  // alert("Entered Email id : " + data.emailid);
  this.emailid = data.emailid;
}

}
