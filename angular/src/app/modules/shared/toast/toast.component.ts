import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  @Input() toastObj:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.toastObj);
    alert(this.toastObj.message)
    
  }

}
