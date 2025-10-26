import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* MODIFICADO: Usamos Layout como componente padre */}
        <Route path="/" element={<Layout />}>
          {/* Todas estas rutas se renderizan dentro del <Outlet /> del Layout */}
          <Route index element={
            <div className="container">
              <h1 className="text-center my-5">Home</h1>
            </div>
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