import Topbar from "../common/Topbar/Topbar";
import { Outlet, useParams } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <Outlet />
    </div>
  );
}

export default Layout;
