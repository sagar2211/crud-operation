import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from "../../../../../environments/environment";

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userInfo: any;
  image_path : any;

  constructor(private userService : UserService,
    private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this.activateRoute.paramMap.subscribe((user : any)=>{
      console.log("userId === ",user.params);
      this.userInfo = user.params;
      this.image_path = `${environment.IMG_PATH + "/image/" + this.userInfo.image}`
    })
  }
}
