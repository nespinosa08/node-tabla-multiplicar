const { creaArchivo } = require("./helpers/mulltiplicar");
const argv = require('./config/yargs');
const colors = require('colors');



console.clear();
//console.log(process.argv);
//console.log(argv);


//const base = 17;

creaArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creada'))
    .catch( err => console.log(err))

//console.clear();
