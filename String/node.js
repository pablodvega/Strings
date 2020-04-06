const theterror="En el año 1847 un equipo de expedición de la Marina Real británica es enviado al Ártico. en busca del Paso del Noroeste. Pero una vez allí es atacado por un misterioso depredador que acecha a los barcos y a sus tripulaciones en un juego desesperado de incertidumbre y supervivencia."
console.log(theterror.indexOf("En el año 1847 un equipo de expedición de la Marina Real británica es enviado al Ártico. en busca del Paso del Noroeste. Pero una vez allí es atacado por un misterioso depredador que acecha a los barcos y a sus tripulaciones en un juego desesperado de incertidumbre y supervivencia.") > -1);
console.log(theterror.length >10);
console.log(theterror.length %2==0);
console.log(theterror.slice(0,4));
console.log(theterror.slice(281));
console.log(theterror.lastIndexOf(282));
console.log(theterror.charAt(140));
console.log(theterror.indexOf("?"));
console.log(theterror.replace("dad","tud"));
console.log(theterror.indexOf(" "));

let numero = theterror


  if(numero % 2 == 0) {
    console.log("par");
  }
  else {
    console.log("impar");
  }



 
  let resultado = theterror
 
  // Comprobar mayúsculas y minúsculas

  if(resultado == theterror.toUpperCase()) {
    console.log("está formada sólo por mayúsculas");
  }
  else if(resultado == theterror.toLowerCase()) {
    console.log("está formada sólo por minúsculas");
  }
  else {
    console.log("está formada por mayúsculas y minúsculas");
  }
 
  
