const fs = require('node:fs');
const colors = require('colors');

const creaArchivo = (base, listar, hasta)=>{
    if (listar){
        
        console.log('================'.blue);
        console.log(`  ${'TABLA DEL'.bgYellow}`, colors.bgGreen(base) );
        console.log('================'.blue);
    }

    let salida='';
    let consola='';


    for(let i =1; i<=hasta; i++){
        salida= salida + `${base} x ${i} = ${base*i}\n`
        consola= consola + `${base} ${'x'.red} ${i} ${'='.red} ${base*i}\n`

    }
    if (listar){
        console.log(consola);
    }
    
    
   /*  fs.writeFile(`tabla del ${base}`, salida, (err)=>{
        if (err) throw err;
        console.log(`tabla del ${base} creada`)
    }) */

    fs.writeFileSync(`./salida/tablaSync del ${base}.txt`, salida);

    return new Promise((resolve, reject)=>{
        if (salida){
            resolve(`tablaSync del ${base}`)
        }else{
            reject('No se pudo crear la tabla de la base indicada')
        }
    })
    ;
    //console.log(`tablaSync del ${base} creada`)
}



//Exportacion de modulo
module.exports = {creaArchivo};
