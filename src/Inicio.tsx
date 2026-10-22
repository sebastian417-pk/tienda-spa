import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div>
      <h1>Bienvenido a MiTienda</h1>
      <p>
        Una tienda de tecnología hecha como SPA con React, React Router y
        estado global. Revisa los productos y arma tu carrito.
      </p>
      <Link to="/productos" className="enlace-boton">
        Ver productos
      </Link>
    </div>
  )
}

export default Inicio