export class Work {
  workid : Number ;
  title:  String;
  copy:String;
  medium:String;
  description:String;
  artistid:Number;
  deleted:Boolean;

  constructor(workid,title,copy,medium,description,artistid,deleted){
    this.workid =  workid;
    this.title =  title;
    this.copy = copy;
    this.medium = medium;
    this.description = description;
    this.artistid = artistid;
    this.deleted = deleted;
  }
}

