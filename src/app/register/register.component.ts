import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  firstname: string ="";
  lastname: string ="";
  email: string ="";
  password: string ="";
  constructor(private http: HttpClient) 
  {
    this.register();
  }
  ngOnInit(): void
  {
  }
  register()
  {
    let bodyData = 
    {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:4200",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully")
    });
  }
  save()
  {
    this.register();
  }
}