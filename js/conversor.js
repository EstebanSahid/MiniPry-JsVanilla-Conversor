/*
Tres desafios, Criptomonedas, el nombre de la persona que hace la conversion
y uno de temperatura, se hará en un solo DOM con un menú para que el 
usuario pueda seleccionar que desea cargar.
*/

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("AsignarUsu").addEventListener("click", function() {
        var ususario = document.getElementById("txtUsuario").value;

        var contenedorUsuario = document.getElementById("content-usuario");
        var contenedorMenu = document.getElementById("content-menu");

        contenedorMenu.classList.remove("oculto");
        contenedorUsuario.classList.add("oculto");

        var nombre_usu = document.getElementById("name_ususario");
        nombre_usu.textContent = "Bienvenido " + ususario;

        var convertidorMonedas = document.getElementById("menu_monedas");
        var convertidorCriptos = document.getElementById("menu_cripto");
        var convertidorTemperatura = document.getElementById("menu_temperatura");

        var contenedorMonedas = document.getElementById("content-monedas");
        var contenedorCripto = document.getElementById("content-cripto");
        var contenedorTemperatura = document.getElementById("content-temperatura");

        convertidorMonedas.addEventListener("click", function() {
            contenedorMonedas.classList.remove("oculto");
            contenedorCripto.classList.add("oculto");
            contenedorTemperatura.classList.add("oculto");

            document.getElementById("conversorBoton").addEventListener("click", function() {
                var dolar = parseFloat(document.getElementById("dolarInput").value);

                if(isNaN(dolar)){
                    alert("Ingresa un número");
                }else{
                    var pesoColombiano = 4216.95;
        
                    var conversor = dolar * pesoColombiano;
            
                    var resultado = document.getElementById("resultadoConversor");
                    resultado.textContent = dolar + " a Pesos es " + conversor.toFixed(2);
                }
                
            })
        });

        convertidorCriptos.addEventListener("click", function() {
            contenedorMonedas.classList.add("oculto");
            contenedorCripto.classList.remove("oculto");
            contenedorTemperatura.classList.add("oculto");

            document.getElementById("conversorBoton1").addEventListener("click", function() {
                var dolar = parseFloat(document.getElementById("dolarInput1").value);

                if(isNaN(dolar)){
                    alert("Ingrese un número");
                }else{
                    var cripto = 29997.86;
                    var conversor = dolar * cripto;
                    var resultado = document.getElementById("resultadoConversor");
                    resultado.textContent = dolar + " Criptomonedas equivale a $" + conversor.toFixed(2);
                }
                
            })
        })

        convertidorTemperatura.addEventListener("click", function() {
            contenedorMonedas.classList.add("oculto");
            contenedorCripto.classList.add("oculto");
            contenedorTemperatura.classList.remove("oculto"); 
            
            //document.getElementById("conversorBoton2").addEventListener("click", function() {
            document.getElementById("unidadSelect").addEventListener("change", function() {
                var temperatura = parseFloat(document.getElementById("temperaturaInput").value);
                var unidad = document.getElementById("unidadSelect").value;
                var resultado = document.getElementById("resultadoConversor");

                if(isNaN(temperatura)){
                    alert("Ingrese un valor")
                }else{
                    if (unidad === "cel") {
                        resultado.textContent = temperatura + " °C es igual a " + ((temperatura * 9/5) + 32).toFixed(2) + " °F y " + (temperatura + 273.15).toFixed(2) + " K.";
                    } else if (unidad === "far") {
                        resultado.textContent = temperatura + " °F es igual a " + ((temperatura - 32) * 5/9).toFixed(2) + " °C y " + (((temperatura - 32) * 5/9) + 273.15).toFixed(2) + " K.";
                    } else if (unidad === "kel") {
                        resultado.textContent = temperatura + " K es igual a " + (temperatura - 273.15).toFixed(2) + " °C y " + ((temperatura - 273.15) * 9/5 + 32).toFixed(2) + " °F.";
                    }
                }
            })
        })
    })
})