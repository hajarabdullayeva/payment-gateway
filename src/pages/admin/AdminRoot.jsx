import { Footer, Header } from 'antd/lib/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminRoot() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AdminRoot
