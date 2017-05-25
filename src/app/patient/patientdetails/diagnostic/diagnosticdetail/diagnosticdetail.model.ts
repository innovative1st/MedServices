export class DiagnosticDetail{
    diagnosticID : String;
    public diagnosisDetails: String ;
    public pathalogicalTests: String;
    public prescription: String;
    public otherinfo : String;
    //public nextscheduledVisit: Date;

    constructor (diagnosticID,diagnosisDetails,pathalogicalTests,prescription,otherifo){
        this.diagnosticID=diagnosticID;
        this.diagnosisDetails=diagnosisDetails;
        this.pathalogicalTests=pathalogicalTests;
        this.prescription= prescription;
        this.otherinfo= otherifo;
    }
}