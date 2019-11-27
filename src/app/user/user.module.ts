import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ValidationComponent } from './validation/validation.component';
import { TemplateComponent } from './template/template.component';



@NgModule({
  declarations: [CustomerComponent, AdminComponent, ValidationComponent, TemplateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[AdminComponent,ValidationComponent,TemplateComponent]

})
export class UserModule { }
