export class Customer {
  customerid : Number ;
  lastname:  String;
  firstname:String;
  emailaddress:String;
  encryptedpassword:String;
  street:String;
  city:String;
  state:String;
  ziporpostalcode:String;
  country:String;
  areacode:String;
  phonenumber:String;

  constructor(customerid,lastname,firstname,emailaddress,encryptedpassword,street,city,state,ziporpostalcode,country,areacode,phonenumber){
    this.customerid =  customerid;
    this.lastname =  lastname;
    this.firstname = firstname;
    this.emailaddress = emailaddress;
    this.encryptedpassword = encryptedpassword;
    this.street = street;
    this.city = city;
    this.state = state;
    this.ziporpostalcode = ziporpostalcode;
    this.country = country;
    this.areacode = areacode;
    this.phonenumber = phonenumber;
  }
}
