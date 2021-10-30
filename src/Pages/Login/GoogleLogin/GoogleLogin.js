import React, { useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useHistory, useLocation } from "react-router";
import { AuthContext } from "../../../Context/AuthProvider";
import initializeAuthorization from "../Firebase/firebase.init";

initializeAuthorization();
const GoogleLogin = () => {
    const [loginUser, setLoginUser] = useContext(AuthContext);
    const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
    const googleProvider = new GoogleAuthProvider();

  const googleHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setLoginUser(user);
        history.replace(from);
        console.log('jeba',user);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
    return <div>
    <button onClick={googleHandler} className='btn btn-primary'>Google sign in</button>
   </div>;
};

export default GoogleLogin;