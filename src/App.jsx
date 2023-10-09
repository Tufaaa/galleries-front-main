import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";
import UserProvider from "./providers/UserProvider";
import Router from "./router";
import "./index.css";

const App = () => {
  const { checkToken } = useContext(UserContext);
  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <UserProvider>
      <Navbar />
      <Router />
    </UserProvider>
  );
};

export default App;
