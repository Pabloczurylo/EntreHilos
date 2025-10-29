import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* MODIFICADO: Cambiado Container por Container fluid para ocupar todo el ancho */}
      <Container fluid className="px-4">
        <Row className="footer-content">
          {/* Columna 1: Logo y descripción */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon">∞</span>
                <span className="logo-text">EntreHilos</span>
              </div>
              <p className="footer-description">
                Tejiendo sueños, un hilo a la vez. Creaciones únicas hechas con amor y dedicación para ti.
              </p>
            </div>
          </Col>

          {/* Columna 2: Ayuda */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-title">Ayuda</h5>
            <ul className="footer-links">
              <li>
                <Link to="/envios-devoluciones">Envíos y Devoluciones</Link>
              </li>
              <li>
                <Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/contacto">Contáctanos</Link>
              </li>
            </ul>
          </Col>

          {/* Columna 3: Categorías */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">Categorías</h5>
            <ul className="footer-links">
              <li>
                <Link to="/tienda?categoria=amigurumis">Amigurumis</Link>
              </li>
              <li>
                <Link to="/tienda?categoria=accesorios">Accesorios</Link>
              </li>
              <li>
                <Link to="/tienda?categoria=decoracion">Decoración</Link>
              </li>
            </ul>
          </Col>

          {/* Columna 4: Redes Sociales */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">Síguenos</h5>
            <div className="social-links">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <BsFacebook />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <BsInstagram />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                <BsYoutube />
              </a>
            </div>
          </Col>
        </Row>

        {/* Línea divisoria */}
        <hr className="footer-divider" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="footer-copyright">
              © {new Date().getFullYear()} EntreHilos. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;