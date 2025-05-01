import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../features/layout/navbar/navbar.jsx'
import Sidebar from '../features/layout/sidebar/sidebar.jsx'
import Footer from '../features/layout/footer/footer.jsx'

export const LayoutMain = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Navbar />
      <div className="d-flex" style={{ marginTop: '10px' }}></div>
      <div >
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ marginLeft: '220px' }}>
          <Outlet/>
        </main>
      </div>
      <Footer />
    </div>
  )
}

