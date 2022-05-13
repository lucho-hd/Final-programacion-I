'use strict'

//Carga de productos de la tienda
let stockProductos = [
    {
        id: 1,
        titulo: "Zapatillas Nike Air Zoom Pegasus 38",
        img:"img/producto-1.jpg",
        alt_img:"Zapatillas Nike Winflo 8",
        precio: "$21.999",
        cantidad:1,
    },
    {
        id: 2,
        titulo: "Campera Nike Sportswear Therma-Fit",
        img:"img/producto-2.jpg",
        alt_img:"Campera Nike Sportswear Therma-Fit",
        precio: "$23.999",
        cantidad:1,
    },
    {
        id: 3,
        titulo: "Zapatillas Nike Zoomx Vapofly Next 2",
        img:"img/producto-3.jpg",
        alt_img:"Zapatillas Nike Zoomx Vapofly Next 2",
        precio: "$49.999",
        cantidad:1,
    },
    {
        id: 4,
        titulo: "Zapatillas Nike Zoom Vapor Pro",
        img:"img/producto-4.jpg",
        alt_img:"Zapatillas Nike Zoom Vapor Pro",
        precio: "$26.999",
        cantidad:1,
    },
    {
        id: 5,
        titulo: "Zapatillas Nike Air Max SC",
        img:"img/producto-5.jpg",
        alt_img:"Zapatillas Nike Air Max SC",
        precio: "$17.499",
        cantidad:1,
    },
    {
        id: 6,
        titulo: "Campera Adidas Own The Run",
        img:"img/producto-6.jpg",
        alt_img:"Campera Adidas Own The Run",
        precio: "$16.999",
        cantidad:1,
    },
];

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

let carrito = [];

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
                <div class="card">
                    <img class="img-producto" src=${producto.img} alt=${producto.alt_img}>
                        <h2 class="card-title fw-bold fs-4 my-3 mx-2">${producto.titulo}</h2>
                        <span class="card-text fs-5 my-1 mx-2 fw-bold">${producto.precio}</span>
                        <button id="agregar${producto.id}" class="btn btn-primary my-3 mx-2 w-50 fw-bold"><i class="bi bi-bag"></i> Añadir al carrito</button>
                </div    `
       
    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (productoID) => {
    const item = stockProductos.find((prod) => prod.id === productoID)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = ` 
                        <img src="${prod.img} class="img-carrito">
                        <p>${prod.titulo}</p>
                        <p>Precio: ${prod.precio}<p>
                        <input type="number" value="1" max="50" min="1"  class="cantidad">
                        <button onclick= "eliminarDelCarrito(${prod.id} class="btn-eliminar")"><i class="bi bi-trash"></i>
                        `
        contenedorCarrito.appendChild(div)
    })
}