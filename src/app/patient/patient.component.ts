import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

isPatientNew ;
  constructor() {
    this.isPatientNew=false;


   }

  ngOnInit() {
  }

}
