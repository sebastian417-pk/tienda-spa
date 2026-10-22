import { Link } from 'react-router-dom'
import { useCarrito } from './CarritoContext'

function Carrito() {
  const { items, totalPrecio, agregar, restar, quitar, vaciar } = useCarrito()

  if (items.length === 0) {
    return (
      <div>
        <h1>Tu carrito</h1>
        <p>Todavía no has agregado productos.</p>
        <Link to="/productos" className="enlace-boton">
          Ir a productos
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Tu carrito</h1>

      {items.map(({ producto, cantidad }) => (
        <div key={producto.id} className="item-carrito">
          <span>
            {producto.emoji} {producto.nombre}
          </span>
          <div className="cantidad">
            <button className="secundario" onClick={() => restar(producto.id)}>
              -
            </button>
            <span>{cantidad}</span>
            <button className="secundario" onClick={() => agregar(producto)}>
              +
            </button>
          </div>
          <span>
            ${(producto.precio * cantidad).toLocaleString('es-CO')}
          </span>
          <button className="secundario" onClick={() => quitar(producto.id)}>
            Quitar
          </button>
        </div>
      ))}

      <p className="total">Total: ${totalPrecio.toLocaleString('es-CO')}</p>
      <button onClick={vaciar}>Vaciar carrito</button>
    </div>
  )
}

export default Carrito