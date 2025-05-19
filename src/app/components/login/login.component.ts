import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,TranslocoModule, FormsModule
  ]
})
export default class LoginComponent {
  currentLang =  "en";
  isLightMode = true;
  translocoService: TranslocoService = inject(TranslocoService);

  setLang(lang: string){
    console.log(lang);

    this.translocoService.setActiveLang(lang)
  }

  setTheme(){
    if(this.isLightMode){
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }else{
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
    this.isLightMode = !this.isLightMode;
  }
}
