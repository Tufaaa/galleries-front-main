import { useState } from "react";
import UserContext from "../context/UserContext";
import { API } from "../services/api";

const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const checkToken = () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email && password) {
      try {
        API.post("/login", { email, password }).then(({ data }) => {
          localStorage.setItem("access_token", data.authorisation.token);
          logInUser(data.user);
        });
      } catch (error) {
        console.error("Error while refreshing the token:", error);
      }
    }
  };

  const logInUser = (user) => {
    setUserState(user);
    setIsUserLoggedIn(true);
  };

  const logOutUser = () => {
    setUserState({});
    setIsUserLoggedIn(false);
  };

  const userContext = {
    user: userState,
    loggedIn: isUserLoggedIn,
    logInUser,
    logOutUser,
    checkToken,
  };
  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
