import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
import GalleryProvider from "./providers/GalleryProvider";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <GalleryProvider>
        <BrowserRouter>
          <Navbar />
          <App />
        </BrowserRouter>
      </GalleryProvider>
    </UserProvider>
  </React.StrictMode>
);
