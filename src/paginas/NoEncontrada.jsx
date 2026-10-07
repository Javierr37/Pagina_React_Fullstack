import { Link } from 'react-router'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

export default function NoEncontrada() {
  return (
    <div className="text-center mt-5">
      <Alert variant="danger">
        <h2>Error 404</h2>
        <p>La página que buscas no existe en nuestra tienda.</p>
      </Alert>
      <Button as={Link} to="/" variant="primary">Volver al Inicio</Button>
    </div>
  )
}