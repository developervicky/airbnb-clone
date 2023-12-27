import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";

function ProfilePage() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col gap-8 items-start  ">
      <div className="flex flex-col gap-6">
        <div className="font-extrabold text-2xl md:text-4xl tracking-wider ">
          Account
        </div>
        <div className="text-lg md:text-2xl flex flex-col gap-1 tracking-wider">
          <span className="font-semibold">
            {user.fname + " " + user.lname},
          </span>
          <span>{user.email}</span>
        </div>
      </div>
      <div>
        {user.verified ? (
          <div className="text-xl tracking-wider border-2 p-2 rounded-xl border-primary text-white bg-primary">
            Verified Account!
          </div>
        ) : (
          <div>Still Account was not verified, Check your email</div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
