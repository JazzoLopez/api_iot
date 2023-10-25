const app = require ('./app'); //* Aqui se pone a escuchar
require('./database'); //* Instrucciones para la conexión

app.listen(app.get('PORT'), () => {  //* Escuchador
    console.log(`Server on port 3000`);
});