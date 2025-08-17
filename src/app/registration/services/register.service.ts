import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  sample() {
    console.log("Dependency Injection Example");
  }

  addUser(): void {
    console.log("Add user to backend");
  }

  UpdateUser(): void {
    console.log("Update user in backend");
  }

  delecteUser(): void {
    console.log("Delete user from backend");
  }
}
