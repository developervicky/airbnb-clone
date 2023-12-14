import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
function AccountPage() {
  const { ready, user } = useContext(UserContext);
  if (!ready) {
    return (
      <div className="flex h-96 justify-center items-end">
        <RiseLoader color="#FE385D" />
      </div>
    );
  }
  if (!user && ready) {
    return <Navigate to={"/signin"} />;
  }
  return <>hello</>;
}

export default AccountPage;
