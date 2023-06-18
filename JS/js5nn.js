




function palabra() {

    var palabra = document.getElementById("ingre_pala").value;
    var opcion = document.getElementById("op").value;

    switch (opcion) {
        case "longitud":
            var longitud = palabra.length;
            alert("La longitud de la palabra es : " + longitud);
            break;
        case "mayusculas":
            var palabraMayusculas = palabra.toUpperCase();
            alert("La  palabra en mayúsculas: " + palabraMayusculas);
            break;
        case "minusculas":
            var palabraMinusculas = palabra.toLowerCase();
            alert("LA palabra en minúsculas: " + palabraMinusculas);
            break;
        case "primerCaracter":
            var primerCaracter = palabra.charAt(0);
            alert("El Primer carácter de la palabra es : " + primerCaracter);
            break;
        default:
            alert("Ohh has ingresado algo mal :c");
            break;
    }
}
    




    function grados() {
        var temperatura = document.getElementById("inputTemperatura").value;
        var deUnidad = document.getElementById("selectDeUnidad").value;
        var aUnidad = document.getElementById("selectAUnidad").value;
    
      
    
        var resultado;
    
        if (deUnidad === "Fahrenheit") {
            if (aUnidad === "Celsius") {
                resultado = (temperatura - 32) * 5 / 9;
            } else if (aUnidad === "Kelvin") {
                resultado = (temperatura - 32) * 5 / 9 + 273.15;
            } else {
                resultado = temperatura;
            }
        }
        else if (deUnidad === "Celsius") {
            if (aUnidad === "Fahrenheit") {
                resultado = temperatura * 9 / 5 + 32;
            } else if (aUnidad === "Kelvin") {
                resultado = parseFloat(temperatura) + 273.15;
            } else {
                resultado = temperatura;
            }
        }
        else if (deUnidad === "Kelvin") {
            if (aUnidad === "Fahrenheit") {
                resultado = (temperatura - 273.15) * 9 / 5 + 32;
            } else if (aUnidad === "Celsius") {
                resultado = temperatura - 273.15;
            } else {
                resultado = temperatura;
            }
        }
        else {
            resultado = temperatura;
        }
    
        alert("Resultado: " + resultado.toFixed(2));
    }
    

      function triangulo() {
            var ladoA = parseFloat(document.getElementById("inputLadoA").value);
            var ladoB = parseFloat(document.getElementById("inputLadoB").value);
            var ladoC = parseFloat(document.getElementById("inputLadoC").value);
          
           
          
            if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
              alert("Los valores de los lados deben ser mayores que cero.");
              return;
            }
          
            if (ladoA === ladoB && ladoB === ladoC) {
              alert("El triangulo es EQUILATERO");
            } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
              alert("El triangulo es ISOSCELES.");
            } else {
              alert("El triangulo es ESCALENO.");
            }
          }
          



          function instrutores() {
            var nombre = document.getElementById("selectNombre").value;
            var apellido = document.getElementById("selectApellido").value;
            var actividad = document.getElementById("selectActividad").value;
          
            var respuestaCorrecta = "";
          
            if (
              nombre === "Narly" && apellido === "Sanchez" && actividad === "Bases de Datos"
            ) {
              respuestaCorrecta = "Narly Sanchez Bases de Datos";
            } else if (
              nombre === "Narly" && apellido === "Sanchez" &&  actividad === "javascript"
            ) {
              respuestaCorrecta = "Narly Sanchez javascript";
            } else if (
              nombre === "Erick" && apellido === "Granados" && actividad === "Java"
            ) {
              respuestaCorrecta = "Erick Granados Java";
            } else if (
              nombre === "Cristian" && apellido === "Buitrago" && actividad === "Estimacion de Proyecto"
            ) {
              respuestaCorrecta = "Cristian Buitrago Estimacion de Proyecto";
            } else if (
              nombre === "Julian" && apellido === "Aranguren" && actividad === "Investigacion"
            ) {
              respuestaCorrecta = "Julian Aranguren Investigacion";
            } else if (nombre === "Paula" && apellido === "Matamoros") {
              respuestaCorrecta = "Paula Matamoros";
            } else if (nombre === "Andrea" && apellido === "Del pilar") {
              respuestaCorrecta = "Andrea Del pilar";
            } else if (
              nombre === "Manuel" && apellido === "Garabito" && actividad === "Python"
            ) {
              respuestaCorrecta = "Manuel Garabito Python";
            } else if (
              nombre === "Yaneth" && apellido === "Castillo" && actividad === "Proteccion Ambiental"
            ) {
              respuestaCorrecta = "Yaneth Castillo Proteccion Ambiental";
            }
          
            if (nombre === "" || apellido === "" || actividad === "") {
              alert("Algo esta mal intentalo de nuevo");
              return;
            }
          
            var respuestaUsuario = nombre + " " + apellido + " " + actividad;
          
            if (respuestaCorrecta !== "" && respuestaUsuario === respuestaCorrecta) {
              alert("La respuesta es correcta");
            } else {
              alert("La respuesta es incorrecta");
            }
          }
          









//AREA Y PERIMETRO FIGURAS
          function mostrarModal(figura) {
            var modal = document.getElementById("myModal");
            var modalTitle = document.getElementById("modalTitle");
            var modalForm = document.getElementById("modalForm");
        
            modalForm.innerHTML = "";
        
            switch (figura) {
                case "Círculo":
                    modalTitle.textContent = "Círculo";
                    modalForm.innerHTML = `
                        <label for="radio">Radio:</label>
                        <input type="number" id="radio" required>
                    `;
                    break;
                case "Triángulo":
                    modalTitle.textContent = "Triángulo";
                    modalForm.innerHTML = `
                        <label for="base">Base:</label>
                        <input type="number" id="base" required><br>
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" required>
                    `;
                    break;
                case "Rectángulo":
                    modalTitle.textContent = "Rectángulo";
                    modalForm.innerHTML = `
                        <label for="base">Base:</label>
                        <input type="number" id="base" required><br>
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" required>
                    `;
                    break;
                case "Cuadrado":
                    modalTitle.textContent = "Cuadrado";
                    modalForm.innerHTML = `
                        <label for="lado">Lado:</label>
                        <input type="number" id="lado" required>
                    `;
                    break;
            }
        
            modal.style.display = "block";
        }
        
        function cerrarModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
        
        function calcular() {
            var figura = document.getElementById("modalTitle").textContent;
            var inputs = document.getElementById("modalForm").querySelectorAll("input");
            var valores = Array.from(inputs).map(input => Number(input.value));
        
            var resultado;
            switch (figura) {
                case "Círculo":
                    var radio = valores[0];
                    resultado = "El área del círculo es: " + (Math.PI * radio * radio).toFixed(2);
                    break;
                case "Triángulo":
                    var base = valores[0];
                    var altura = valores[1];
                    resultado = "El área del triángulo es: " + (0.5 * base * altura).toFixed(2);
                    break;
                case "Rectángulo":
                    var base = valores[0];
                    var altura = valores[1];
                    resultado = "El área del rectángulo es: " + (base * altura).toFixed(2);
                    break;
                case "Cuadrado":
                    var lado = valores[0];
                    resultado = "El perímetro del cuadrado es: " + (4 * lado).toFixed(2);
                    break;
            }
        
            alert(resultado);
        }
        



        


        function myform() {
            var tipoDocumento = document.getElementById("tipoDocumento").value;
            var numDocumento = document.getElementById("numDocumento").value;
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var fechaNacimiento = document.getElementById("fechaNacimiento").value;
            var correoElectronico = document.getElementById("correoElectronico").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;
            var aceptarTerminos = document.getElementById("aceptarTerminos").checked;
        
            if (tipoDocumento === "" || numDocumento === "" || nombre === "" || apellido === "" || fechaNacimiento === "" || correoElectronico === "" || password === "" || confirmPassword === "" || !aceptarTerminos) {
                alert("Por favor, complete todos los campos del formulario.");
                return false;
            }
        
            if (!/^[0-9]{5,}$/.test(numDocumento)) {
                alert("El número de documento debe contener al menos 5 dígitos numéricos.");
                return false;
            }
        
            if (!/^[A-Za-z0-9]+$/.test(nombre) || !/^[A-Za-z0-9]+$/.test(apellido)) {
                alert("Los campos Nombre y Apellido solo deben contener caracteres alfanuméricos.");
                return false;
            }
        
            var fechaActual = new Date();
            var fechaLimite = new Date("2002-01-01");
            if (new Date(fechaNacimiento) >= fechaLimite) {
                alert("Debe ser mayor de 18 años para registrarse.");
                return false;
            }
        
            if (!/.+@misena\.edu\.co/.test(correoElectronico)) {
                alert("El correo electrónico debe ser del dominio @misena.edu.co.");
                return false;
            }
        
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(password)) {
                alert("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y tener una longitud mínima de 10 caracteres.");
                return false;
            }
        
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden.");
                return false;
            }
        
            return true;
        }
        
        function mostrarModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        }
        
        function cerrarModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
        