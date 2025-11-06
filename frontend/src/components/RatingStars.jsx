const RatingStars = ({ value, onChange }) => {
  const handleClick = (rating) => onChange(rating);
  return (
    <div>
      {[1,2,3,4,5].map((num) => (
        <span
          key={num}
          style={{
            cursor: "pointer",
            color: num <= value ? "gold" : "gray",
            fontSize: "20px",
          }}
          onClick={() => handleClick(num)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
