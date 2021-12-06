import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { logoutUser } from "./loginSlice";

const clientId =
  "598425893169-sv2g310kcf9v50hqont944su8npnkeig.apps.googleusercontent.com";

function LogOut() {
  const dispatch = useDispatch();

  const onSignoutSuccess = (res) => {
    dispatch(logoutUser());
    window.location.reload(false);
    alert("You have been logged out successfully");
    console.clear();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Sign Out"
        onLogoutSuccess={(res) => onSignoutSuccess(res)}
      ></GoogleLogout>
    </div>
  );
}
export default LogOut;
