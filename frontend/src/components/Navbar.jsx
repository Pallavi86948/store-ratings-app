import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: "10px", background: "#4caf50", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
      {user ? (
        <>
          {user.role === "ADMIN" && <Link to="/admin/dashboard" style={{ color: "white", marginRight: "10px" }}>Admin</Link>}
          {user.role === "USER" && <Link to="/user/stores" style={{ color: "white", marginRight: "10px" }}>Stores</Link>}
          {user.role === "OWNER" && <Link to="/owner/dashboard" style={{ color: "white", marginRight: "10px" }}>Owner</Link>}
          <button onClick={logout} style={{ marginLeft: "10px" }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ color: "white", marginRight: "10px" }}>Login</Link>
          <Link to="/signup" style={{ color: "white" }}>Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
