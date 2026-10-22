import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import CarritoProvider from './CarritoProvider'
import Navbar from './Navbar'
import Inicio from './Inicio'
import Productos from './Productos'
import Carrito from './Carrito'

function App() {
  return (
    <CarritoProvider>
      <HashRouter>
        <Navbar />
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>
        </main>
      </HashRouter>
    </CarritoProvider>
  )
}

export default App
