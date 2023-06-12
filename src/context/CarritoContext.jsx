//1)con los siguientes hook que importamos permite almacenar lógica del carrito
import { useState, createContext } from "react";


//2) Nuevo contexto. El valor inicial por default es objeto de la propiedad carrito con un array vacío

export const CarritoContext = createContext({carrito:[]});

//Creamos el componente "CarritoProvider". En doc figura como proveedor de contexto
export const CarritoProvider = ({ children }) => {
    //3) Crear un estado local carrito con hook useState
    const [carrito, setCarrito] = useState([]);

    //verificar por consola
    console.log(carrito);


    //4) SE agregan métodos para darle funcionamiento al carrito de compras

    //funcion para agregar productos al carrito
    const agregarProducto = (item, cantidad) => {
        if(!yaEstaEnCarrito(item.id)){
            setCarrito(prev => [...prev, { item, cantidad }]);
        }
        else{
            console.log("Producto ya agregado!");
        }

    }

    //función auxiliar
    function yaEstaEnCarrito(id) {
        return carrito.some(prod => prod.id === id);
    }

    //función para eliminar productos del carrito
    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
    }

    //función para vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    //5)
    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )

    //6)La prop children se utiliza para representar el carrito y sus métodos
}