import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass,FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
      bgClass: string= "bg-success";
      isChecked: boolean = false;

      changeClass(ClassName : string){
        this.bgClass = ClassName

      }
}
