import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgFor, NgIf } from '@angular/common';
/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-input-field',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatSelectModule,NgFor,NgIf,MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  readonly startDate = new Date(1990, 0, 1);
  FormControl = new FormControl('');

  patientDemographicInputFields = [
    {
      type: 'select',
      label: 'Title',
      placeholder: "",
      options: [
        { value: '0', viewValue: 'Mr.' },
        { value: '1', viewValue: 'Ms.' },
      ],
      formControl: this.FormControl
    },
    {
      type: 'text',
      label: 'First Name',
      placeholder: "Your first name",
      formControl: this.FormControl
    },
    {
      type: 'text',
      label: 'Middle Initial',
      placeholder: "Your Middle name",
      formControl: this.FormControl
    },
    {
      type: 'text',
      label: 'Last Name',
      placeholder: "Your Last name",
      formControl: this.FormControl
    },
    {
      type: 'text',
      label: 'Suffix',
      placeholder: "",
      formControl: this.FormControl
    },
    {
      type: 'text',
      label: 'Preferred Name',
      placeholder: "",
      formControl: this.FormControl
    },
    {
      type: 'datePicker',
      label: 'Date of Birth*',
      placeholder: "",
      formControl: this.FormControl
    },
    {
      type: 'select',
      label: 'Marital Status',
      placeholder: "",
      options: [
        { value: '0', viewValue: 'Married' },
        { value: '1', viewValue: 'Un-Married' },
      ],
      formControl: this.FormControl
    }
  ];
}
