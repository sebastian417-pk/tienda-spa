import { createContext, useContext } from 'react'
import type { Producto, ItemCarrito } from './types'

export interface CarritoContextType {
  items: ItemCarrito[]
  totalItems: number
  totalPrecio: number
  agregar: (producto: Producto) => void
  restar: (id: number) => void
  quitar: (id: number) => void
  vaciar: () => void
}

export const CarritoContext = createContext<CarritoContextType | undefined>(
  undefined
)

export function useCarrito() {
  const contexto = useContext(CarritoContext)
  if (!contexto) {
    throw new Error('useCarrito debe usarse dentro de CarritoProvider')
  }
  return contexto
}