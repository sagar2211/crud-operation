import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  $userData = new Subject();
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

  updateProfile(file: any) {
    const formData = new FormData();
    formData.append("profile-upload", file[0], file[0].name);
    return this.http.post(`${environment.BASE_URL}/upload-profile`, formData);
  }
}
