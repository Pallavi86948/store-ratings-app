import { useEffect, useState } from "react";
import api from "../../api/axios";

const OwnerDashboard = () => {
  const [ratings, setRatings] = useState([]);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    api.get("/owner/my-store/ratings").then((res) => setRatings(res.data));
    api.get("/owner/my-store/average").then((res) => setAvg(res.data.avg));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Store Dashboard</h2>
      <p>Average Rating: {avg}</p>
      <table border="1" cellPadding="5">
        <thead>
          <tr><th>User</th><th>Email</th><th>Rating</th></tr>
        </thead>
        <tbody>
          {ratings.map((r) => (
            <tr key={r.id}>
              <td>{r.userName}</td>
              <td>{r.email}</td>
              <td>{r.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OwnerDashboard;
