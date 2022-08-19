import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  $userData = new BehaviorSubject(null);
  $userViewData = new BehaviorSubject(null);
  constructor(private http : HttpClient) { 
  }

  createUser(userInfo : any){
    return this.http.post(`${environment.BASE_URL}/create`, userInfo);
  }

  updateUser(userInfo : any){
    return this.http.patch(`${environment.BASE_URL}/update`, userInfo);
  }

  deleteUserData(id:any){
    return this.http.delete(`${environment.BASE_URL}/delete/${id}`);
  }

  getAllUserData(){
    return this.http.get(`${environment.BASE_URL}/all`);
  }

  getUserData(id:any){
    return this.http.get(`${environment.BASE_URL}/:${id}`);
  }

  setUpdateUser(userData : any){
    this.$userData.next(userData);
  }

  setViewUser(userViewData : any){
    this.$userViewData.next(userViewData);
  }
}
