import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="bg-secondary text-light p-3 d-flex flex-column" style={{ width: '220px', minHeight: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
      <div className="d-flex flex-column justify-content-center flex-grow-1" style={{ position: 'relative', top: '-40px' }}>
        <ul className="list-unstyled mt-3">
          <li className="py-2 px-3 rounded hover-sidebar">Products</li>
          <li className="py-2 px-3 rounded hover-sidebar">Customer</li>
          <li className="py-2 px-3 rounded hover-sidebar">Suppliers</li>
          <li className="py-2 px-3 rounded hover-sidebar">Movements</li>
          <li className="py-2 px-3 rounded hover-sidebar">Reports</li>
        </ul>
      </div>

    </aside>
  );
}

export default Sidebar;