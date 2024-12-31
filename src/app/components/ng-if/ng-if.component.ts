import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  div1Visible:boolean = true;

  valueOne: string = "";
  valueTwo: string = "";

  hideDiv(){
    this.div1Visible = false;
  }
  showDiv(){
    this.div1Visible = true;
  }
}
