export class Transaction {
  transactionid : Number ;
  dateacquired:  String;
  acquisitionprice:Number;
  askingprice:Number;
  datesold:String;
  salesprice:Number;
  customerid:Number;
  workid:Number;
  deleted:Boolean;

  constructor(transactionid,dateacquired,acquisitionprice,askingprice,datesold,salesprice,customerid,workid,deleted){
    this.transactionid =  transactionid;
    this.dateacquired =  dateacquired;
    this.acquisitionprice = acquisitionprice;
    this.askingprice = askingprice;
    this.datesold = datesold;
    this.salesprice = salesprice;
    this.customerid = customerid;
    this.workid = workid;
    this.deleted = deleted;
  }
}
