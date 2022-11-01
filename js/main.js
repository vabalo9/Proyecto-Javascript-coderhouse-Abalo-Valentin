alert("Bienvenido a Rebomba lencería e indumentaría")
  alert("Podemos ofrecerte tanto boxer, como conjuntos, remeras o medias.")
  let valor = ""

do {
 valor = prompt("Ingresa la palabra boxers, para saber el precio de los boxers. La palabra conjuntos para saber el precio de los conjuntos. palabra remeras, para saber el precio de las remeras o la palabra medias para saber el precio de las medias. Si desea salir por favor escriba la palabra salir ").toLowerCase()
 console.log(valor) 
  if (valor.toLowerCase() == "boxers") {
    alert ("EL precio de los boxer es de $1500")
      let confirmacion= prompt("Desea comprar boxers? ingrese 1 si desea comprar o 2 si no desea comprar")
      if (confirmacion == "1") {
        let cantidad = Number(prompt("que cantidad desea comprar"))
        let total =cantidad * 1500
        alert("En total serían " + cantidad + " Boxers por un precio de $" + total)
      }
  }

  else if (valor == "conjuntos") {
    alert("el precio de los conjuntos es de $3200")
      let confirme= prompt("Desea comprar conjuntos? ingrese 1 si desea comprar o 2 si no desea comprar")
      if (confirme == "1") {
        let cantidad = Number(prompt("que cantidad desea comprar"))
        let total =cantidad * 3500
        alert("En total serían " + cantidad + " Conjuntos por un precio de $" + total)
        
      }
  }

  else if (valor == "remeras") {
    alert("el precio de las remeras es de $2400")
      let confirme= prompt("Desea comprar conjuntos? ingrese 1 si desea comprar o 2 si no desea comprar")
      if (confirme == "1") {
        let cantidad = Number(prompt("que cantidad desea comprar"))
        let total =cantidad * 2400
        alert("En total serían " + cantidad + " Remeras por un precio de $" + total)
        
      }
  }

  else if (valor == "medias") {
    alert("el precio de las medias es de $900")
      let confirme= prompt("Desea comprar medias? ingrese 1 si desea comprar o 2 si no desea comprar")
      if (confirme == "1") {
        let cantidad = Number(prompt("cuantos pares desea comprar"))
        let total =cantidad * 900
        alert("En total serían " + cantidad + " Remeras por un precio de $" + total)
        
      }
  }
  else if (valor == "salir") {

  }
  else {
    alert("Lo sentimos el producto que ingreso no se encuentra dentro de nuestro stock en este momento")
  }


} while (valor != "salir")
