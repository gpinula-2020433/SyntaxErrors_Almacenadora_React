function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white px-4 shadow fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="navbar-brand text-white fw-semibold fs-20">INVENTORY MANAGEMENT SYSTEM</div>
        <div className="d-flex gap-4">
          <a href="#" className="text-light text-decoration-none">Home</a>
          <a href="#" className="text-light text-decoration-none">Products</a>
          <a href="#" className="text-light text-decoration-none">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
