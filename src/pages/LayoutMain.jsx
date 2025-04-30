import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../features/layout/navbar/navbar.jsx'
import Sidebar from '../features/layout/sidebar/sidebar.jsx'
import Footer from '../features/layout/footer/footer.jsx'

export const LayoutMain = () => {
  return (
    <div >
      <Navbar />
      <div >
        <Sidebar />
        <main >
          <Outlet/>
        </main>
      </div>
      <Footer />
    </div>
  )
}

