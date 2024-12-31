import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
 cities: string[] = ['Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Chennai'];

 Students: any[] = [
  { name: 'Raj', rollNo: 101, marks: {
    maths: 80, science: 70, english: 85
  } },
  { name: 'Rahul', rollNo: 102, marks: {
    maths: 75, science: 80, english: 90
  } },
  { name: 'Ravi', rollNo: 103, marks: {
    maths: 85, science: 90, english: 95
  } },
 ];

}
