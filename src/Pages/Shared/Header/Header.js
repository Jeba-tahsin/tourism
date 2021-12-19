import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { getAuth, signOut } from "@firebase/auth";
import {MdTour} from 'react-icons/md';

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
    <div className='sticky-top'>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <div className=' ps-4 text-warning'>
            <MdTour/>
          </div>
          <Link class="navbar-brand" href="#">
            <span className='text-warning fst-italic'>Advanture</span>
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

            <div class="navbar-nav ">
              <Link class="nav-link active text-light" aria-current="page" to="/home">
                Home
              </Link>
              {loginUser?.email && <Link class="nav-link text-light" to="/dashBoard">
                DashBoard
              </Link>}
              {/* {loginUser?.email && <Link class="nav-link text-light" to="/manageBook">
                ManageBooking
              </Link>}

              {loginUser?.email && <Link class="nav-link text-light" to="/myBooking">
                MyOrder
              </Link>}
              {loginUser?.email && <Link class="nav-link text-light" to="/addService">
                AddService
              </Link>} */}

              { loginUser?.email? <Link onClick={handleLogout} class="nav-link text-light" to="/login">
                logOut {''}{loginUser?.displayName}
              </Link>
                 :
                <Link class="nav-link text-light" to="/login">
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
