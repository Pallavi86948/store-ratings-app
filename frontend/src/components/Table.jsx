const Table = ({ columns, data }) => {
  return (
    <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "10px" }}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length ? (
          data.map((row, i) => (
            <tr key={i}>
              {columns.map((c) => (
                <td key={c}>{row[c.toLowerCase()]}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} align="center">No data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default Table;
