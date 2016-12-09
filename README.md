# TP-Funciones
TP para evaluar funciones de la camada camada1697js | CoderHouse

#TP 2: Funciones

##Crear funciones que:

- Validen que el nombre de la persona no sea vacio
- Validen que el apellido no este vacio
- validen que el numero de telefono sea mayor a 5 digitos y menor a 9 /// no limitarlo con HTML
- validen que sea mayor de edad
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



##Nivel de dificultad 5 (si lo haces, ya eres casi un ninja en javascript)

- Validar con una expresión regular que el correo sea valido (si lo haces, lo explicas)

- Utilizar una funcion unica para validar campos vacios

- Concatenar en la identificacion el correo electronico hasta el "@".
    Ejemplo:
        
        nombre: Gabriel
        apellido: Quintero
        Edad: 25
        correo:gabrielalejandroqd@gmail.com
        
        Identificacion: GabrielQuinteroGRUP1gabrielalejandroqd
        
#PISTAS:

- como no podemos tener mas de 1 ID en nuestro documento, podemos ejecutar una accion en varios elementos con la misma clase con
      document.getElementsByClassName("example");   esto puede servir para borrar todos los errores ;)

- Para probar las expresiones regulares usamos   .test() 

          var re = /ab+c/;
          re.test("The best things in life are free") 
          // devuelve verdadero si el string cumple con los parametros de la expresiones
      
- todas las funciones debes llamarlas en la funcion validar()  
      

#NOTAS ADICIONALES:

- COMENTA EL CÓDIGO.
- BUEN INDENTADO
- NO CREES VARIABLES GLOBALES INNECESARIAS 

Buena Suerte :)

Gabo!
