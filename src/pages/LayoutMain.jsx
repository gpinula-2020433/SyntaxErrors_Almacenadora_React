import Navbar from '../features/layout/navbar/navbar.jsx';
import Sidebar from '../features/layout/sidebar/sidebar.jsx';
import Footer from '../features/layout/footer/footer.jsx';

const LayoutMain = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Navbar />

      <div className="d-flex" style={{ marginTop: '10px' }}>
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ marginLeft: '220px' }}>
          <h2>Main Content</h2>
          <p>Welcome to the inventory system.</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default LayoutMain;

