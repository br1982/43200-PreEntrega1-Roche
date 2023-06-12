const productos = [
    {nombre: "Gorra", precio: 250, id: "1", img: "../img/gorra.jpg", idCat:"2", stock: 5, descripcion: "Gorra negra con escudo en dorado"},
    {nombre: "Banderin", precio: 150, id: "2", img: "../img/banderin.jpg", idCat:"2", stock: 10, descripcion: "Se uso para cambiar con el rival hasta el año 1999"},
    {nombre: "Temporada 1981", precio: 5000, id: "7", img: "../img/1981.jpg", idCat:"3", stock: 10, descripcion: "La camiseta de Boca Juniors campeona en 1981 en el ranking de las 50 camisetas legendarias en la historia del fútbol"},
    {nombre: "Llavero", precio: 50, id: "3", img: "../img/llavero.jpg", idCat:"2", stock: 10, descripcion: "De metal, diseño de escudo con estrellas"},
    {nombre: "Temporada 2000", precio: 3000, id: "6", img: "../img/2000.jpg", idCat:"3", stock: 10, descripcion: "Color azul y amarillo. Escudo con estrellas."},
    {nombre: "Piluso", precio: 200, id: "4", img: "../img/piluso.jpg", idCat:"2", stock: 10, descripcion: "Color azul y amarillo. Escudo con estrellas."},
    {nombre: "Temporada 1998", precio: 2500, id: "5", img: "../img/1998.jpg", idCat:"3", stock: 10, descripcion: ""}
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 20)
    })
}


//Creamos una funcion que devuelva un solo item
export const getUnProducto = (id) => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 20)
    })
}

//Creamos una funcion que devuelve todos los productos dependiendo de la categoria solicitada
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 20)
    })
}