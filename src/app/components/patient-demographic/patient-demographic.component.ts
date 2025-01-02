import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { InputFieldComponent } from '../input-field/input-field.component';
import {ChangeDetectionStrategy, signal} from '@angular/core';
@Component({
  selector: 'app-patient-demographic',
  imports: [MatExpansionModule,MatSelectModule,InputFieldComponent],
  templateUrl: './patient-demographic.component.html',
  styleUrl: './patient-demographic.component.css'
})
export class PatientDemographicComponent {
readonly panelOpenState = signal(false);
}
