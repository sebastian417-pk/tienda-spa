import type { Producto } from './types'

interface Props {
  producto: Producto
  onAgregar: (producto: Producto) => void
}

function ProductoCard({ producto, onAgregar }: Props) {
  return (
    <div className="tarjeta">
      <div className="emoji">{producto.emoji}</div>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p className="precio">${producto.precio.toLocaleString('es-CO')}</p>
      <button onClick={() => onAgregar(producto)}>Agregar al carrito</button>
    </div>
  )
}

export default ProductoCard