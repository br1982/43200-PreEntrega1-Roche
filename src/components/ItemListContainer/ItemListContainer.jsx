import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();


  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
    
    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))
  }, [idCategoria])

  return (
    <div>
      <h2 style={{textAlign: "center"}}>Mis productos</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
