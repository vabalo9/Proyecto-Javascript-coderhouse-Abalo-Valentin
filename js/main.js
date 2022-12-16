let productos = [
    
    {  id: 1, articulo: "Boxers", nombre:"BOXER DUFOUR ALGODON RAYADO SIN COSTURA - ART. 11881", precio: 1600, imagen: "./shop/boxers/BOXER ALGODON RAYADO SIN COSTURA - ART. 11881.jpg" },
    {  id: 2, articulo: "Boxers", nombre:"BOXER DUFOUR ALGODON BATIK SIN COSTURA - ART. 11831", precio: 1600, imagen: "./shop//boxers/BOXER ESTRELLAS SIN COSTURA - ART. 11789.jpg" },
    {  id: 3, articulo: "Boxers", nombre:"BOXER DUFOUR MELANGE COLOR SIN COSTURA - ART. 11788", precio: 1550, imagen: "./shop/boxers/BOXER MELANGE COLOR SIN COSTURA - ART. 11788.jpg" },
    {  id: 4, articulo: "Boxers", nombre:"BOXER DUFOUR RUNNING MICROFIBRA - ART. 11794", precio: 1600, imagen: "./shop/boxers/BOXER RUNNING MICROFIBRA - ART. 11794.jpg" },
    {  id: 5, articulo: "Boxers", nombre:"BOXER DUFOUR SELVATICO SIN COSTURA - ART. 11830", precio: 1855, imagen: "./shop/boxers/BOXER SELVATICO SIN COSTURA - ART. 11830.jpg" },
    {  id: 6, articulo: "Boxers", nombre:"BOXER DUFOUR SIN COSTURA RAYADO - ART. 11812", precio: 1700, imagen: "./shop/boxers/BOXER SIN COSTURA RAYADO - ART. 11812.jpg" },
    
    {  id: 7,  articulo: "Medias", nombre:"CORTA LISA ALGODON- ART. 3327", precio: 900, imagen: "./shop/medias/CORTA LISA - ART. 3327.jpg" },
    {  id: 8,  articulo: "Medias", nombre:"MEDIA 3/4 CON LYCRA ELEGANCE - ART. 2098", precio: 1600, imagen: "./shop/medias/MEDIA 34 CON LYCRA ELEGANCE - ART. 2098.jpg" },
    {  id: 9,  articulo: "Medias", nombre:"QUARTER CON DISEÑO - ART. 2604", precio: 2000, imagen: "./shop/medias/QUARTER CON DISENO - ART. 2604.jpg" },
    {  id: 10, articulo: "Medias", nombre:"QUARTER CON DISEÑO - ART. 3325", precio: 1650, imagen: "./shop/medias/QUARTER CON DISENO - ART. 3325.jpg" },
    {  id: 11, articulo: "Medias", nombre:"QUARTER DEPORTIVA (PACKX3) - ART. 3326.3", precio: 1855, imagen: "./shop/medias/QUARTER DEPORTIVA (PACKX3) - ART. 3326.3.jpg" },
    {  id: 12, articulo: "Medias", nombre:"QUARTER DEPORTIVA - ART. 2603", precio: 1190, imagen: "./shop/medias/QUARTER DEPORTIVA - ART. 2603.jpg" },
    
    {  id: 13, articulo: "Conjuntos", nombre:"CONJUNTO ANDRESSA 1218", precio: 1600, imagen: "./shop/corpinos/Conjunto Andressa E2003.jpeg" },
    {  id: 14, articulo: "Conjuntos", nombre:"CONJUNTO ANDRESSA 1221", precio: 1600, imagen: "./shop/corpinos/Conjunto Andressa 1221 .jpg" },
    {  id: 15, articulo: "Conjuntos", nombre:"CONJUNTO ANDRESSA GUIPIUR", precio: 1550, imagen: "./shop/corpinos/conjunto Andressa guipiur.jpg" },
    {  id: 16, articulo: "Conjuntos", nombre:"CONJUNTO ANDRESSA E2003", precio: 1600, imagen: "./shop/corpinos/Conjunto Andressa E2003.jpeg" },
    {  id: 17, articulo: "Conjuntos", nombre:"CONJUNTO ANDRESSA E2029", precio: 1855, imagen: "./shop/corpinos/Conjunto Andressa E2029.jpeg" },
    {  id: 18, articulo: "Conjuntos", nombre:"CONJUNTO ANDRESSA L6894", precio: 1700, imagen: "./shop/corpinos/conjunto Andressa L6894.jpg" },
    
    {  id: 19, articulo: "Remeras", nombre:"CAMISETA FRISADA ULTRA-TERMICA - ART. 11795", precio: 1600, imagen: "./shop/remeras/CAMISETA FRISADA ULTRA-TERMICA - ART. 11795.jpg" },
    {  id: 20, articulo: "Remeras", nombre:"CAMISETA PIJAMA - ART. 11797l", precio: 1600, imagen: "./shop/remeras/CAMISETA PIJAMA - ART. 11797l.jpg" },
    {  id: 21, articulo: "Remeras", nombre:"CAMISETA TERMICA - ART. 11945", precio: 1550, imagen: "./shop/remeras/CAMISETA TERMICA - ART. 11945.jpg" },
    {  id: 22, articulo: "Remeras", nombre:"CAMISETA THERMICAL SIN COSTURA - ART. 11927", precio: 1855, imagen: "./shop/remeras/CAMISETA THERMICAL SIN COSTURA - ART. 11927.jpg" },
    {  id: 23, articulo: "Remeras", nombre:"MUSCULOSA MORLEY - ART. 11906", precio: 1700, imagen: "./shop/remeras/MUSCULOSA MORLEY - ART. 11906.jpg" },
    {  id: 23, articulo: "Remeras", nombre:"REMERA PIJAMA JERSEY ALGODON - ART. 11984", precio: 1700, imagen: "./shop/remeras/REMERA PIJAMA JERSEY ALGODON - ART. 11907.jpg" },
   
]

    const contenedorProductos = document.getElementById("contenedor-productos")
    const botonesCategorias = document.querySelectorAll(".boton-categoria")
    const tituloPrincipal = document.getElementById("titulo-principal")
    const input = document.getElementById("input")
    // ids para el carrito
    const btnComprar = document.getElementById("comprar")
    const btnModalDerecha = document.getElementById("modal-carrito")
    const modalDerecha = document.getElementById("modal-derecha")
    const cerrarModalDerecha = document.getElementById("cerrar-modal-derecha")
    let carrito = document.getElementById("carrito")
    let botones = document.getElementsByClassName("articulo_boton")
    let montoTotal = document.getElementById("reduce")
    const divComprar = document.getElementById("btn-comprar-visible")
    
   
    

    function cargarProductos(productosElegidos) {

        contenedorProductos.innerHTML = ""
        productosElegidos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("articulo_hijo")
            div.innerHTML = `
            <img src="${producto.imagen}" alt="modelo boxer" class="articulo_imagen">
            <h4 class="articulo_titulo">${producto.nombre}</h4>
            <h5 class="articulo_titulo precio">$${producto.precio}</h5>
            <button class="articulo_boton" id=${producto.id}>Agregar al carrito</button>
            `
            contenedorProductos.append(div)
        })

        actualizarBotonesAgregar()
        
    }

    
        
                 
    

cargarProductos(productos)

        botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
            if (e.currentTarget.id != "todos") {
                const procuctosbtn = productos.filter(producto => producto.articulo === e.currentTarget.id)
                 cargarProductos(procuctosbtn)
                 const productoCategoria = productos.find(producto => producto.articulo === e.currentTarget.id)
                tituloPrincipal.innerText = productoCategoria.articulo
            }else {
                tituloPrincipal.innerText = "Todos los productos"
                cargarProductos(productos)
            }
        })
    })

    // codigo del buscador
    input.addEventListener("input", fnInput)

    function fnInput(event) {
        let productosFiltrados = productos.filter(producto => producto.nombre.includes(input.value.toUpperCase()))
        cargarProductos(productosFiltrados)
        tituloPrincipal.innerText = ""
        
      }

      //codigo del carrito

      let arrayCarrito = []

      

     if (localStorage.getItem("carrito")) {
       arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
      }

      renderizarCarrito()
      mostrarTotales()
      
      btnComprar.onclick = () => {
        localStorage.clear()
        
        carrito.innerHTML = `
        <h4 class="carrito-vacio"> No hay ningún producto en el carrito</h4>
        `
        completoOVacio()

        montoTotal.innerHTML = `
          <span class="reduce">Productos totales: 0</span>
          <span class="reduce">Total a abonar: $0</span>
          `
          arrayCarrito = []
      }

       
    

      function agregarAlCarrito(e) {
        let productoBuscado = productos.find(producto => producto.id == e.target.id)
        let posicionProducto = arrayCarrito.findIndex(producto => producto.id == e.target.id)
      
        posicionProducto != -1 ? 
          arrayCarrito[posicionProducto] = {
            id: arrayCarrito[posicionProducto].id, nombre: arrayCarrito[posicionProducto].nombre, precio: arrayCarrito[posicionProducto].precio, unidades: arrayCarrito[posicionProducto].unidades + 1, subtotal: arrayCarrito[posicionProducto].precio * (arrayCarrito[posicionProducto].unidades + 1)
          }
        : 
          arrayCarrito.push({
            id: productoBuscado.id, nombre: productoBuscado.nombre, precio: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio
          })

          mostrarTotales()


          let carritoJSON = JSON.stringify(arrayCarrito)
          localStorage.setItem("carrito", carritoJSON)




         renderizarCarrito()
      }

      function renderizarCarrito() {

    
        carrito.innerHTML = ""
        for (const itemCarrito of arrayCarrito) {
          const {nombre, unidades, precio , subtotal, id } =itemCarrito
          carrito.innerHTML += `
          <div class="itemCarrito">
          <div class="elemento">
            <h4>${nombre}</h4>
            <h4>Unidades: ${unidades}</h4>
            <h4>valor: $${precio}</h4>
            <h4>Subtotal: $${subtotal}</h4>
            <img id="${id}" class="tacho" src="./iconos/tacho.png" >
            </div>
          </div>
        
          `
        }
        actualizarTachosAgregar ()
      }
      

      btnModalDerecha.addEventListener("click", ()=>{
        modalDerecha.classList.add("active");
      })
    
     
    
      cerrarModalDerecha.addEventListener("click", ()=>{
        modalDerecha.classList.remove("active");
      })

      function actualizarBotonesAgregar () {
         botones = document.getElementsByClassName("articulo_boton")
         for (const boton of botones) {
          boton.addEventListener("click", agregarAlCarrito)
    
          boton.addEventListener("click", ()=>{
            modalDerecha.classList.add("active");
          })
        }
      }

      function actualizarCantidad() {
        let cantidad = arrayCarrito.reduce((acc, producto) => acc + producto.unidades, 0)
        return cantidad
      }

      function actualizarTotal() {
        let cantidad = arrayCarrito.reduce((acc, producto) => acc + producto.subtotal, 0)
        return cantidad
      }

      function mostrarTotales() {
        actualizarCantidad()
          actualizarTotal()
          montoTotal.innerHTML = `
          <span class="reduce">Productos totales: ${actualizarCantidad()}</span>
          <span class="reduce">Total a abonar: $${actualizarTotal()}</span>
          `
      }

      function completoOVacio() {
        if (arrayCarrito.length == 0) {
          Swal.fire({
            title: 'Tenes que meterle algo al carrito para poder comprar crack',
            icon: 'error',
            
          })
          
        } else {
        Swal.fire({
          title: 'Su compra fue realizada con exito!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        }
      }
      
      function actualizarTachosAgregar () {
        tachos = document.getElementsByClassName("tacho")
        for (const tacho of tachos) {
         tacho.addEventListener("click", quitarAlCarrito)
  
       }
     }
     actualizarTachosAgregar ()

     function quitarAlCarrito(e) {
      let productoEliminar = productos.filter(producto => producto.cantidad <  1);
      let posicionProducto = arrayCarrito.findIndex(producto => producto.id == e.target.id)
    
        arrayCarrito[posicionProducto] = {
          id: arrayCarrito[posicionProducto].id, nombre: arrayCarrito[posicionProducto].nombre, precio: arrayCarrito[posicionProducto].precio, unidades: arrayCarrito[posicionProducto].unidades - 1, subtotal: arrayCarrito[posicionProducto].precio * (arrayCarrito[posicionProducto].unidades - 1)
        }
      

        let carritoJSON = JSON.stringify(arrayCarrito)
        localStorage.setItem("carrito", carritoJSON)

        actualizarTachosAgregar ()
        mostrarTotales()

       renderizarCarrito()
    }