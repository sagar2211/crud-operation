import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { NumberDirective } from './number.directive';



@NgModule({
  declarations: [
    ToastComponent,
    NumberDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToastComponent,
    NumberDirective
  ]
})
export class SharedModule { }
