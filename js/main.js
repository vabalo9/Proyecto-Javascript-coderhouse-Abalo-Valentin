  fetch("./productos.json")
  .then(respuesta => respuesta.json())
  .then(productos => {
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
            title: 'Tenes que meterle algo al carrito para poder comprar, crack',
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
      
      let posicionProducto = arrayCarrito.findIndex(producto => producto.id == e.target.id)
      arrayCarrito[posicionProducto].unidades == 1 ?
         
        arrayCarrito = arrayCarrito.filter(carrito => carrito.unidades >  1)
        
      :
        arrayCarrito[posicionProducto] = {
          id: arrayCarrito[posicionProducto].id,
          nombre: arrayCarrito[posicionProducto].nombre,
          precio: arrayCarrito[posicionProducto].precio,
          unidades: arrayCarrito[posicionProducto].unidades - 1,
          subtotal: arrayCarrito[posicionProducto].precio * (arrayCarrito[posicionProducto].unidades - 1)
      }
        

      
         

        let carritoJSON = JSON.stringify(arrayCarrito)
        localStorage.setItem("carrito", carritoJSON)

        actualizarTachosAgregar ()
        mostrarTotales()

       renderizarCarrito()
    }
  })  
  
