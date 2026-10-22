import { productos } from './catalogo'
import { useCarrito } from './CarritoContext'
import ProductoCard from './ProductoCard'

function Productos() {
  const { agregar } = useCarrito()

  return (
    <div>
      <h1>Productos</h1>
      <div className="grilla">
        {productos.map((p) => (
          <ProductoCard key={p.id} producto={p} onAgregar={agregar} />
        ))}
      </div>
    </div>
  )
}

export default Productos