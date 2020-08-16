import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent,UsersComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomeComponent,UsersComponent],
})
export class ComponentsModule { }