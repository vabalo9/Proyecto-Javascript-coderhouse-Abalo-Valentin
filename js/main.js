alert("Bienvenido a Rebomba lencería e indumentaría")
  let valor = ""
  

  let productos = [
    {  id: 1, articulo: "conjuntos", modelo:"Conjunto  Andressa 1218", precio: 1600 },
    {  id: 2, articulo: "conjuntos", modelo:"Conjunto  Andressa 1221", precio: 1100 },
    {  id: 3, articulo: "boxers", modelo:"BOXER DUFOUR ALGODON RAYADO SIN COSTURA - ART. 11881", precio: 1600 },
    {  id: 4, articulo: "boxers", modelo:"BOXER DUFOUR ALGODON BATIK SIN COSTURA - ART. 11831", precio: 1900 },
    {  id: 5, articulo: "medias", modelo:"MEDIA CORTA LISA ALGODON- ART. 3327", precio: 900 },
    {  id: 6, articulo: "medias", modelo:"MEDIA 3/4 CON LYCRA ELEGANCE - ART. 2098", precio: 1150 },
    {  id: 7, articulo: "camisetas", modelo:"CAMISETA FRISADA ULTRA-TERMICA - ART. 11795", precio: 850 },
    {  id: 8, articulo: "camisetas", modelo:"CAMISETA PIJAMA - ART. 11797", precio: 2000 },
    ]
    
    function filter(lista, comparador){
      let respuesta = lista.filter(producto => producto.articulo === comparador)
      return respuesta
    }
    function find(lista, comparador){
      let compra = lista.find(producto => producto.id === comparador)
      let final= ""
      final = "Usded compro el articulo " + compra.modelo + "\n Por un total de: $ " + compra.precio 
      return final
    }
    function despedida(mensaje){
      alert(mensaje)
       alert("Gracias por su compra")
       valor = "salir"
    }

    function menu() {
    
do {
    valor = prompt("Ingrese el tipo de articulo que desea comprar:\nboxers\nconjuntos\ncamisetas\nmedias\n Para terminar  ingrese la palabra salir ").toLowerCase()
     if (valor == "boxers" || valor == "medias" || valor == "camisetas" || valor == "conjuntos" ) {
        
        
        let salida = ""
       for (const producto of filter(productos,valor)) { 
        salida = salida + producto.modelo + "\n Precio: $ " + producto.precio + "\npara comprarlo a continuación presione " + producto.id + "\n\n"
       }
       let articuloFinal = parseFloat(prompt("Articulos encontrados:\n" + salida))
       
       
       despedida(find(productos ,articuloFinal));
      
        
     }
     else if (valor == "salir") {
      alert("Gracias por su visita")
   
     }
     else {
       alert("Lo sentimos el producto que ingreso no se encuentra dentro de nuestro stock en este momento")
     }
   
   
   } while (valor != "salir")
  }

  menu();