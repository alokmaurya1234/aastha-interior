import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/projects/:projectId"
        element={<ProjectDetails />}
      />

      <Route
        path="/services/:serviceId"
        element={<ServiceDetails />}
      />
    </Routes>
  );
}

export default App;