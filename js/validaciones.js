/**
    validaciones.js
    script para validar un formulario
    @author angel correo
    @license GPL v3 2021
**/

'use strict'

window.onload = iniciar 

function iniciar(){
    let formulario = document.forms[0]
    formulario.onsubmit = validar
}

function validar(evento){
    console.log("estoy validando");
    
    var selectPrincipal = document.getElementById('sCurso');
    var selectSecundario = document.getElementById('secundario');

    var numero1 = document.getElementById('iCalculo1');
    var numero2 = document.getElementById('iCalculo2');
    var numero3 = document.getElementById('iCalculo3');
    var media = document.getElementById('spanMedia');
    var resultado = 0

    /*punto 2 crear el otro select */
    function cargarClase() {
        var listaAsignaturas = {
        DAW1: ["PROG", "BD", "ENTORNO", "SISTEMAS", "LM"],
        DAW2: ["DIW", "DWEC", "DWES"]
        } 
        if(selectPrincipal.value == "1DAW") {
            let opcion = document.createElement('option')
            opcion.value = DAW1
            opcion.text = DAW1
            DAW1.add(opcion)
        }else if (selectPrincipal.value == "2DAW") {
            let opcion = document.createElement('option')
            opcion.value = DAW2
            opcion.text = DAW2
            DAW2.add(opcion)
        }
    }

    /*Punto 3 calcular media*/
    if (numero1 >= 0 && numero1 <= 10 && numero2 >= 0 && numero2 <= 10 && numero3 >= 0 && numero3 <= 10) {
        resultado=(numero1+numero2+numero3)/3
        return resultado
    }
}