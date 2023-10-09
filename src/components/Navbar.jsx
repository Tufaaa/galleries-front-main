import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router";
import { logOut } from "../services/userService";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, logOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    const shouldLogOut = window.confirm("Are you sure?");
    if (shouldLogOut) {
      logOut().then(({ data }) => {
        logOutUser(data);
        localStorage.removeItem("access_token");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/login");
      });
    }
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <h1 className="fs-4 d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          Galleries
        </h1>

        <ul className="nav nav-pills">
          <li className="nav-item button-spacing">
            <Link to="/" className="btn btn-secondary" aria-current="page">
              All Galleries
            </Link>
          </li>

          {loggedIn ? (
            <>
              <li className="nav-item button-spacing">
                <Link
                  to="/create"
                  className="btn btn-secondary"
                  aria-current="page"
                >
                  Create New Gallery
                </Link>
              </li>{" "}
              <li className="nav-item button-spacing">
                <Link
                  to="/my-galleries"
                  className="btn btn-secondary"
                  aria-current="page"
                >
                  My Galleries
                </Link>
              </li>{" "}
              <li className="nav-item button-spacing">
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  onClick={() => handleLogOut()}
                >
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item button-spacing">
                <Link
                  to="/register"
                  className="btn btn-secondary"
                  aria-current="page"
                >
                  Register
                </Link>
              </li>
              <li className="nav-item button-spacing">
                <Link
                  to="/login"
                  className="btn btn-secondary"
                  aria-current="page"
                >
                  Log In
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </div>
  );
};
export default Navbar;
