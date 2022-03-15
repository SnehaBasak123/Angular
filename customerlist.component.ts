import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  Customers: any = [];
  details:any
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCustomers().subscribe((data)=>{
      this.Customers = data;
      
  })
}
getcustomerdetails(id:any){
  this.apiService.getcustomerbyid(id).subscribe((data)=>{
  this.details=data;
  })
}

}
