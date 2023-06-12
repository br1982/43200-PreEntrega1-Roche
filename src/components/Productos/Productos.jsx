import './Productos.css';

//importamos los hooks que necesitamos
import { useState, useEffect } from 'react';

/* Importamos las funciones de firebase para visualizar productos
getDocs => documentos de una collección
collection => obtengo una collección
query => generar consulta
*/

import {getDocs, collection, query} from "firebase/firestore";


import {db} from "../../services/config";


const Productos = () => {
    const [productos, setProductos] = usetState([]);

  return (
    <div>
      
    </div>
  )
}

export default Productos
