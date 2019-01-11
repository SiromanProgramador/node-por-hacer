const descripcion = {
    demand: true,
    alias: 'd',
};

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea pendiente de realizar', { descripcion })
    .command('actualizar', 'Actualiza la lista de tareas pendiente de realizar', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}