import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import StoresBrowse from "./pages/User/StoresBrowse";
import OwnerDashboard from "./pages/Owner/OwnerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { ROLES } from "./utils/constants";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/admin/dashboard"
        element={<ProtectedRoute allowedRoles={["ADMIN"]}><AdminDashboard /></ProtectedRoute>}
      />
      <Route
        path="/user/stores"
        element={<ProtectedRoute allowedRoles={["USER"]}><StoresBrowse /></ProtectedRoute>}
      />
      <Route
        path="/owner/dashboard"
        element={<ProtectedRoute allowedRoles={["OWNER"]}><OwnerDashboard /></ProtectedRoute>}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
