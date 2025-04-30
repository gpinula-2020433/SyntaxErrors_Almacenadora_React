import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/client'>Clients</Link></li>
        <li><Link to='/suppliers'>Suppliers</Link></li>
        <li><Link to='/movement'>Movements</Link></li>
        <li><Link to='/report'>Reports</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
