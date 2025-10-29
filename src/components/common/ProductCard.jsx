import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  // Función para agregar al carrito (temporal, luego usaremos Context)
  const handleAddToCart = (e) => {
    e.preventDefault(); // Evitar navegación si está dentro de un Link
    console.log('Producto agregado:', product.name);
    // TODO: Integrar con CartContext
  };

  return (
    <Card className="product-card">
      {/* Link a la página de detalle del producto */}
      <Link to={`/producto/${product.id}`} className="product-link">
        {/* Imagen del producto con fondo de color */}
        <div className={`product-image-wrapper bg-${product.bgColor}`}>
          <Card.Img 
            variant="top" 
            src={product.image} 
            alt={product.name}
            className="product-image"
          />
        </div>

        {/* Cuerpo de la tarjeta */}
        <Card.Body className="product-body">
          {/* Nombre del producto */}
          <Card.Title className="product-name">
            {product.name}
          </Card.Title>

          {/* Precio */}
          <div className="product-price-wrapper">
            {product.oldPrice && (
              <span className="product-price-old">${product.oldPrice}</span>
            )}
            <span className="product-price">${product.price}</span>
          </div>
        </Card.Body>
      </Link>

      {/* Botón de añadir al carrito */}
      <Card.Footer className="product-footer">
        <Button 
          variant="secondary" 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Añadir al Carrito
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;