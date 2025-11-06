import { useEffect, useState } from "react";
import api from "../../api/axios";
import RatingStars from "../../components/RatingStars";

const StoresBrowse = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    api.get("/admin/stores").then((res) => setStores(res.data)).catch(() => {});
  }, []);

  const handleRatingChange = (storeId, rating) => {
    api.post(`/stores/${storeId}/ratings`, { rating }).then(() => alert("Rating submitted"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Stores</h2>
      {stores.map((s) => (
        <div key={s.id} style={{ marginBottom: "10px" }}>
          <p><b>{s.name}</b> - {s.address}</p>
          <p>Avg Rating: {s.avg_rating}</p>
          <RatingStars value={s.userRating || 0} onChange={(r) => handleRatingChange(s.id, r)} />
        </div>
      ))}
    </div>
  );
};

export default StoresBrowse;
