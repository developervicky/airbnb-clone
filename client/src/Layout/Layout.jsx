import React from "react";
import Topbar from "../common/Topbar/Topbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <Outlet />
    </div>
  );
}

export default Layout;
