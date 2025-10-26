import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer'; // Lo descomentaremos cuando lo creemos
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      {/* Header fijo en todas las páginas */}
      <Header />
      
      {/* Contenido principal - Aquí se renderizan las páginas */}
      <main className="main-content">
        <Outlet />
      </main>
      
      {/* Footer fijo en todas las páginas */}
      {/* <Footer /> */}
      {/* NOTA: Descomentaremos esto cuando creemos el Footer */}
    </div>
  );
};

export default Layout;