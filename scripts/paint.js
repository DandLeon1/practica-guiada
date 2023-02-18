'use restrict';

import {checkAvg } from './validate.js';
const cardE = document.getElementById('cardsEstudiantes');
const students = [];
const cardP = document.getElementById('cardseProfesores');
const profes =[];

const paintCard = (tipo) =>{
    console.log(tipo);
    tipo = tipo.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templateEstudiante').content;
    const templateProfesor = document.querySelector('#templateProfesor').content;

    if (tipo=== 'ESTUDIANTE'){
       for(let i of students){
        const cloneTemp = templateStudent.cloneNode(true);
        cloneTemp.querySelector('.title-card').innerHTML= "datos del estudiante";
        cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
        cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES : ${i.prom}`;
        cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
        fragment.appendChild(cloneTemp)
       } 
    }else if (tipo==='PROFESOR'){
        for(let i of profes){
            const cloneTemp = templateProfesor.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML= "datos del profesor";
            cloneTemp.querySelector('.data-card').innerHTML = `MOMBRE Y APELLIDO: ${i.nomYap.toUpperCase()} PROFESION ${i.frof.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `LOS AÑOS SON: ${i.años}`;
            fragment.appendChild(cloneTemp)
        }
    }
        
    
    cardE.appendChild(fragment);
    cardP.appendChild(fragment);
}
const addStudent = (name,lastName, avg)=>{
    // objeto literal de js
    let student = {
        nom : name,
        ape: lastName,
        prom : avg
    }
    students.push(student);
};
const addTeacher = (name,lastname,avg)=>{
    let teacher={
        nomYap: name,
        frof: lastname,
        años: avg
    }
    profes.push(teacher);
   

};

const modalAlert = (cad) => {
    const alerta =document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src='./img/cruz.png';
    img.className="close";
    texto.setAttribute("class", "textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML= `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick= function(){
        document.getElementById("alerta").remove();
    }
    

}

export{paintCard,addStudent,addTeacher, modalAlert }