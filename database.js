const mongoose = require ('mongoose');


mongoose.connect('mongodb+srv://JazzoLopez:rVZ29T6UqNBDrCHv@cluster0.oahxtpe.mongodb.net/iotdb?retryWrites=true&w=majority&appName=AtlasApp')
    .then(db => console.log('Mongodb atlas connected')) //Si fue exitoso
    .catch(err => console.error(err));