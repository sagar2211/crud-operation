import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userData: any;
  toastObj: any = null;

  constructor(private userService : UserService,
    private router : Router) { }

  ngOnInit(): void {
    this.getAllUserData();
  }

  getAllUserData(){
    this.userService.getAllUserData().subscribe((response)=>{
      this.userData = response;
    })
  }

  updateUser(user : any){
    this.userService.setUpdateUser(user)
    this.router.navigate(['/user/updateUser']);
  }

  viewUser(user : any){
    this.userService.setViewUser(user);
    this.router.navigate(['/user/viewUser']);
  }

  deleteUser(id : any){
    console.log(id);
    
    this.userService.deleteUserData(id).subscribe((response)=>{
      console.log(response);
      this.toastObj = {
        error : "false",
        message : "User Deleted Successfully..."
      }
      this.getAllUserData();
      
    })
  }

}
