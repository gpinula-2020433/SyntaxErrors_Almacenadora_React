import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">INVENTORY MAGNAGEMENT SYSTEM</div>
      <div className="navbar-links">
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contacts</Link>
        <Link to="/login">Log in</Link>
      </div>
    </nav>
  );
}

export default Navbar;
