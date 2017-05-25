import { Component, OnInit } from '@angular/core';
import {PatientInfo}  from './patient.model';

@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.css']
})
export class PatientinfoComponent implements OnInit {
patient: PatientInfo;
isEdit =false;
  constructor() { 
   this.patient = new PatientInfo(
     '2121', 'Abhishek', 'Srivastava',20, 9921111239,'abhishek05@sdt.com');
   
  }
  toggleEdit(){
    if(this.isEdit===true)
    this.isEdit=false;
    else
    this.isEdit=true;
  }

  ngOnInit() {
  }

}
