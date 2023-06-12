import './ItemListContainer.css'
import { useState, useEffect } from 'react'
//import { getProductos, getProductosPorCategoria } from '../../asyncmock'

import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

/*
  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
    
    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))
  }, [idCategoria])
*/

  useEffect( () => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h2 style={{textAlign: "center"}}>Mis productos</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
