import React from 'react'

import Navbar from '../features/layout/navbar/navbar.jsx'
import Sidebar from '../features/layout/sidebar/sidebar.jsx'
import Footer from '../features/layout/footer/footer.jsx'

const LayoutMain = () => {
  return (
    <div >
      <Navbar />
      <div >
        <Sidebar />
        <main >
          <h1>Products</h1>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default LayoutMain
