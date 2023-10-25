const mongoose = require ('mongoose');


mongoose.connect('mongodb+srv://<Username>:<Password>@cluster0.oahxtpe.mongodb.net/<dbName?retryWrites=true&w=majority&appName=AtlasApp')
    .then(db => console.log('Mongodb atlas connected')) //Si fue exitoso
    .catch(err => console.error(err));
