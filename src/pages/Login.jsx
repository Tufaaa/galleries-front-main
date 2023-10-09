import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    loginUser(user.email, user.password)
      .then(({ data }) => {
        loginUser(data.user);
        localStorage.setItem("access_token", data.authorisation.token);
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);

        setError("");
        navigate("/");
      })
      .catch(() => {
        setError("Invalid email or password. Please try again.");
      });

    setUser({
      email: "",
      password: "",
    });
  };

  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2 className="fw-bold mb-2 text-uppercase text-warning">Login</h2>
        <p className="h3 mb-3 fw-normal">
          Please enter your login and password!
        </p>

        <div className="form-outline form-white mb-4">
          <input
            type="email"
            className="form-control form-control-lg"
            id="floatingInput"
            name="email"
            onChange={handelInputChange}
            value={user.email}
            required
          />
          <label className="form-label" for="typeEmailX">
            Email
          </label>
        </div>

        <div className="form-outline form-white mb-4">
          <input
            type="password"
            className="form-control form-control-lg"
            id="floatingPassword"
            name="password"
            onChange={handelInputChange}
            value={user.password}
            required
          />
          <label className="form-label" for="typePasswordX">
            Password
          </label>
        </div>
        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          disabled={!user.email || !user.password}
        >
          Login
        </button>
        {error && <div className="alert alert-danger mt-5">{error}</div>}
      </form>
    </main>
  );
};

export default Login;
