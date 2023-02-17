'use restrict';
import { validateString, vAvg, checkAvg} from './validate.js';
import {paintCard,addStudent, modalAlert, addProfesor} from './paint.js';

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');

/*generar eventos 
    1. Colocando el metodo (evento) en el atributo onclick,
    onmouseover, onmouseout de la etiqueta
    2.mediante propiedad
    3.Mediante el addevenListener
*/
btnAgregar.onclick = function(){
    // console.log('evento mediante propiedad');
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;

    //console.log<(`${name} ${lastname} ${avg} ${op}`);

    if (validateString(name) && validateString (lastName) && op != 0){
        if ((!isNaN(avg)) && (vAvg(avg))){
            addStudent(name,lastName,avg)
        }else{
            document.querySelector('#promedio').value="";
            modalAlert("promedio inválido");
        }

    }else{
        modalAlert("datos invalidos, revisar los datos");
    }
    formulario.reset()
}
btnMostrar.addEventListener("click", function () {
    paintCard("ESTUDIANTE");    
})

//primera tarea agregar el modal
//borrar campos
//crear el cad para profesor opcional el de egresados
