import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('name')name!: ElementRef;
  @ViewChild('password')password!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  login()
	{
    
    alert("Username: "+this.name.nativeElement.value+'\n'+'Password:'+this.password.nativeElement.value);
	}
	
}
