const Todohistoric = require('../models/Todohistoric.schema');
const indexController = require('./indexes');

const historicController = {
    logMovements(todo,type,description){
        return new Promise((resolve,reject)=>{
            indexController.getActualIndex(1)
            .then((actualIndex) => {
                let newTodoHistoric = {}
                newTodoHistoric._id = actualIndex.current_id;
                newTodoHistoric.type = type;
                switch(type){
                    case 0:
                        newTodoHistoric.description = 'Todo #'+todo._id+' successfully added ';
                        break;
                    case 1:
                        newTodoHistoric.description = description;
                        break;
                    case 2:
                        newTodoHistoric.description = 'Todo #'+todo._id+' successfully deleted ';
                        break;
                }
                newTodoHistoric.createdAt = new Date();
                var todoHistoric = new Todohistoric(newTodoHistoric);
                todoHistoric.save()
                .then(todo => {
                    resolve(newTodoHistoric.description);
                })
                .catch(err => {
                    //console.log(err);
                    reject("Error guardando registro");
                });
            });
        });
    },
    getHistoric(numPage,type){
        return new Promise((resolve,reject)=>{
            if(type == 20){
                Todohistoric.paginate({}, { page: numPage, limit: 10 }, (err, result) => {
                    if(err) { reject(err) };
                    resolve(result);
                });
            }
            
        });
    }
};

module.exports = historicController;