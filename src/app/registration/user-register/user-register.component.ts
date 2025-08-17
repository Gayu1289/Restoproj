import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name: string = 'Sarthak';
  username: string = '';
  flag: boolean = false;
buttonText: string = 'Show Details';

  //registerService: RegisterService = new RegisterService();

  employees = [
    { name:"ved", age: 23, salary: 20000 , isVisible: true},
    { name:"poojita", age: 24, salary: 30000 , isVisible: true},
    { name:"Gayatri", age: 25, salary: 40000 , isVisible: true},
  ];

  constructor(private registerService: RegisterService) { 
    this.name = "Gayatri";
    registerService.sample();
  }

  updateName(): void {
    this.name = "John";
   this.registerService.UpdateUser();
  }

  toggleVisibility(index: number): void {
    this.employees[index].isVisible = !this.employees[index].isVisible;
  }

}
