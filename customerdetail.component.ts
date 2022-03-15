import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {
  Customers: any = [];
  customerid:any;
  details:any
  routeSub: any;
  constructor(private apiService: ApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getCustomers().subscribe((data)=>{
      this.Customers = data;
      
  })
  this.routeSub = this.route.params.subscribe(params => {
    console.log(params) //log the entire params object
    this.customerid=params['id']; //log the value of id
    this.getcustomerdetails(this.customerid)
  });
}
  getcustomerdetails(id:any){
this.apiService.getcustomerbyid(id).subscribe((data)=>{
this.details=data;
console.log(this.details)
})
  }
  

}
