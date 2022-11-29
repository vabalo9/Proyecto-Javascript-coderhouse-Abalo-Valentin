let productos = [
    
    {  id: 1, articulo: "boxers", nombre:"BOXER DUFOUR ALGODON RAYADO SIN COSTURA - ART. 11881", precio: 1600, imgUrl: "../boxers/BOXER-ALGODON-RAYADO-SIN-COSTURA-ART.11881.jpg" },
    {  id: 2, articulo: "boxers", nombre:"BOXER DUFOUR ALGODON BATIK SIN COSTURA - ART. 11831", precio: 1600, imgUrl: "../boxers/BOXER-ALGODON-RAYADO-SIN-COSTURA-ART.11881.jpg" },
    {  id: 3, articulo: "boxers", nombre:"BOXER DUFOUR MELANGE COLOR SIN COSTURA - ART. 11788", precio: 1550, imgUrl: "../boxers/BOXER-ALGODON-RAYADO-SIN-COSTURA-ART.11881.jpg" },
    {  id: 4, articulo: "boxers", nombre:"BOXER DUFOUR RUNNING MICROFIBRA - ART. 11794", precio: 1600, imgUrl: "../boxers/BOXER-ALGODON-RAYADO-SIN-COSTURA-ART.11881.jpg" },
    {  id: 5, articulo: "boxers", nombre:"BOXER DUFOUR SELVATICO SIN COSTURA - ART. 11830", precio: 1855, imgUrl: "../boxers/BOXER-ALGODON-RAYADO-SIN-COSTURA-ART.11881.jpg" },
    {  id: 6, articulo: "boxers", nombre:"BOXER DUFOUR SIN COSTURA RAYADO - ART. 11812", precio: 1700, imgUrl: "../boxers/BOXER-ALGODON-RAYADO-SIN-COSTURA-ART.11881.jpg" },
    
    ]
  
  let btnComprar = document.getElementById("comprar")
  btnComprar.onclick = () => {
    localStorage.clear()
    
    carrito.innerHTML = `
    <h4 class="carrito-vacio"> No hay ningún producto en el carrito</h4>
    `

    alert("Su compra fue procesada con exito! Muchas gracias")
    
  }
  

  let contenedorProductos = document.getElementById("contenedorProductos")
  let carrito = document.getElementById("carrito")
  let arrayCarrito = []
  

  if (localStorage.getItem("carrito")) {
    arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
  }
  

 
  renderizarCarrito()
  renderizarProductos(productos)
  
  function renderizarProductos(arrayProductos) {
    contenedorProductos.innerHTML = ''
    for (const producto of arrayProductos) {
      let tarjetaProducto = document.createElement("div")
  
    
  
      tarjetaProducto.innerHTML = `
      <div class="articulo_hijo">
         <img class="articulo_imagen" src="./shop/boxers/BOXER ALGODON RAYADO SIN COSTURA - ART. 11881.jpg"/>
        <h4 class="articulo_titulo">${producto.nombre}</h4>
        <h5 class="articulo_titulo precio">$${producto.precio}</h5>
        <button class="articulo_boton" id=${producto.id}>Agregar al carrito</button>
        </div>
      `
      // <img src= ${producto.imgUrl} class="articulo_imagen">
      
  
      contenedorProductos.append(tarjetaProducto)
    }
  
    let botones = document.getElementsByClassName("articulo_boton")
    for (const boton of botones) {
      boton.addEventListener("click", agregarAlCarrito)

      boton.addEventListener("click", ()=>{
        modalDerecha.classList.add("active");
      })
    }
  }
  
  let input = document.getElementById("input")
  input.addEventListener("input", fnInput)
  
  function fnInput(event) {
    console.log(event)
    let productosFiltrados = productos.filter(producto => producto.nombre.includes(input.value.toUpperCase()))
    renderizarProductos(productosFiltrados)
  }
  
  function agregarAlCarrito(e) {
    let productoBuscado = productos.find(producto => producto.id == e.target.id)
    let posicionProducto = arrayCarrito.findIndex(producto => producto.id == e.target.id)
  
    if (posicionProducto != -1) {
      arrayCarrito[posicionProducto] = {
        id: arrayCarrito[posicionProducto].id, nombre: arrayCarrito[posicionProducto].nombre, precio: arrayCarrito[posicionProducto].precio, unidades: arrayCarrito[posicionProducto].unidades + 1, subtotal: arrayCarrito[posicionProducto].precio * (arrayCarrito[posicionProducto].unidades + 1)
      }
    } else {
      arrayCarrito.push({
        id: productoBuscado.id, nombre: productoBuscado.nombre, precio: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio
      })
    }
  
    let carritoJSON = JSON.stringify(arrayCarrito)
    localStorage.setItem("carrito", carritoJSON)
  
    renderizarCarrito()
  }
  
  
  function renderizarCarrito() {

    
    carrito.innerHTML = ""
    for (const itemCarrito of arrayCarrito) {
      carrito.innerHTML += `
      <div class="itemCarrito">
      <div class="elemento">
        <h4>${itemCarrito.nombre}</h4>
        <h4>Unidades: ${itemCarrito.unidades}</h4>
        <h4>valor: $${itemCarrito.precio}</h4>
        <h4>Subtotal: $${itemCarrito.subtotal}</h4>
        </div>
      </div>
      `
    }
  }
   const btnModalDerecha = document.getElementById("modal-carrito")
  const modalDerecha = document.getElementById("modal-derecha")
  const cerrarModalDerecha = document.getElementById("cerrar-modal-derecha")

  btnModalDerecha.addEventListener("click", ()=>{
    modalDerecha.classList.add("active");
  })

 

  cerrarModalDerecha.addEventListener("click", ()=>{
    modalDerecha.classList.remove("active");
  })

  
  
  