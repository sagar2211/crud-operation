import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateUpdateUserComponent } from './components/create-update-user/create-update-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ViewUserComponent } from './components/view-user/view-user.component';

@NgModule({
  declarations: [
    CreateUpdateUserComponent,
    UserListComponent,
    UserHomeComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
