//importamos estas dos funciones de librería Firebase

//inicializo conexión 
import { initializeApp } from "firebase/app";
//servicio de almacenamiento que tiene la app de google. Se genera db dinámica para consultar y  subir las órdenes de compra
//obtener una instancia
import {getFirestore} from "firebase/firestore"; 


//trabajamos con un objeto con toda la info de la cuenta. Incluye la key personal de acceso a la DB
const firebaseConfig = {
  apiKey: "AIzaSyC-dn8jSJjM28XshRgD6FJERmCKlWvpBzs",
  authDomain: "tienda-boca.firebaseapp.com",
  projectId: "tienda-boca",
  storageBucket: "tienda-boca.appspot.com",
  messagingSenderId: "382892703908",
  appId: "1:382892703908:web:a71015098ef6d733f36631"
};


//iniciamos la conexión, asi nos devuelve una instancia de firebase
const app = initializeApp(firebaseConfig);

//exportamos para que esté disponible en toda nuestra app
export const db = getFirestore(app)