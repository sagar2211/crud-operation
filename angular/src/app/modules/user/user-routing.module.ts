import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateUserComponent } from './components/create-update-user/create-update-user.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {
    path: '', 
    component:UserHomeComponent,
    children: [
      { path : '', redirectTo : 'userList', pathMatch : 'full'},
      { path : 'createUser', component: CreateUpdateUserComponent},
      { path : 'updateUser', component: CreateUpdateUserComponent},
      { path : 'userList', component: UserListComponent},
      { path : 'viewUser', component: ViewUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
