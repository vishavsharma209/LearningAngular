import { Component, input } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import { PatientDemographicComponent } from "./components/patient-demographic/patient-demographic.component";
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-root',
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,PatientDemographicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angularApp';
  isExpanded: boolean = true;
  readonly panelOpenState = signal(false);
  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
