// PRODUCTOS
const productos = [
    // Zapatillas
    {
        id: "Zapatillas Nike Air Zoom Pegasus 38",
        titulo: "Zapatillas Nike Air Zoom Pegasus 38",
        imagen: "./img/Zapatillas/producto-1.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 21999
    },
    {
        id: "Zapatillas Nike Zoomx Next 2" ,
        titulo: "Zapatillas Nike Zoomx Next 2",
        imagen: "./img/Zapatillas/producto-3.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 49999
    },
    {
        id: "Zapatillas Nike Air Zoom Vapor Pro",
        titulo: "Zapatillas Nike Air Zoom Vapor Pro",
        imagen: "./img/Zapatillas/producto-4.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 26999
    },
    {
        id: "Zapatillas Nike Air Max SC Run",
        titulo: "Zapatillas Nike Air Max SC Run",
        imagen: "./img/Zapatillas/producto-5.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 17499
    },

    // Camisetas
    {
        id: "Camiseta Adidas Boca Juniors 2021",
        titulo: "Camiseta Adidas Boca Juniors 2021",
        imagen: "./img/Camisetas/producto-9.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 15000
    },
    {
        id: "Camiseta adidas Afa Oficial",
        titulo: "Camiseta adidas Afa Oficial",
        imagen: "./img/Camisetas/producto-10.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 31899
    },
    {
        id: "Camiseta adidas Afa Presh",
        titulo: "Camiseta adidas Afa Presh",
        imagen: "./img/Camisetas/producto-11.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 20899
    },
    {
        id: "Camiseta Adidas Afa",
        titulo: "Camiseta Adidas Afa",
        imagen: "./img/Camisetas/producto-12.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 16499
    },
    {
        id: "Camiseta Nike Paris Saint Germain Home",
        titulo: "Camiseta Nike Paris Saint Germain Home",
        imagen: "./img/Camisetas/producto-13.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 8299
    },
    {
        id: "Camiseta Adidas Juventus Titular 22/23",
        titulo: "Camiseta Adidas Juventus Titular 22/23",
        imagen: "./img/Camisetas/producto-14.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 16999
    },
    {
        id: "Camiseta Nike Fc Barcelona 2021/22 Stadium Infantil",
        titulo: "Camiseta Nike Fc Barcelona 2021/22 Stadium Infantil",
        imagen: "./img/Camisetas/producto-15.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 16499
    },
    {
        id: "Camiseta adidas Visitante River Plate 21/22",
        titulo: "Camiseta adidas Visitante River Plate 21/22",
        imagen: "./img/Camisetas/producto-16.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 18999
    },

    // Camperas
    {
        id: "Campera Under Armour Pjt Rock Q2",
        titulo: "Campera Under Armour Pjt Rock Q2",
        imagen: "./img/Camperas/producto-17.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 48499
    },
    {
        id: "Campera Under Armour Outrun The Storm",
        titulo: "Campera Under Armour Outrun The Storm",
        imagen: "./img/Camperas/producto-18.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 31499
    },
    {
        id: "Campera adidas Designed For Gameday",
        titulo: "Campera adidas Designed For Gameday",
        imagen: "./img/Camperas/producto-19.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 31999
    },
    {
        id: "Campera Adidas Own The Run",
        titulo: "Campera Adidas Own The Run",
        imagen: "./img/Camperas/producto-2.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 16999
    },
];

// Variables
const contenedorProductos         = document.querySelector('#contenedor-productos');
const contenedorModal             = document.querySelector('#contenedor_modal')
const botonesCategorias           = document.querySelectorAll('.boton-categoria');
const tituloPrincipal             = document.querySelector('#titulo-principal');
let botonesAgregar                = document.querySelectorAll('.producto-agregar');
let btnVerDetalle                 = document.querySelectorAll(".verDetalle");
const cantidad                    = document.querySelector('#cantidad');
const alerta                      = document.getElementById('alerta');
const carro                       = document.querySelector('.carrito');
const iconoCarrito                = document.querySelector('#icono-carrito');
const cerrarCarrito               = document.querySelector('#cerrar-carrito');
const contenedorCarritoVacio      = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos  = document.getElementById('carrito-productos');
const contenedorCarritoAcciones   = document.querySelector('#carrito-acciones');
const contenedorCarritoComprado   = document.querySelector('#carrito-comprado');
let botonesEliminar               = document.querySelectorAll('.carrito-producto-eliminar');
const botonVaciar                 = document.querySelector('#carrito-acciones-vaciar');
const contenedorTotal             = document.querySelector('#total');
const botonComprar                = document.querySelector('#carrito-acciones-comprar');
let containerForm                 = document.getElementById("containerForm");



//Abre el carrito de compras.
iconoCarrito.onclick = () => {
    carro.classList.add('activo');
};

// Cierra el carrito de compras.
cerrarCarrito.onclick = () => {
    carro.classList.remove('activo');
};

/**
 * Carga los productos del array en la pantalla de inicio.
 * @param {*} productosElegidos 
 */
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}"/>
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}

cargarProductos(productos);

// Botones de las diferentes cateforías de los productos.
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        document.getElementById('anuncio').style.display = 'block';

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

// Botones para agregar al carrito.
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito = localStorage.getItem('Productos');
productosEnCarrito = JSON.parse(productosEnCarrito);

let productosEnCarritoLS = localStorage.getItem('Productos');


if (productosEnCarrito) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarCantidad();
} else {
    productosEnCarrito = [];
}

/**
 * Agrega el/los producto/s al carrito de compras.
 * @param {*} e 
 */
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
        alertas(`El producto fue agregado al carrito exitosamente`, 'success');
    }

    containerForm.classList.remove("deshabilitado");

    cargarProductosCarrito()
    actualizarCantidad();

    localStorage.setItem('Productos', JSON.stringify(productosEnCarrito));
}

/**
 * Actualiza la cantidad de productos en el carrito de compras ()
 */
function actualizarCantidad() {
    let nuevaCantidad = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidad.innerText = nuevaCantidad;
}

/**
 * Carga los productos seleccionados de la tienda en el carrito de compras. 
 */
function cargarProductosCarrito() {
    if ( productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("deshabilitado");
        contenedorCarritoProductos.classList.remove("deshabilitado");
        contenedorCarritoAcciones.classList.remove("deshabilitado");
        contenedorCarritoComprado.classList.add("deshabilitado");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar btn btn-danger rounded-circle" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);
        })
    
    } else {
        contenedorCarritoVacio.classList.remove("deshabilitado");
        contenedorCarritoProductos.classList.add("deshabilitado");
        contenedorCarritoAcciones.classList.add("deshabilitado");
        contenedorCarritoComprado.classList.add("deshabilitado");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

/**
 * Botones para eliminar los productos del carrito de compras.
 */
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

/**
 * Elimina el elemento selecciondo, mediante el ID, del carrito de compras.
 * @param {*} e 
 */
function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    productosEnCarrito.splice(index, 1);
    
    actualizarCantidad();
    cargarProductosCarrito();

    localStorage.setItem('Productos', JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito);

/**
 * Elimina todos los elementos que fueron añadidos en el carrito.
 */
function vaciarCarrito() {
    productosEnCarrito.length = 0;
    
    localStorage.removeItem('Productos', JSON.stringify(productosEnCarrito));

    cargarProductosCarrito();
    actualizarCantidad();
}

/**
 * Actualiza el monto total de la cantidad de productos. 
 */
function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

/**
 * Valida los campos ingresados en el formulario de compra (checkout).
 */
function validarFormulario() {
    let formulario              = document.getElementById("formCompra")
    let nombre                  = document.getElementById("nombre");
    let apellido                = document.getElementById("apellido");
    let email                   = document.getElementById("email"); 
    let telefono                = document.getElementById("telefono");
    let localidad               = document.getElementById("localidad");
    let direccion               = document.getElementById("direccion"); 
    let dni                     = document.getElementById("dni");
    let codigoPostal            = document.getElementById("cod-postal"); 
    let tarjeta                 = document.getElementById("tarjeta");
    let codigoSeguridad         = document.getElementById("cod-seguridad"); 
    let nombreTarjeta           = document.getElementById("titularTarjeta");
    let fechaVencimiento         = document.getElementById("fechaVencimiento");
    let carritoAccionesComprar  = document.getElementById("carrito-acciones-comprar");
    let error                   = document.getElementById("error");

    //Array vacío donde se almacenarán los errores que cometa el usuario en el formulario de checkout.
    let err = [];

    formulario.addEventListener('submit', function(e) {  

        e.preventDefault();

        if( nombre.value == '' || nombre.value.length == 0 || /^\s+$/.test(nombre.value) || (!/^[a-zA-Z0-9\s]+$/.test(nombre.value))){
            err.push('El nombre es obligatorio');
        }else if(!(isNaN(nombre.value))) {
            err.push('El nombre no puede contener números');
        }
    
        if(apellido.value == '' || apellido.value.length == 0 || /^\s+$/.test(apellido.value) || (!/^[a-zA-Z0-9\s]+$/.test(apellido.value))) {
            err.push('El apellido es obligatorio');
        }else if(!(isNaN(apellido.value))) {
            err.push('El apellido no puede contener números');
        }

        if(email.value == '') {
            err.push('El email es obligatorio');
        }else if(!(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email.value))) {
            err.push('Ingresá un email válido');
        }

        if(telefono.value == '') {
            err.push('El teléfono es obligatorio');
        }else if(isNaN(telefono.value)) {
            err.push('El teléfono no puede contener letras');
        }else if(!(/^\d{10}$/.test(telefono.value))) {
            err.push('El número de teléfono debe tener 10 dígitos');
        }

        if(localidad.sectedIndex == '' || localidad.selectedIndex == 0) {
            err.push('Selecciona al menos una localidad');
        }

        if(direccion.value == '' || direccion.value.length == 0 || /^\s+$/.test(direccion.value) || (!/^[a-zA-Z0-9\s]+$/.test(direccion.value))) {
            err.push('La dirección es obligatoria');
        }

        if(dni.value == '') {
            err.push('El DNI no puede quedar vacío');
        }else if(isNaN(dni.value)) {
            err.push('El DNI debe de estar formado por números');
        }else if(!(/^\d{8}$/.test(dni.value))) {
            err.push('El DNI tiene que estar formado por 8 números');
        }

        if(codigoPostal.value == '') {
            err.push('El código postal no puede quedar vacío');
        }else if(isNaN(codigoPostal.value)) {
            err.push('El código postal no puede contener letras');
        }else if(!(/^\d{4}$/.test(codigoPostal.value))) {
            err.push('El código postal tiene que estar formado por 4 números');
        }

        if(tarjeta.value == '') {
            err.push('El número  de tarjeta no puede quedar vacío');
        }else if(isNaN(tarjeta.value)) {
            err.push('El número de tarjeta no puede contener letras');
        }else if(!(/^\d{16}$/.test(tarjeta.value))) {
            err.push('El número de tarjeta debe estar formado por 16 números');
        }

        if(codigoSeguridad.value == '') {
            err.push('El código de seguridad es obligatorio');
        }else if(isNaN(codigoSeguridad.value)) {
            err.push('El código de seguridad no puede contener letras');
        }else if(!(/^\d{3}$/.test(codigoSeguridad.value))) {
            err.push('El código de seguridad tiene que estar formado por 3 números');
        }

        if(nombreTarjeta.value == '' || nombreTarjeta.value.length == 0 || /^\s+$/.test(nombreTarjeta.value) || (!/^[a-zA-Z0-9\s]+$/.test(nombreTarjeta.value))) {
            err.push('Ingrese el nombre del titular de la tarjeta');
        }else if(!(isNaN(nombreTarjeta.value))) {
            err.push('El nombre del titular no puede estar formado por números');
        }

        if(fechaVencimiento.value == '') {
            err.push('Seleccione una fecha de vencimiento');
        }

        error.innerHTML = err.join('<br> ');
    });    

    //Mensaje de confirmación de compra una vez que no haya errores en el formulario. 
    carritoAccionesComprar.addEventListener('click', () => {        
        if(err.length === 0) {
            let mensajeCompra = document.getElementById("carrito-comprado");
            mensajeCompra.classList.remove("deshabilitado"); 
            mensajeCompra.innerHTML = ` 
                                       Muchas gracias por tu compra. En breves se te enviará un email a <b>${email.value}</b> con el detalle de tu compra.
                                      `;
            containerForm.classList.add("deshabilitado");    
            comprarCarrito();
        }   
        resetearFormulario();
    })
}

function resetearFormulario () {
    document.querySelector("form").reset();
}

/**
 * Devuelve un mensaje en carrito informando el éxito de la compra.  
 */
function comprarCarrito() {

    productosEnCarrito.length = 0;    

    localStorage.setItem('Productos', JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.remove("deshabilitado");
    contenedorCarritoProductos.classList.add("deshabilitado");
    contenedorCarritoAcciones.classList.add("deshabilitado");
    contenedorCarritoComprado.classList.remove("deshabilitado");

    actualizarCantidad();
}

// Botón para subir al principio de la página.
const btn_subir = document.getElementById('arriba')
    btn_subir.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })

// Notificaciones al agregar un producto al carrito de compras.
const alertas = (mensaje, tipo) => {
    const contenido = document.createElement('div');
    contenido.innerHTML = [
        `<div class="alert alert-${tipo} alert-dismissible" role="alert">`,
        `   <div class="fw-bold text-center"><i class="bi bi-check-circle-fill"></i> ${mensaje}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alerta.append(contenido);
};

// Crea el intervalo que mostrará y ocultará el anuncio
setInterval(function mostrarAnuncio() {

  const anuncio = document.getElementById("anuncio");

  anuncio.innerHTML = `<div class="anuncio__container">
                          <div class="anuncio__header">
                              <h2 class="anuncio__title">Ofertas por tiempo limitado</h2>
                          </div>
                          <img class="anuncio__img" src="img/Banner/banner-argentina.jpg" alt="Ofertas por tiempo limitado">
                      </div>`;
  
}, 1000);

setInterval(function() {
    var anuncio = document.getElementById("anuncio");
    anuncio.style.display = "none";
  }, 10000);
  
