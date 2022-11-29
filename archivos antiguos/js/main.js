  let productos = [
     "Conjunto  Andressa 1218", "Conjunto  Andressa 1221","BOXER DUFOUR ALGODON RAYADO SIN COSTURA - ART. 11881", "BOXER DUFOUR ALGODON BATIK SIN COSTURA - ART. 11831", 
     "MEDIA CORTA LISA ALGODON- ART. 3327",
     "MEDIA 3/4 CON LYCRA ELEGANCE - ART. 2098",
     "CAMISETA FRISADA ULTRA-TERMICA - ART. 11795", "CAMISETA PIJAMA - ART. 11797",
    ]

    let objetos = [
      {  id: 1, articulo: "conjuntos", modelo:"Conjunto  Andressa 1218", precio: 1600 },
      {  id: 2, articulo: "conjuntos", modelo:"Conjunto  Andressa 1221", precio: 1100 },
      {  id: 3, articulo: "boxers", modelo:"BOXER DUFOUR ALGODON RAYADO SIN COSTURA - ART. 11881", precio: 1600 },
      {  id: 4, articulo: "boxers", modelo:"BOXER DUFOUR ALGODON BATIK SIN COSTURA - ART. 11831", precio: 1900 },
      {  id: 5, articulo: "medias", modelo:"MEDIA CORTA LISA ALGODON- ART. 3327", precio: 900 },
      {  id: 6, articulo: "medias", modelo:"MEDIA 3/4 CON LYCRA ELEGANCE - ART. 2098", precio: 1150 },
      {  id: 7, articulo: "camisetas", modelo:"CAMISETA FRISADA ULTRA-TERMICA - ART. 11795", precio: 850 },
      {  id: 8, articulo: "camisetas", modelo:"CAMISETA PIJAMA - ART. 11797", precio: 2000 },
      ]
const ElementosPrincipales = document.getElementById("elementos-principales");
const lorem = document.getElementById("pomposo")
const titulo = document.getElementsByClassName("titulo-principal")

for (objeto of objetos) {
  // console.log(objeto.articulo + objeto.modelo)
  let tarjetita = document.createElement("div")
  tarjetita.innerHTML = objeto.articulo
  tarjetita.innerHTML = objeto.modelo‘ 
  ElementosPrincipales.append(tarjetita)
};

