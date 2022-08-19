import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.css']
})
export class CreateUpdateUserComponent implements OnInit {
  userForm! : FormGroup;
  userInfo!: any;
  toastObj: any = null;
  selectedFiles: any;
  isValidImg!: boolean;
  profilePicture: any;
  constructor(private userService : UserService,
    private activateRoute: ActivatedRoute,
    private formBuilder : FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
    this.createForm();
    this.getUserData();
  }

  getUserData(){
    this.activateRoute.paramMap.subscribe((user : any)=>{
      console.log("userId === ",user.params);
      this.userInfo = user.params;
      if(this.userInfo !== null)
      this.editForm();
    })

    // this.userService.$userData.subscribe((response)=>{
    //   this.userInfo = response;
    //   if(this.userInfo !== null)
    //   this.editForm();
    // })
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      firstname : [null, Validators.required],
      lastname : [null, Validators.required],
      email : [null, Validators.required, , Validators.email],
      phone : [null, Validators.required],
      image : [null]
    });
  }

  editForm() {
    this.profilePicture = this.userInfo.image
    this.userForm.patchValue({
      firstname : this.userInfo ? this.userInfo.firstname : null,
      lastname : this.userInfo ? this.userInfo.lastname : null,
      email : this.userInfo ? this.userInfo.email : null,
      phone : this.userInfo ? this.userInfo.phone : null,
      image : this.userInfo ? this.userInfo.image : null,
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].touched ? this.userForm.controls[controlName].hasError(errorName) : null;
  }

  selectFiles(event: any) {
    this.selectedFiles = event.target.files;
    const file: File = event.target.files[0];
    if (
      file.type == 'image/png' ||
      file.type == 'image/jpeg' ||
      file.type == 'image/x-png'
    ) {
      this.isValidImg = true;
    } else {
      this.isValidImg = false;
    }

    this.userService.updateProfile(this.selectedFiles).subscribe({
      next: (res: any) => {
        if (res.status !== "error") {
          this.profilePicture = res.filename;
          this.userForm.patchValue({
            image : this.profilePicture
          })
        } else {
          console.log(res);
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onSubmit(){
    if(this.userInfo !== null){
      let data = this.generateObj(this.userInfo);
      console.log(data);
      
      this.userService.updateUser(data).subscribe((response)=>{
        console.log(response);
        this.toastObj = {
          error : "false",
          message : "User Updated Successfully..."
        }
      })
    } else {
      this.userService.createUser(this.userForm.value).subscribe((response)=>{
        console.log(response);
        this.toastObj = response;
      })
    }
    this.router.navigate(['/user/userList']);
  }

  generateObj(user : any){
    let data = {
      _id : user._id,
      firstname : this.userForm.value.firstname,
      lastname : this.userForm.value.lastname,
      email : this.userForm.value.email,
      phone : this.userForm.value.phone,
      image : this.userForm.value.image,
    }

    return data;
  }

}
