import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle,FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  colorName: string = "";
  isChecked : boolean = false;
  myCss:any = {
    backgroundColor: 'red',
    width: '200px',
    height: '200px'
  }
  changeStyle(colorStyle: string){
    this.colorName = colorStyle;
  }
}
