const Index = require('../models/Index.schema');

const indexesController = {
    //funcion para incrementar las llaves de los id de los todo
    getActualIndex(opc){
        return new Promise( (resolve ,reject ) =>{
            let searchIndexName = '';
            switch(opc){
                case 0:
                    searchIndexName = 'artist_index';
                    break;
                case 1:
                    searchIndexName = 'customer_index';
                    break;
            }
            Index.findOne({ name : searchIndexName} , (err, doc)=>{
                if(doc != null){
                    //Si ya existe la llave la actualizamos y guardamos
                    doc.current_id++;
                    doc.save(()=>{
                        let result = { current_id : Number,name: String };
                        result = doc;
                        resolve(result);
                    });
                }else{
                    //Si no existe nuestra llave la creamos
                    //current_id debe de ser el que realmente esta en la coleccion 
                    //te recomiendo sacar el id mas alto de cada coleccion y lo pones aqui
                    var newIndex = new Index({ current_id : 0,name: searchIndexName});
                    newIndex.save().then(
                        (newIndex)=>{ resolve(newIndex) }
                    );
                }
            });
        });
    },
};

module.exports = indexesController;