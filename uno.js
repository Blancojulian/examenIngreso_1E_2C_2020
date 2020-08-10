/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let vNombre;
	let vPeso;
	let vSexo;
	let vEdad;
	let i;
	let vCantidadMujeres=0;
	let vAcumEdad=0;
	let vCantPersonas=0;
	let vPesoMaxHombre;
	let vNombreHombrePesado;
	let flagHombre=0;
	let vPromedioEdad;





	for(i=1;i<=5;i++){

		vNombre = prompt("Ingrese nombre");

		do{
		vPeso = parseInt(prompt("Ingrese peso, maximo 300 kilos"));
	}while(!(vPeso>=1&&vPeso<=300)||isNaN(vPeso));
		
		do{
		vSexo = prompt("Ingrese sexo: F/M").toUpperCase();
		}while(vSexo!="F"&&vSexo!="M");

		do{
		vEdad = parseInt(prompt("Ingrese edad entre 1 y 115"));
		}while(!(vEdad>=1&&vEdad<=115)||isNaN(vEdad));


		if (vSexo=="F") {
			vCantidadMujeres++			
		}

		if (vSexo=="M"&&(flagHombre==0||vPeso>vPesoMaxHombre)) {

			vNombreHombrePesado=vNombre
			vPesoMaxHombre=vPeso

			flagHombre++
			
		}

		vAcumEdad+=vEdad

		vCantPersonas++



	}
		vPromedioEdad=vAcumEdad/vCantPersonas

		if(vCantidadMujeres==0)
	{
		document.write("No se ingresaron mujeres <br>")
	}
	else{
		document.write("La cantidad de mujeres es "+vCantidadMujeres+"<br>")

	}

	document.write("La edad promedio en total es "+vPromedioEdad+"<br>")

	if(flagHombre==0)
	{
		document.write("No se ingresaron hombre <br>")
	}
	else{
		document.write("El hombre mas pesado es "+vNombreHombrePesado+"<br>")
	}
	
	document.write("let i"+i+"<br>")



	
	


}
