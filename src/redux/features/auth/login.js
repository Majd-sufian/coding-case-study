import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { loginUser } from "./loginSlice";

const clientId =
  "598425893169-sv2g310kcf9v50hqont944su8npnkeig.apps.googleusercontent.com";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={(res) => dispatch(loginUser(res.profileObj))}
        onFailure={(res) => console.log("Login Failed:", res)}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
export default Login;
