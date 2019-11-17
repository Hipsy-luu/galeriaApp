export class Work {
  workid : Number ;
  title:  String;
  copy:String;
  medium:String;
  description:String;
  artistid:Number;

  constructor(workid,title,copy,medium,description,artistid){
    this.workid =  workid;
    this.title =  title;
    this.copy = copy;
    this.medium = medium;
    this.description = description;
    this.artistid = artistid;
  }
}

