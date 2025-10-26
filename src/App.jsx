import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/tienda" element={<h1>Tienda</h1>} />
            <Route path="/sobre-nosotros" element={<h1>Sobre Nosotros</h1>} />
            <Route path="/contacto" element={<h1>Contacto</h1>} />
            <Route path="/carrito" element={<h1>Carrito</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;