import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";

function ProfilePage() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col grow gap-4 items-start  ">
      <div className="font-extrabold text-4xl tracking-wider ">Account</div>
      <div className="text-xl tracking-wider">
        <span className="font-semibold">{user.fname + " " + user.lname}</span>,{" "}
        <span>{user.email}</span>
      </div>
      {user.verified ? (
        <div className="text-xl tracking-wider">Verified Account!</div>
      ) : (
        <div>Still Account was not verified, Check your email</div>
      )}
    </div>
  );
}

export default ProfilePage;
