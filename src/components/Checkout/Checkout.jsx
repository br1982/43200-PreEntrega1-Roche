import { useState, useEffect, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");


    const manejadorSubmit = (event) => {
        event.preventDefault();

        //validar que los campos estén completos

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor complete todos los campos");
            return;
        }

        //validar que coincidan los campos email
        if(email !== emailConfirmacion){
            setError("Por favor los mails deben coincidir");
            return;
        }

        //crear el objeto de orden
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        //guardar la orden en base de datos
        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.log("Error al crear una orden", error);
                setError("Se produjo un error al crear una orden, intente más tarde");
            })
    }

  return (
    <div>
        <h2> Checkout</h2>
        <form onSubmit={manejadorSubmit}>
            {carrito.map(producto => (
                <div key={producto.item.id}>
                    <p>{producto.item.nombre} x {producto.cantidad}</p>
                    <p>Precio: $ {producto.item.precio}</p>
                </div>
            ))}
            <hr />

            <div>
                <label htmlFor=""> Nombre</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>
            
            <div>
                <label htmlFor="">Teléfono</label>
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            
            <div>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor=""> Confirmar Email</label>
                <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>

            {
                error && <p style={{color:"red"}}> {error} </p>
            }

            <button> Finalizar orden </button>

            {
                ordenId && (
                    <strong>¡Gracias por su compra! Tú orden es: {ordenId}</strong>
                )
            }            
        </form>
    </div>
  )
}

export default Checkout
