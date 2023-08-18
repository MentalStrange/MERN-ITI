// src/App.jsx

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
      </Routes>
    </>
  );
};

export default App;
