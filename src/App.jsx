import { Route, Routes } from 'react-router'
import Layout from './componentes/Layout.jsx'
import Inicio from './paginas/Inicio.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import Contacto from './paginas/Contacto.jsx'
import Carrito from './paginas/Carrito.jsx'
import DetalleProducto from './paginas/DetalleProducto.jsx'
import NoEncontrada from './paginas/NoEncontrada.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="producto/:id" element={<DetalleProducto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}