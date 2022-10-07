import React from "react";

function AdminRoot() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AdminRoot;
