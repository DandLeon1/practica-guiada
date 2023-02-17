'use restrict';

import {checkAvg } from './validate.js';
const cardE = document.getElementById('cardsEstudiantes');
const students = [];
const cardP = document.getElementById('cardseProfesores');
const profesor = [];

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
        cloneTemp.querySelector('.data-card').innerHTML = `nombre: ${i.nom.toUpperCase()} apellidos: ${i.ape.toUpperCase()}`;
        cloneTemp.querySelector('.text-promedio').innerHTML = `promedio es: ${i.prom}`;
        cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
        fragment.appendChild(cloneTemp)
       } 
    }else{
        //pintar a profesor
        if(tipo==='PROFESOR'){
            for(let i of profesor ){
                const cloneTemp = templateProfesor.cloneNode(true);
                cloneTemp.querySelector('.titleCard').innerHTML= "datos del profesor ";
                cloneTemp.querySelector('.nombreApellido').innerHTML = `nombre: ${i.nom.toUpperCase()} apellidos: ${i.ape.toUpperCase()}`;
                cloneTemp.querySelector('.profecion').innerHTML = `profesion es: ${i.prom}`;
                
            }


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
    modalAlert('se agrego estudiante');
};

const addProfesor =(nombreApellido, profecion ) => {
    let profesor ={
        nomapp: nombreApellido,
        prof: profecion
    }
    profesor.push(profesor);
    modalAlert('se agrego profesor');
}

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

export{paintCard,addStudent,addProfesor, modalAlert }