import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {


  name: string = 'Gayatri';

  username:  string= '';

  employees =
  [
    { id: 1, name: 'ved', age: 30 ,salary: 50000,isvisible: true},
    { id: 2, name: 'gayu', age: 25 ,salary: 60000,isvisible: true},
    { id: 3, name: 'poojita', age: 40 ,salary: 70000,isvisible: true}
  ];
  constructor() {
    this.name = 'gayu'; 
  }

  UpdateName() : void {
    this.name = 'Jane'; 
  }

  toggleVisibility(index: number): void {
    this.employees[index].isvisible = !this.employees[index].isvisible;
}
}