import {DiagnosticDetail} from '.././diagnostic/diagnosticdetail/diagnosticdetail.model';
export class PatientInfo{
    public patientId : String;
    public fName : String;
    public lName : String;
    public age : Number;
    public contactNo : Number;
    public emailID : String;
     diagnosticList : DiagnosticDetail [] ;

    
    

    constructor (patientId,firstName,lastName, age, contactNo, emailID) {
        this.patientId = patientId;
        this.fName = firstName;
        this.lName = lastName;
        this.age = age;
        this.contactNo = contactNo;
        this.emailID = emailID;


    }

}