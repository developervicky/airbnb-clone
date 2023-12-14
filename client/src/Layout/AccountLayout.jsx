import React from "react";

import { Outlet } from "react-router-dom";
import AccountTopbar from "../common/Account/AccountTopbar";

function AccountLayout() {
  return (
    <div className="flex flex-col">
      <AccountTopbar />
      <Outlet />
    </div>
  );
}

export default AccountLayout;
