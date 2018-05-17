const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require(`./multiplicar/multiplicar`);

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.crear, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log("no se reconoce el comando ".red);
        break;
}

//console.log(argv);



//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];