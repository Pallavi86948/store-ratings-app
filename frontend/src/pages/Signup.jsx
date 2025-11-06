import { useState } from "react";
import api from "../api/axios";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", address: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", form);
      setMsg("Signup successful! You can now log in.");
      setForm({ name: "", email: "", address: "", password: "" });
    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>
      {msg && <p>{msg}</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
