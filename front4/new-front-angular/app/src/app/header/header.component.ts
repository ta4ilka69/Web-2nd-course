import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isBarbieMode: boolean = true;
  audio: HTMLAudioElement = new Audio("../assets/gg.mp3");
  buttonText: string = "Barbie Mode on";
  pic():void{
    if (this.isBarbieMode) {
      document.body.classList.remove('barbie-mode');
      document.body.classList.add('oppenheimer-mode');
      this.isBarbieMode = false;
      this.audio.play();
      this.buttonText = "Oppenheimer Mode on";
    }
    else{
      this.isBarbieMode = true;
      document.body.classList.remove('oppenheimer-mode');
      document.body.classList.add('barbie-mode');
      this.buttonText = "Barbie Mode on";
      this.audio.pause();
    }
  }
}
