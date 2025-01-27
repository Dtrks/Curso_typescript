"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaService = void 0;
const tarea_1 = require("../models/tarea");
const estados_1 = require("../models/estados");
var TareaService;
(function (TareaService) {
    const tareas = [];
    function agregarTarea(titulo, descripcion) {
        const tarea = new tarea_1.Tarea(titulo, descripcion);
        tareas.push(tarea);
    }
    TareaService.agregarTarea = agregarTarea;
    function obtenerTareas() {
        return tareas;
    }
    TareaService.obtenerTareas = obtenerTareas;
    function filtrarTareasPorEstado(estado) {
        return tareas.filter(tarea => tarea.estado === estado);
    }
    TareaService.filtrarTareasPorEstado = filtrarTareasPorEstado;
    function cambiarEstado(titulo, nuevoEstado) {
        const tarea = tareas.find(t => t.titulo === titulo);
        if (tarea) {
            tarea.estado = nuevoEstado;
        }
        else {
            console.log(`Tarea con titulo "${titulo}" no encontrada`);
        }
    }
    TareaService.cambiarEstado = cambiarEstado;
    function eliminarTareasCompletadas() {
        tareas.forEach((tarea, index) => {
            if (tarea.estado === estados_1.EstadoTarea.Completada) {
                tareas.splice(index, 1);
            }
        });
    }
    TareaService.eliminarTareasCompletadas = eliminarTareasCompletadas;
})(TareaService || (exports.TareaService = TareaService = {}));
//# sourceMappingURL=tareaServices.js.map