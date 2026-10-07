import { useParams, useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button'
import { buscarProducto } from '../datos/productos.js'

export default function DetalleProducto() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const producto = buscarProducto(id)

  if (!producto) {
    return (
      <div className="text-center mt-5">
        <h2>Producto no encontrado</h2>
        <Button variant="primary" onClick={() => navigate('/catalogo')}>
          Volver al catálogo
        </Button>
      </div>
    )
  }

  return (
    <>
      <Button
        variant="outline-secondary"
        className="mb-3"
        onClick={() => navigate(-1)}
      >
        Volver
      </Button>
      <h1 className="h3">{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
    </>
  )
}