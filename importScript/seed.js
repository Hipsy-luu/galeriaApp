var mongoose = require('mongoose');

//Se levanta la coneccion a la bdd
mongoose.connect("mongodb://localhost:27017/galeria"/*, { autoIndex: false }*/).then(
    (db) => {
      console.log('Database connection is successful');
  },
    err => { console.log('Error when connecting to the database' + err) }
);

const Artists = require('./modelsForImport/artist.model');
const Customers = require('./modelsForImport/customer.model');
const Trans = require('./modelsForImport/trans.model');
const Work = require('./modelsForImport/work.model');


//let artistDefault =
let artistsDefault = [
  {"artistid":1,"lastname":"Miro","firstname":"Joan","nationality":"Spanish","dateofbirth":1893,"datedeceased":1983}
  ,{"artistid":2,"lastname":"Kandinsky","firstname":"Wassily","nationality":"Russian","dateofbirth":1866,"datedeceased":1944}
  ,{"artistid":3,"lastname":"Klee","firstname":"Paul","nationality":"German ","dateofbirth":1879,"datedeceased":1940}
  ,{"artistid":4,"lastname":"Matisse","firstname":"Henri","nationality":"French ","dateofbirth":1869,"datedeceased":1954}
  ,{"artistid":5,"lastname":"Chagall","firstname":"Marc","nationality":"French ","dateofbirth":1887,"datedeceased":1985}
  ,{"artistid":11,"lastname":"Sargent","firstname":"John Singer","nationality":"United States ","dateofbirth":1856,"datedeceased":1925}
  ,{"artistid":17,"lastname":"Tobey","firstname":"Mark","nationality":"United States ","dateofbirth":1890,"datedeceased":1976}
  ,{"artistid":18,"lastname":"Horiuchi ","firstname":"Paul","nationality":"United States ","dateofbirth":1906,"datedeceased":1999}
  ,{"artistid":19,"lastname":"Graves ","firstname":"Morris ","nationality":"United States ","dateofbirth":1920,"datedeceased":2001}
  ];

let customesrDefault = [
  {"customerid":1000,"lastname":"Janes","firstname":"Jeffrey","emailaddress":"Jeffrey.Janes@somewhere.com","encryptedpassword":"ng76tG9E","street":"123W.ElmSt","city":"Renton","state":"WA","ziporpostalcode":"98055","country":"USA","areacode":"425","phonenumber":"543-2345"}
  ,{"customerid":1001,"lastname":"Smith","firstname":"David","emailaddress":"David.Smith@somewhere.com","encryptedpassword":"ttr67i23","street":"813TumbleweedLane","city":"Loveland","state":"CO","ziporpostalcode":"81201","country":"USA","areacode":"970","phonenumber":"654-9876"}
  ,{"customerid":1015,"lastname":"Twilight","firstname":"Tiffany","emailaddress":"Tiffany.Twilight@somewhere.com","encryptedpassword":"gr44t5uz","street":"881stAvenue","city":"Langley","state":"WA","ziporpostalcode":"98260","country":"USA","areacode":"360","phonenumber":"765-5566"}
  ,{"customerid":1033,"lastname":"Smathers","firstname":"Fred","emailaddress":"Fred.Smathers@somewhere.com","encryptedpassword":"mnF3D00Q","street":"1089988thAve","city":"BainbridgeIsland","state":"WA","ziporpostalcode":"98110","country":"USA","areacode":"206","phonenumber":"876-9911"}
  ,{"customerid":1034,"lastname":"Frederickson","firstname":"MaryBeth","emailaddress":"MaryBeth.Frederickson@somewhere.com","encryptedpassword":"Nd5qr4Tv","street":"25SouthLafayette","city":"Denver","state":"CO","ziporpostalcode":"80201","country":"USA","areacode":"303","phonenumber":"513-8822"}
  ,{"customerid":1036,"lastname":"Warning","firstname":"Selma","emailaddress":"Selma.Warning@somewhere.com","encryptedpassword":"CAe3Gh98","street":"205Burnaby","city":"Vancouver","state":"BC","ziporpostalcode":"V6Z1W2","country":"Canada","areacode":"604","phonenumber":"988-0512"}
  ,{"customerid":1037,"lastname":"Wu","firstname":"Susan","emailaddress":"Susan.Wu@somewhere.com","encryptedpassword":"Ues3thQ2","street":"105LocustAve","city":"Atlanta","state":"GA","ziporpostalcode":"30322","country":"USA","areacode":"404","phonenumber":"653-3465"}
  ,{"customerid":1040,"lastname":"Gray","firstname":"Donald","emailaddress":"Donald.Gray@somewhere.com","street":"55BodegaAve","city":"BodegaBay","state":"CA","ziporpostalcode":"94923","country":"USA","areacode":"707","phonenumber":"568-4839"}
  ,{"customerid":1041,"lastname":"Johnson","firstname":"Lynda","street":"117CStreet","city":"Washington","state":"DC","ziporpostalcode":"20003","country":"USA","areacode":"202","phonenumber":"438-5498"}
  ,{"customerid":1051,"lastname":"Wilkens","firstname":"Chris","emailaddress":"Chris.Wilkens@somewhere.com","encryptedpassword":"45QZjx59","street":"87HighlandDrive","city":"Olympia","state":"WA","ziporpostalcode":"98508","country":"USA","areacode":"360","phonenumber":"876-8822"}
  ];

let transDefault = [
  {"transactionid":100,"dateacquired":"04-11-2014","acquisitionprice":30000,"askingprice":45000,"datesold":"14-12-2014","salesprice":42500,"customerid":1000,"workid":500}
  ,{"transactionid":101,"dateacquired":"07-11-2014","acquisitionprice":250,"askingprice":500,"datesold":"19-12-2014","salesprice":500,"customerid":1015,"workid":511}
  ,{"transactionid":102,"dateacquired":"17-11-2014","acquisitionprice":125,"askingprice":250,"datesold":"18-01-2015","salesprice":200,"customerid":1001,"workid":521}
  ,{"transactionid":103,"dateacquired":"17-11-2014","acquisitionprice":250,"askingprice":500,"datesold":"12-12-2015","salesprice":400,"customerid":1034,"workid":522}
  ,{"transactionid":104,"dateacquired":"17-11-2014","acquisitionprice":250,"askingprice":250,"datesold":"18-01-2015","salesprice":200,"customerid":1001,"workid":523}
  ,{"transactionid":105,"dateacquired":"17-11-2014","acquisitionprice":200,"askingprice":500,"datesold":"12-12-2015","salesprice":400,"customerid":1034,"workid":524}
  ,{"transactionid":115,"dateacquired":"03-03-2015","acquisitionprice":1500,"askingprice":3000,"datesold":"07-06-2015","salesprice":2750,"customerid":1033,"workid":537}
  ,{"transactionid":121,"dateacquired":"21-09-2015","acquisitionprice":15000,"askingprice":30000,"datesold":"28-11-2015","salesprice":27500,"customerid":1015,"workid":548}
  ,{"transactionid":125,"dateacquired":"21-11-2015","acquisitionprice":125,"askingprice":250,"datesold":"18-12-2015","salesprice":200,"customerid":1001,"workid":551}
  ,{"transactionid":126,"dateacquired":"21-11-2015","acquisitionprice":200,"askingprice":400,"workid":552}
  ,{"transactionid":127,"dateacquired":"21-11-2015","acquisitionprice":125,"askingprice":500,"datesold":"22-12-2015","salesprice":400,"customerid":1034,"workid":553}
  ,{"transactionid":128,"dateacquired":"21-11-2015","acquisitionprice":125,"askingprice":250,"datesold":"16-03-2016","salesprice":225,"customerid":1036,"workid":554}
  ,{"transactionid":129,"dateacquired":"21-11-2015","acquisitionprice":125,"askingprice":250,"datesold":"16-03-2016","salesprice":225,"customerid":1036,"workid":555}
  ,{"transactionid":151,"dateacquired":"07-05-2016","acquisitionprice":10000,"askingprice":20000,"datesold":"28-06-2016","salesprice":17500,"customerid":1036,"workid":561}
  ,{"transactionid":152,"dateacquired":"18-05-2016","acquisitionprice":125,"askingprice":250,"datesold":"15-08-2016","salesprice":225,"customerid":1001,"workid":562}
  ,{"transactionid":153,"dateacquired":"18-05-2016","acquisitionprice":200,"askingprice":400,"datesold":"15-08-2016","salesprice":350,"customerid":1001,"workid":563}
  ,{"transactionid":154,"dateacquired":"18-05-2016","acquisitionprice":250,"askingprice":500,"datesold":"28-09-2016","salesprice":400,"customerid":1040,"workid":564}
  ,{"transactionid":155,"dateacquired":"18-05-2016","acquisitionprice":250,"askingprice":500,"workid":565}
  ,{"transactionid":156,"dateacquired":"18-05-2016","acquisitionprice":250,"askingprice":500,"datesold":"27-09-2016","salesprice":400,"customerid":1040,"workid":566}
  ,{"transactionid":161,"dateacquired":"28-06-2016","acquisitionprice":7500,"askingprice":15000,"datesold":"29-09-2016","salesprice":13750,"customerid":1033,"workid":570}
  ,{"transactionid":171,"dateacquired":"23-08-2016","acquisitionprice":35000,"askingprice":60000,"datesold":"29-09-2016","salesprice":55000,"customerid":1000,"workid":571}
  ,{"transactionid":175,"dateacquired":"29-09-2016","acquisitionprice":40000,"askingprice":75000,"datesold":"18-12-2016","salesprice":72500,"customerid":1036,"workid":500}
  ,{"transactionid":181,"dateacquired":"11-10-2016","acquisitionprice":250,"askingprice":500,"workid":578}
  ,{"transactionid":201,"dateacquired":"28-02-2017","acquisitionprice":2000,"askingprice":3500,"datesold":"26-04-2017","salesprice":3250,"customerid":1040,"workid":580}
  ,{"transactionid":202,"dateacquired":"28-02-2017","acquisitionprice":2000,"askingprice":3500,"datesold":"26-04-2017","salesprice":3250,"customerid":1040,"workid":581}
  ,{"transactionid":225,"dateacquired":"08-06-2017","acquisitionprice":125,"askingprice":250,"datesold":"27-09-2017","salesprice":225,"customerid":1051,"workid":585}
  ,{"transactionid":226,"dateacquired":"08-06-2017","acquisitionprice":200,"askingprice":400,"workid":586}
  ,{"transactionid":227,"dateacquired":"08-06-2017","acquisitionprice":250,"askingprice":500,"datesold":"27-09-2017","salesprice":475,"customerid":1051,"workid":587}
  ,{"transactionid":228,"dateacquired":"08-06-2017","acquisitionprice":250,"askingprice":500,"workid":588}
  ,{"transactionid":229,"dateacquired":"08-06-2017","acquisitionprice":250,"askingprice":500,"workid":589}
  ,{"transactionid":241,"dateacquired":"29-08-2017","acquisitionprice":2500,"askingprice":5000,"datesold":"27-09-2017","salesprice":4750,"customerid":1015,"workid":590}
  ,{"transactionid":251,"dateacquired":"25-10-2017","acquisitionprice":25000,"askingprice":50000,"workid":593}
  ,{"transactionid":252,"dateacquired":"27-10-2017","acquisitionprice":250,"askingprice":500,"workid":594}
  ,{"transactionid":253,"dateacquired":"27-10-2017","acquisitionprice":250,"askingprice":500,"workid":595}
  ,{"transactionid":254,"dateacquired":"27-10-2017","acquisitionprice":250,"askingprice":500,"workid":596}
  ];

let worksDefault = [
  {"workid":500,"title":"Memories IV","copy":"Unique","medium":"Casein rice paper collage","description":"31 x 24.8 in.","artistid":18}
  ,{"workid":511,"title":"Surf and Bird","copy":"142\/500","medium":"High Quality Limited Print ","description":"Northwest School Expressionist style","artistid":19}
  ,{"workid":521,"title":"The Tilled Field","copy":"788\/1000","medium":"High Quality Limited Print ","description":"Early Surrealist style","artistid":1}
  ,{"workid":522,"title":"La Lecon de Ski ","copy":"353\/500","medium":"High Quality Limited Print ","description":"Surrealist style","artistid":1}
  ,{"workid":523,"title":"On White II","copy":"435\/500","medium":"High Quality Limited Print ","description":"Bauhaus style of Kandinsky","artistid":2}
  ,{"workid":524,"title":"Woman with a Hat","copy":"596\/750","medium":"High Quality Limited Print ","description":"A very colorful Impressionist piece","artistid":4}
  ,{"workid":537,"title":"The Woven World ","copy":"17\/750","medium":"Color lithograph","description":"Signed","artistid":17}
  ,{"workid":548,"title":"Night Bird ","copy":"Unique","medium":"Watercolor on Paper","description":"50 x 72.5 cm. - Signed","artistid":19}
  ,{"workid":551,"title":"Der Blaue Reiter","copy":"236\/1000","medium":"High Quality Limited Print ","description":"The Blue Rider-Early Pointilism influence","artistid":2}
  ,{"workid":552,"title":"Angelus Novus","copy":"659\/750","medium":"High Quality Limited Print ","description":"Bauhaus style of Klee","artistid":3}
  ,{"workid":553,"title":"The Dance","copy":"734\/1000","medium":"High Quality Limited Print ","description":"An Impressionist masterpiece","artistid":4}
  ,{"workid":554,"title":"I and the Village","copy":"834\/1000","medium":"High Quality Limited Print ","description":"Shows Belarusian folk-life themes and symbology","artistid":5}
  ,{"workid":555,"title":"Claude Monet Painting","copy":"684\/1000","medium":"High Quality Limited Print ","description":"Shows French Impressionist influence of Monet","artistid":11}
  ,{"workid":561,"title":"Sunflower","copy":"Unique","medium":"Watercolor and ink","description":"33.3 x 16.1 cm. - Signed","artistid":19}
  ,{"workid":562,"title":"The Fiddler","copy":"251\/1000","medium":"High Quality Limited Print ","description":"Shows Belarusian folk-life themes and symbology","artistid":5}
  ,{"workid":563,"title":"Spanish Dancer","copy":"583\/750","medium":"High Quality Limited Print ","description":"American realist style - From work in Spain","artistid":11}
  ,{"workid":564,"title":"Farmer's Market #2","copy":"267\/500","medium":"High Quality Limited Print ","description":"Northwest School Abstract Expressionist style","artistid":17}
  ,{"workid":565,"title":"Farmer's Market #2","copy":"268\/500","medium":"High Quality Limited Print ","description":"Northwest School Abstract Expressionist style","artistid":17}
  ,{"workid":566,"title":"Into Time","copy":"323\/500","medium":"High Quality Limited Print ","description":"Northwest School Abstract Expressionist style","artistid":18}
  ,{"workid":570,"title":"Untitled Number 1","copy":"Unique","medium":"Monotype with tempera","description":"4.3 x 6.1 in. Signed","artistid":17}
  ,{"workid":571,"title":"Yellow Covers Blue","copy":"Unique","medium":"Oil and collage ","description":"71 x 78 in. - Signed","artistid":18}
  ,{"workid":578,"title":"Mid-Century Hibernation","copy":"362\/500","medium":"High Quality Limited Print ","description":"Northwest School Expressionist style","artistid":19}
  ,{"workid":580,"title":"Forms in Progress I","copy":"Unique","medium":"Color aquatint","description":"19.3 x 24.4 in. - Signed","artistid":17}
  ,{"workid":581,"title":"Forms in Progress II ","copy":"Unique","medium":"Color aquatint","description":"19.3 x 24.4 in. - Signed","artistid":17}
  ,{"workid":585,"title":"The Fiddler","copy":"252\/1000","medium":"High Quality Limited Print ","description":"Shows Belarusian folk-life themes and symbology","artistid":5}
  ,{"workid":586,"title":"Spanish Dancer","copy":"588\/750","medium":"High Quality Limited Print ","description":"American Realist style - From work in Spain","artistid":11}
  ,{"workid":587,"title":"Broadway Boggie ","copy":"433\/500","medium":"High Quality Limited Print ","description":"Northwest School Abstract Expressionist style","artistid":17}
  ,{"workid":588,"title":"Universal Field ","copy":"114\/500","medium":"High Quality Limited Print ","description":"Northwest School Abstract Expressionist style","artistid":17}
  ,{"workid":589,"title":"Color Floating in Time ","copy":"487\/500","medium":"High Quality Limited Print ","description":"Northwest School Abstract Expressionist style","artistid":18}
  ,{"workid":590,"title":"Blue Interior","copy":"Unique","medium":"Tempera on card ","description":"43.9 x 28 in.","artistid":17}
  ,{"workid":593,"title":"Surf and Bird","copy":"Unique","medium":"Gouache","description":"26.5 x 29.75 in. - Signed","artistid":19}
  ,{"workid":594,"title":"Surf and Bird","copy":"362\/500","medium":"High Quality Limited Print ","description":"Northwest School Expressionist style","artistid":19}
  ,{"workid":595,"title":"Surf and Bird","copy":"365\/500","medium":"High Quality Limited Print ","description":"Northwest School Expressionist style","artistid":19}
  ,{"workid":596,"title":"Surf and Bird","copy":"366\/500","medium":"High Quality Limited Print ","description":"Northwest School Expressionist style","artistid":19}
  ];


deleteCollections().then(()=>{
  addCollections().then(()=>{
    console.log("Importacion terminada")
  });
})

function deleteCollections(){
  return new Promise((resolve,reject)=>{
    Artists.deleteMany({},(err,n,deletedCount)=>{
      console.log("============BORRANDO COLECCIONES==============");
      console.log("Coleccion Artists borrada...")
      Customers.deleteMany({},(err,n,deletedCount)=>{
        console.log("Coleccion Customers borrada...")
        Trans.deleteMany({},(err,n,deletedCount)=>{
          console.log("Coleccion Trans borrada...")
          Work.deleteMany({},(err,n,deletedCount)=>{
            console.log("Coleccion Work borrada...")
            resolve();
          })
        })
      })
    })
  });
}

function addCollections(){
  console.log("============CREANDO COLECCIONES==============");
  return new Promise((resolve,reject)=>{
    Artists.insertMany(artistsDefault, ()=>{
      console.log("Coleccion Artists creada...");
      Customers.insertMany(customesrDefault, ()=>{
        console.log("Coleccion Customers creada...");
        Trans.insertMany(transDefault, ()=>{
          console.log("Coleccion Trans creada...");
          Work.insertMany(worksDefault, ()=>{
            console.log("Coleccion Works creada...");
            resolve();
          })
        })
      })
    })
  });

}

