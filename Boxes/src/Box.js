function Box({ id, color = "green", width = 5, height = 5, handleRemove }) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: color,
        }}
      />
      <button onClick={remove}>Delete</button>
    </div>
  );
}

export default Box;
