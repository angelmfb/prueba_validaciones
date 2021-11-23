/**
    validaciones.js
    script para validar un formulario
    @author angel correo
    @license GPL v3 2021
**/

'use strict'

window.onload = iniciar 

function iniciar(){
    console.log("estoy validando");
    
    let select = document.getElementById('sCurso')
    select.onchange=cargarClase

    var numero1 = document.getElementById('iCalculo1');
    var numero2 = document.getElementById('iCalculo2');
    var numero3 = document.getElementById('iCalculo3');
    numero1.onchange=media
    numero2.onchange=media
    numero3.onchange=media

    let boton=document.getElementById('btnCero')
    boton.onclick=aCero

    let botonenviar=document.getElementById('enviar')
    botonenviar.onclick=enviar

}
/*Creamos el otro select punto 2 */
function cargarClase(){
    let clase = document.createElement('select')
    if(document.getElementById('sCurso').value == "1DAW"){
        clase.id='asignaturaprimero'
    }
    if(document.getElementById('sCurso').value == "2DAW"){
        clase.id='asignaturasegundo'
    }
    
    
    let div=document.getElementsByClassName('select')[0]
    div.appendChild(select)
    
    let asignaturaprimero=["PROG", "BD", "ENTORNO", "SISTEMAS", "LM"]
    let asignaturasegundo=["DIW", "DWEC", "DWES"]

    if(document.getElementById('sCurso').value=="1DAW"){
        for(let anho in asignaturaprimero){
            let clase=document.createElement('option')
            clase.text=asignaturaprimero[anho]
            select.appendChild(clase)
        }
    }else{
        if(document.getElementById('asignaturaprimero')){
            document.getElementById('asignaturaprimero').remove()
        }
    }
    if(document.getElementById('sCurso').value=="2DAW"){
        for(let anho in asignaturasegundo){
            let clase=document.createElement('option')
            clase.text=asignaturasegundo[anho]
            select.appendChild(clase)
        }
    }else{
        if(document.getElementById('asignaturasegundo')){
            document.getElementById('asignaturasegundo').remove()
        }
    }
}
/*Se hace la media punto 3 */
function media(){
    let numero1=document.getElementById('iCalculo1')
    let numero2=document.getElementById('iCalculo2')
    let numero3=document.getElementById('iCalculo3')
    
    let suma=parseInt(numero1.value)+parseInt(numero2.value)+parseInt(numero3.value)
    let media=suma/3

    let spanMedia=document.getElementById('spanMedia')
    spanMedia.innerHTML=media.toFixed(2)
}
/*Se envia punto 3 */
function enviar(){
    let numero1=document.getElementById('iCalculo1')
    let numero2=document.getElementById('iCalculo2')
    let numero3=document.getElementById('iCalculo3')
    
    let suma=parseInt(input1.value)+parseInt(input2.value)+parseInt(input3.value)
    
    if(suma>=10 && suma<=20){
        console.log('echo')
    }
}
/*mostramos y a 0 punto 3 */
function aCero(){
    let numero1=document.getElementById('iCalculo1')
    let numero2=document.getElementById('iCalculo2')
    let numero3=document.getElementById('iCalculo3')
    numero1.value=0
    numero2.value=0
    numero3.value=0

    let spanMedia=document.getElementById('spanMedia')
    spanMedia.innerHTML=0//limpiamos campos
}
