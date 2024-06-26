import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import pro1 from "../../images/pro1.png";
import ProfileShortcut from "../Login/ProfileShortcut/ProfileShortcut";
import "./Navbar.css";

// navbar area for all

const Navbar = ({ fixed }) => {
  const { user, logOut, handelLogout } = useAuth();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const barsIcon = <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>;
  const [profileState, setProfileState] = useState("Off");

  // function for user img
  let loginPhoto = () => {
    if (user.photoURL === null) {
      return pro1;
    } else {
      return user.photoURL;
    }
  };
  // toggle login logout function
  const toggleText = () => {
    setProfileState((state) => (state === "On" ? "Off" : "On"));
  };

  return (
    <>
      <div className="  bg-gradient-to-b from-pink-500  to-pink-600 sticky top-0 z-50">
        <div className="flex flex-wrap py-2 transition-all delay-1000 full-width-all m-auto container">
          <div className="w-full">
            <nav className="relative flex flex-wrap items-center justify-between rounded">
              <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                  <Link
                    className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-gray-600 text-3xl md:text-5xl font-extrabold"
                    to="/"
                  >
                    <span className="text-white"> Mimoo-Travel</span>
                  </Link>
                  <button
                    className="primary-color cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {barsIcon}
                  </button>
                </div>
                <div
                  className={
                    "lg:flex flex-grow items-center justify-center" +
                    (menuOpen ? " flex" : " hidden")
                  }
                  id="example-navbar-info"
                >
                  <div className="flex flex-col lg:flex-row list-none lg:ml-auto items-center	">
                    <div className="nav-item">
                      <NavLink
                        className="manu-item p-2 text-lg font-bold text-white "
                        to="/home"
                      >
                        Home
                      </NavLink>
                    </div>

                    <div className="nav-item">
                      <NavLink
                        className="manu-item p-2 text-lg font-bold text-white"
                        to="/services"
                      >
                        Serivces
                      </NavLink>
                    </div>
                    <div className="nav-item">
                      <NavLink
                        className="manu-item p-2 text-lg font-bold text-white"
                        to="/appointment"
                      >
                        Book-A-Trip
                      </NavLink>
                    </div>

                    {/* user img login log-out */}
                    <div className="profile-holder py-3 ml-4">
                      {user.email || user.displayName ? (
                        <img
                          style={{ cursor: "pointer" }}
                          onClick={toggleText}
                          className="w-12 rounded-full"
                          src={loginPhoto()}
                          alt=""
                        />
                      ) : (
                        <NavLink
                          className="manu-item p-2 text-lg font-bold text-pink-500 bg-white hover:text-pink-800 text-white rounded-md"
                          to="/login"
                        >
                          {" "}
                          LogIn{" "}
                        </NavLink>
                      )}
                      <div className="nav-item my-4 lg:my-0 proflie-item">
                        {user.email || user.displayName ? (
                          <div
                            className={
                              profileState === "Off"
                                ? "active-profile-icon-area"
                                : "profile-icon-area"
                            }
                          >
                            <ProfileShortcut></ProfileShortcut>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
