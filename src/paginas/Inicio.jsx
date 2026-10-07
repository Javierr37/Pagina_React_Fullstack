import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router'
import TarjetaProducto from '../componentes/TarjetaProducto.jsx'
import { productos } from '../datos/productos.js'

export default function Catalogo() {
  const navigate = useNavigate()

  return (
    <>
      <h1 className="h3 mb-3">Catálogo</h1>
      <Row xs={1} sm={2} lg={3} className="g-3">
        {productos.map((item) => (
          <Col key={item.id}>
            <TarjetaProducto
              producto={item}
              onVerDetalle={() => navigate(`/producto/${item.id}`)}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}