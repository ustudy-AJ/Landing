import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  @Input() title: String | undefined;
  @Input() data: String | undefined;
  @Input() styleClass!: string;

  @HostListener("window:resize")
  onResize(){
    console.log("Ekran razmerini o`zgratirdi");
  };
}
