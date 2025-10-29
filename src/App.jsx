import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from './components/layout/Layout';
import ProductCard from './components/common/ProductCard';
import { products } from './data/products';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* MODIFICADO: Usamos Layout como componente padre */}
        <Route path="/" element={<Layout />}>
          {/* MODIFICADO: Ruta Home con ProductCards para visualizar el componente */}
          <Route index element={
            <Container fluid className="px-4 py-5">
              <h1 className="text-center mb-2">Productos Destacados</h1>
              <p className="text-center text-gray mb-5">
                Descubre nuestras creaciones hechas con amor
              </p>
              
              {/* Grid de productos */}
              <Row className="g-4">
                {products.map(product => (
                  <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Container>
          } />
          
          <Route path="tienda" element={
            <div className="container">
              <h1 className="text-center my-5">Tienda</h1>
            </div>
          } />
          
          <Route path="sobre-nosotros" element={
            <div className="container">
              <h1 className="text-center my-5">Sobre Nosotros</h1>
            </div>
          } />
          
          <Route path="contacto" element={
            <div className="container">
              <h1 className="text-center my-5">Contacto</h1>
            </div>
          } />
          
          <Route path="carrito" element={
            <div className="container">
              <h1 className="text-center my-5">Carrito</h1>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;