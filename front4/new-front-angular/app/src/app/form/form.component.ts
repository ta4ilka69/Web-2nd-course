import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent,MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() formSubmit = new EventEmitter<{ x: number, y: number, r: number}>();
  x:number|undefined
  y:number|undefined
  r:number|undefined
  handleInputChange(event:{label:string,value:number}):void{
    switch (event.label) {
      case 'X':
        this.x = event.value;
        break;
      case 'Y':
        this.y = event.value;
        break;
      case 'R':
        this.r = event.value;
        break;
    }
  }
  onSubmit(event:Event){
    event.preventDefault();
    if(this.x!==undefined&&this.y!=undefined&&this.r!=undefined){
      this.formSubmit.emit({x:this.x,y:this.y,r:this.r})
    }
  }
}
