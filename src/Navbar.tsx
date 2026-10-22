import { NavLink } from 'react-router-dom'
import { useCarrito } from './CarritoContext'

function Navbar() {
  const { totalItems } = useCarrito()

  return (
    <nav className="navbar">
      <span className="marca">🛒 MiTienda</span>
      <div className="enlaces">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/carrito">
          Carrito <span className="contador">{totalItems}</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar