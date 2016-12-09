/*

TP 2: Funciones

Crear funciones que:

- Validen que el nombre de la persona no sea vacio
- Validen que el apellido no este vacio
- validen que el numero de telefono sea mayor a 5 digitos y menos a 9 -- no limitarlo con HTML
- validenque sea mayor de edad
- Validen que el Mail no este vacio
- cada vez que se presione enviar, debe borrar todos los campos

- Generar una funcion que genere la identificacion: 
  
    -esta funcion deberá recibir 3 parametros (nombre, apellido, esMayor)
    -Debera concatenar el nombre con el apellido
    -Si esta entre 20 y 35 años concatenar la palabra "GRUP1" si esta entre 36 y 55 "GRUP2" y si es mayor de 55 "GRUP3"
    
    Ejemplo:
    
    nombre: Gabriel
    apellido: Quintero
    Edad: 25
    
    Identificacion: GabrielQuinteroGRUP1
    
    el campo identificacion debe aparecer en el ultimo input del formulario de id=identificacion

- todos los campos se deben registrar en consola, es decir que al presionar enviar, todos los campos deben estar escritos en la consola.



**** Nivel de dificultad 5 (si lo haces, ya eres casi un ninja en javascript)********

- Validar con una expresión regular que el correo sea valido (si lo haces, lo explicas)

- Utilizar una funcion unica para validar campos vacios

- Concatenar en la identificacion el correo electronico hasta el "@".
    Ejemplo:
        
        nombre: Gabriel
        apellido: Quintero
        Edad: 25
        correo:gabrielalejandroqd@gmail.com
        
        Identificacion: GabrielQuinteroGRUP1gabrielalejandroqd
        
PISTAS:
- como no podemos tener mas de 1 ID en nuestro documento, podemos ejecutar una accion en varios elementos con la misma clase con
      document.getElementsByClassName("example");   esto puede servir para borrar todos los errores ;)

- Para probar las expresiones regulares usamos   .test() 

          var re = /ab+c/;
          re.test("The best things in life are free") // devuelve verdadero si el string cumple con los parametros de la expresiones
      
- todas las funciones debes       
      

NOTAS ADICIONALES:

- COMENTA EL CÓDIGO.
- BUEN INDENTADO
- NO CREES VARIABLES GLOBALES INNECESARIAS 

Buena Suerte :)

Gabo!

*/


var msjErrVacio = "Este campo no debe estar vacio";
var msjErrTel = "Este campo debe tener entre 5 y 9 dígitos";
var msjErrEdad = "Debes ser mayor de edad para continuar";
var msjErrEmail = "El email ingresado no es válido";
var grup1 = "GRUP1";
var grup2 = "GRUP2";
var grup3 = "GRUP3";
//funcion general que valida el formulario una vez que se presione "enviar"
function validar(){
  var ValNom = valNombre();
  var ValApe = valApellido();
  var ValTel = valTelefono();
  var ValEdad = valEdad();
  var ValEmail = valEmail();
  //borro sólo si se validó todo correctamente
  if (valNombre() && valApellido() && valTelefono() && valEdad() && valEmail()){ 
    //genero ID y luego borro
    var CreoID = genId(ValNom,ValApe,ValEdad,ValEmail);
    var borrar = document.getElementsByClassName("borrar");
    var i;
    //recorro todos los elementos cuya clase sea borrar y les cambio el valor a vacío
    for (i = 0; i < borrar.length; i++) {
        borrar[i].value = '';
    }
  }
}



function valVacio(campo){
  var vacio = document.getElementById(campo).value;
  if(vacio != ''){
    document.getElementById(campo+'Error').innerHTML = '';
    console.log(vacio);
    return vacio;
  }else{
    document.getElementById(campo+'Error').innerHTML = msjErrVacio;
    return false
  }
}



/*Funcion para validar Nombre*/
function valNombre(){
  var nombre='nombre'
  return valVacio(nombre);
  /*var nombre = document.getElementById('nombre').value;
  if(nombre != ''){
    document.getElementById('nombreError').innerHTML = '';
    console.log(nombre);
    return nombre;
  }else{
    document.getElementById('nombreError').innerHTML = msjErrVacio;
    return false
  }*/
}

function valApellido(){
  var apellido='apellido'
  return valVacio(apellido);
  /*
  var apellido = document.getElementById('apellido').value;
  //verifico que apellido no esté vacío
  if(apellido != ''){
    document.getElementById('apellidoError').innerHTML = '';
    console.log(apellido);
    return apellido;
  }else{
    document.getElementById('apellidoError').innerHTML = msjErrVacio;
    return false
  }*/

}  




function valEmail(){
  var email = 'email'
  //verifico que el email no esté vacío
  if (valVacio(email)){
  
  
    var emailb = document.getElementById('email').value;
    //ver en el comentario del final la explicación del regex
    var verificoEmail = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
    if (verificoEmail.test(emailb)){
      console.log(emailb);
    return emailb;
  }else{
    document.getElementById('emailError').innerHTML = msjErrEmail;
    return false
  }

    
  /* comento código anterior a la función única para validar campos vacíos
  var email = document.getElementById('email').value;
  //verifico que el email no esté vacío
  if(email != ''){
    document.getElementById('emailError').innerHTML = '';
    //ver en el comentario del final la explicación del regex
    var verificoEmail = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
    if (verificoEmail.test(email)){
      console.log(email);
    return email;
  }else{
    document.getElementById('emailError').innerHTML = msjErrEmail;
    return false
  }
    
  }else{
    document.getElementById('emailError').innerHTML = msjErrVacio;
    return false
  }

}*/
  }
  //return valVacio(email);
}


function valEdad(){
  var edad = document.getElementById('edad').value;
  if (!isNaN(edad) && edad >= 18){
    document.getElementById('edadError').innerHTML = '';
    console.log(edad);
    return edad;
  }else{
    document.getElementById('edadError').innerHTML = msjErrEdad;
    return false
  }

}

function valTelefono(){

  var telefono = document.getElementById('telefono').value;
  //verifico si es un número y si tiene entre 5 y 9 dígitos
  if (!isNaN(telefono) && telefono.length >= 5 && telefono.length <= 9){
    document.getElementById('telefonoError').innerHTML = '';
    console.log(telefono);
    return telefono;
  }else{
    document.getElementById('telefonoError').innerHTML = msjErrTel;
    return false
  }


}


function genId(nombre, apellido, esMayor, email){

  if (esMayor >= 20 && esMayor <= 35){
    //concateno y quito espacios en blanco \s busca espacios, g hace una búsqueda global en todo el string, uso replace para reemplazar espacios por ''
    // para obtener del email lo anterior al @ almaceno en un array el email y tomo como separador el @ y muestro el primer elemento del array
    Identificacion = nombre.replace(/\s/g,'') + apellido.replace(/\s/g,'') + grup1 + email.split('@')[0];
    document.getElementById('identificacion').value = Identificacion;
    console.log(Identificacion);
    return Identificacion;
  }
  if (esMayor >= 36 && esMayor <= 55){
    //concateno y quito espacios en blanco \s busca espacios, g hace una búsqueda global en todo el string, uso replace para reemplazar espacios por ''
    Identificacion = nombre.replace(/\s/g,'') + apellido.replace(/\s/g,'') + grup2 + email.split('@')[0];
    document.getElementById('identificacion').value = Identificacion;
    console.log(Identificacion);
  }
  if (esMayor > 55){
    //concateno y quito espacios en blanco \s busca espacios, g hace una búsqueda global en todo el string, uso replace para reemplazar espacios por ''
    Identificacion = nombre.replace(/\s/g,'') + apellido.replace(/\s/g,'') + grup3 + email.split('@')[0];
    document.getElementById('identificacion').value = Identificacion;
    console.log(Identificacion);
  }

}



/* explicación del regex 

/ = comienzo de la expresión
^ = busca en el comienzo del string 
\w = busca palabras (letras, dígitos, guión bajo)
+ = Busca el caracter precedente 1 o más veces
[] = grupo de caracteres
\+\. = busca un signo + o un . 
\w = busca palabras (letras, dígitos, guión bajo)
- = busca un -
* = busca la expresión anterior cero o infinitas veces
@ = busca un @
() = busca y recuerda la búsqueda dentro de los paréntesis
[] = grupo de caracteres
\w- = busca una palabra o un -
+ = Busca el caracter precedente 1 o más veces
\. = Busca un .
* = Busca el caracter precedente 0 (cero) o más veces
\w+ = Busca una palabra mínimo una vez
[\w-]*\. = busca una palabra o un - cero o más veces, seguido de un .
() = busca y recuerda la búsqueda dentro de los paréntesis
[a-z]{2,4} = busca letras de entre al menos dos y hasta cuatro ocurrencias de la expresión
| = operador lógico o
\d+ = busca al menos un dígito
$ = fin del string
/ = fin de la expresión
i = busca el string en caso no sensitivo o insensitive */

