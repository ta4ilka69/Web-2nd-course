import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { DotRequest } from './dot-request';
import { DotService } from './dot-service.service';
import { Dot } from './dot-response';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, FormComponent,TableComponent]
})
export class AppComponent {
  authtoken = "YbsS34AFPtTxfV0i65KuRQ3ADoHlaWBIOptjFr2RoXM";
  dots:Dot[] = [];
  constructor(private dotService:DotService){}
  /*
  так как у нас страница только с input`ом и таблицей
  то чтобы не переписывать логику сервера, пришлось
  сп... взять токен авторизации из БД, созданный
  еще при сдаче лабы
  */
 ngOnInit(){
    this.updateDots();
  }
  updateDots(){
    this.dotService.getDots(this.authtoken).subscribe((dots)=>{
      this.dots = dots;
    });
  }
  handleFormSubmit(data:{x:number,y:number,r:number}){
    const dot: DotRequest = {x:data.x,y:data.y,r:data.r,token:this.authtoken};
    console.log(dot);
    this.dotService.sendDot(dot).subscribe((success)=>{
      console.log(success);
    });
    this.updateDots();
  }
}
