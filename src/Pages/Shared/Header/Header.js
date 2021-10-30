import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { getAuth, signOut } from "@firebase/auth";

const Header = () => {
    const [loginUser, setLoginUser] = useContext(AuthContext);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoginUser("");
      })
      .catch((error) => {
      });
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            Advanture
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              <Link class="nav-link" to="/home">
                home
              </Link>
              { loginUser?.email? <Link onClick={handleLogout} class="nav-link" to="/login">
                logOut {''}{loginUser?.displayName}
              </Link>
                 :
                <Link class="nav-link" to="/login">
                login
              </Link>
              }
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
