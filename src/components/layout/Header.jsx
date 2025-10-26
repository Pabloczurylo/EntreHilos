import { useState } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { BsSearch, BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0); // Temporal, luego viene del Context

  return (
    <Navbar bg="white" expand="lg" className="header-navbar">
      {/* MODIFICADO: Cambiado Container por Container fluid para ocupar todo el ancho */}
      <Container fluid className="px-4">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="logo-brand">
          <div className="logo-container">
            <span className="logo-icon">∞</span>
            <span className="logo-text">EntreHilos</span>
          </div>
        </Navbar.Brand>

        {/* Toggle para mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Menú de navegación */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/tienda" className="nav-link-custom">
              Tienda
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre-nosotros" className="nav-link-custom">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="nav-link-custom">
              Contacto
            </Nav.Link>
          </Nav>

          {/* Barra de búsqueda */}
          <Form className="d-flex search-form">
            <div className="search-input-wrapper">
              <BsSearch className="search-icon" />
              <FormControl
                type="search"
                placeholder="Buscar..."
                className="search-input"
                aria-label="Buscar"
              />
            </div>
          </Form>

          {/* Botón de carrito */}
          <Button 
            as={Link} 
            to="/carrito" 
            variant="primary" 
            className="cart-button"
          >
            <BsCart3 className="cart-icon" />
            <span className="cart-text">Carrito</span>
            {cartItemsCount > 0 && (
              <Badge bg="danger" className="cart-badge">
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;