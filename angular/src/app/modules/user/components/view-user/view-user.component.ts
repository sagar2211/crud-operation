import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userInfo: any;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this.userService.$userViewData.subscribe((response)=>{
      this.userInfo = response;
      console.log(this.userInfo);
      
    })
  }
}
