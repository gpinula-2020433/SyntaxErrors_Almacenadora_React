import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">INVENTORY MAGNAGEMENT SYSTEM</div>
      <div className="navbar-links">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
