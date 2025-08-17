import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';


@NgModule({
  declarations: [UserRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegistrationRoutingModule
  ],
  providers:[RegisterService]
})
export class RegistrationModule { }
