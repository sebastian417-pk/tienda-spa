import type { Producto } from './types'

export const productos: Producto[] = [
  { id: 1, nombre: 'Teclado mecánico', descripcion: 'Switches rojos, retroiluminado.', precio: 180000, emoji: '⌨️' },
  { id: 2, nombre: 'Mouse inalámbrico', descripcion: 'Ergonómico, batería de 6 meses.', precio: 65000, emoji: '🖱️' },
  { id: 3, nombre: 'Audífonos', descripcion: 'Con micrófono y cancelación de ruido.', precio: 140000, emoji: '🎧' },
  { id: 4, nombre: 'Monitor 24"', descripcion: 'Full HD, 75 Hz.', precio: 520000, emoji: '🖥️' },
  { id: 5, nombre: 'Webcam HD', descripcion: '1080p con enfoque automático.', precio: 95000, emoji: '📷' },
  { id: 6, nombre: 'Memoria USB 64 GB', descripcion: 'USB 3.0, alta velocidad.', precio: 35000, emoji: '💾' },
]