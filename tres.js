/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexoTitular;
	let lugar;
	let temporada;
	let cantidadPasajeros;
	let respuesta;
	let acumuladorBariloche;
	let acumuladorSalta;
	let acumuladorCataratas;
	let lugarMasElegido;
	let sexoTitularConMasPasajeros;
	let cantidadTitularConMasPasajeros;
	let banderaTitularConMasPasajeros;
	let acumuladorPasajerosInvierno;
	let contadorInvierno;
	let promedioPasajerosEnInvierno; 

	respuesta = true;
	acumuladorBariloche = 0;
	acumuladorSalta = 0;
	acumuladorCataratas = 0;
	banderaTitularConMasPasajeros = 0;
	acumuladorPasajerosInvierno = 0;
	contadorInvierno = 0;
	cantidadTitularConMasPasajeros = 0;

	while (respuesta == true)
	{
		sexoTitular = prompt("Ingrese el sexo del titular. Opciones: femenino o masculino.");
		
		while (sexoTitular != "femenino" && sexoTitular != "masculino")
        {
            sexoTitular = prompt("ERROR! Reingrese el sexo del titular. Opciones: femenino o masculino.");
		}
		
		lugar = prompt("Ingrese el lugar a donde se viajará. Opciones: bariloche, cataratas o salta.");

		while (lugar != "salta" && lugar != "bariloche" && lugar != "cataratas")
        {
            lugar = prompt("ERROR! Reingrese el lugar a donde se viajará. Opciones: bariloche, cataratas o salta.");
        }

		temporada = prompt("ingrese la temporada en la cual se viajará. Opciones: invierno, verano, otoño o primavera.");

		while (temporada != "invierno" && temporada != "otoño" && temporada != "verano" && temporada != "primavera")
        {
            temporada = prompt("ERROR! Reingrese la temporada en la cual se viajará. Opciones: invierno, verano, otoño o primavera.");
        } 

		cantidadPasajeros = prompt("Ingrese la cantidad de pasajeros que viajarán.");
		cantidadPasajeros = parseInt(cantidadPasajeros);

		while (cantidadPasajeros<0 || isNaN(cantidadPasajeros))
        {
            cantidadPasajeros = prompt("ERROR! Reingrese la cantidad de pasajeros que viajarán.");
            cantidadPasajeros = parseInt(cantidadPasajeros);
		} 

		switch (lugar) 
        {
            case "bariloche":
                acumuladorBariloche += cantidadPasajeros;
                break;
            case "cataratas":
                acumuladorCataratas += cantidadPasajeros;
                break;
            case "salta":
                acumuladorSalta += cantidadPasajeros;
                break;
		}

		if (banderaTitularConMasPasajeros == 0 || cantidadPasajeros>cantidadTitularConMasPasajeros) 
		{
			cantidadTitularConMasPasajeros = cantidadPasajeros;
			sexoTitularConMasPasajeros = sexoTitular;
			banderaTitularConMasPasajeros = 1;
		}

		if (temporada == "invierno") 
		{
			acumuladorPasajerosInvierno += cantidadPasajeros;
			contadorInvierno++;
		}

		respuesta = confirm("¿Desea ingresar otra estadía?");
	}

	// Punta A
    if (acumuladorBariloche>acumuladorCataratas && acumuladorBariloche>acumuladorSalta) 
    {
        lugarMasElegido = "Bariloche";
    } 
    else
    {
        if (acumuladorSalta>acumuladorCataratas) 
        {
            lugarMasElegido = "Salta";
        }  
        else
        {
            lugarMasElegido = "Cataratas";
        }
	}

	// Punto C
	promedioPasajerosEnInvierno = acumuladorPasajerosInvierno / contadorInvierno;
	
	document.write("<h2>El lugar mas elegido por la gente es: "+lugarMasElegido+"</h2><br>");
	document.write("<h2>El sexo del titular que lleva mas gente es: "+sexoTitularConMasPasajeros+"</h2><br>");

	if (contadorInvierno>0) 
    {
        document.write("<h2>El promedio de gente que viaja en invierno es: "+promedioPasajerosEnInvierno+"</h2><br>");    
    }
    else
    {
        document.write("<h2>No viajó gente en invierno.</h2><br>");
    }

}