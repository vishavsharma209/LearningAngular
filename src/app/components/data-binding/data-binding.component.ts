import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name: string = 'Angular';
  rollNo: number = 123;
  isActive: boolean = true;
  placeHolder:string = "Enter your marks";
  currentDateTime: Date = new Date();
  

  constructor() {
    this.name="Angular 10";
    
  }

  showWelcomeMessage() {
    alert("Welcome to Angular 10");
  }
  cityChange(event: any) {
    console.log(event.target.value);
    // console.log("City changed");
  }
}0
