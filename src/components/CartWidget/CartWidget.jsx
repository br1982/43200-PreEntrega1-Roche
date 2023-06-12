import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  const {carrito} = useContext(CarritoContext);
  const imgCarrito = "./src/assets/carrito.png"

  //se repite la próxima línea de total, se deberia agrear a context
  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);


  return (
    <Link to='/cart'>
      <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
      {
        totalCantidad > 0 && <span> {totalCantidad} </span>
      }
    </Link>
  )
}

export default CartWidget
