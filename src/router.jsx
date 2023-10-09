import { Route, Routes } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRouter";
import AddGallery from "./pages/AddGallery";
import ViewGallery from "./pages/ViewGallery";
import MyGalleries from "./pages/MyGalleries";
import Home from "./pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/add-gallery"
        element={
          <PrivateRoute>
            <AddGallery />
          </PrivateRoute>
        }
      />
      <Route path="galleries/:id" element={<ViewGallery />}></Route>
      <Route
        path="my-galleries"
        element={
          <PrivateRoute>
            <MyGalleries />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default Router;
