export class Artist {
  artistid : Number ;
  lastname:  String;
  firstname:String;
  nationality:String;
  dateofbirth:Number;
  datedeceased:Number;

  constructor(artistid,lastname,firstname,nationality,dateofbirth,datedeceased){
    this.artistid =  artistid;
    this.lastname =  lastname;
    this.firstname = firstname;
    this.nationality = nationality;
    this.dateofbirth = dateofbirth;
    this.datedeceased = datedeceased;
  }
}
