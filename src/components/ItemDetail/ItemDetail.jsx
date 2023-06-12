import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {
    //1) Se crea estado con cantidad de productos agregados
    const [addCount, setAddCount] = useState(0);

    //useContext
    const {agregarProducto} = useContext(CarritoContext);

    //2)Se crea funcion que maneja la cantidad
    const manejadorCantidad = (cantidad) =>{
        setAddCount(cantidad);
        //console.log("Productos agregados:" + cantidad)

        //crear objeto con item y cantidad
        const item = {id, nombre, precio}
        agregarProducto(item, cantidad);
    }
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>{descripcion}</p>
            <img src={img} alt={nombre} />
            {
                //se emplea el montaje y desmontaje de componentes
            }
            {
                addCount > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail