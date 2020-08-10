/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {

  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta;
  let acumPeso = 0;
  let flagLiquidos = 0;
  let flagSolidos = 0;
  let precioCaroLiquido;
  let marcaCaroLiquido;
  let precioBaratoSolido;
  let marcaBaratoSolido


  do {

    marca = prompt("Ingrese una marca");

    do {
      precio = parseInt(prompt("Ingrese precio"));
    } while (isNaN(precio))


    do {
      peso = parseInt(prompt("Ingrese peso"));
    } while (isNaN(peso))

    do {
      tipo = prompt("Ingrese tipo de producto: solido/liquido")
    } while (vSexo != "solido" && vSexo != "liquido");



    acumPeso += peso;

    if (tipo == "liquido" && (precio > precioCaroLiquido || flagLiquidos == 0)) {
      precioCaroLiquido = precio
      marcaCaroLiquido = marca

    }

    if (tipo == "solido" && (precio < precioBaratoSolido || flagSolidos == 0)) {
      precioBaratoSolido = precio
      marcaBaratoSolido = marca

    }


    do {
      respuesta = prompt("¿Desea seguir ingresando producto: si/no?")
    } while (respuesta != "si" && respuesta != "no");

  } while (respuesta == "si");


  document.write("El peso total de la compra es " + acumPeso + "<br>")

  if (flagLiquidos == 0) {
    document.write("No se ingresaron productos liquidos <br>")
  }
  else {
    document.write("El producto mas caro de los liquidos es " + marcaCaroLiquido + "<br>")
  }

  if (flagSolidos == 0) {
    document.write("No se ingresaron productos solidos <br>")
  }
  else {
    document.write("El producto mas barato de los solidos es " + marcaBaratoSolido + "<br>")
  }



}
