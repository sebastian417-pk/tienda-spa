import { useState, type ReactNode } from 'react'
import { CarritoContext } from './CarritoContext'
import type { Producto, ItemCarrito } from './types'

function CarritoProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemCarrito[]>([])

  const agregar = (producto: Producto) => {
    setItems((prev) => {
      const existe = prev.find((i) => i.producto.id === producto.id)
      if (existe) {
        return prev.map((i) =>
          i.producto.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
        )
      }
      return [...prev, { producto, cantidad: 1 }]
    })
  }

  const restar = (id: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.producto.id === id ? { ...i, cantidad: i.cantidad - 1 } : i))
        .filter((i) => i.cantidad > 0)
    )
  }

  const quitar = (id: number) => {
    setItems((prev) => prev.filter((i) => i.producto.id !== id))
  }

  const vaciar = () => setItems([])

  const totalItems = items.reduce((suma, i) => suma + i.cantidad, 0)
  const totalPrecio = items.reduce(
    (suma, i) => suma + i.producto.precio * i.cantidad,
    0
  )

  return (
    <CarritoContext.Provider
      value={{ items, totalItems, totalPrecio, agregar, restar, quitar, vaciar }}
    >
      {children}
    </CarritoContext.Provider>
  )
}

export default CarritoProvider