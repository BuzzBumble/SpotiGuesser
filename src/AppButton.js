const AppButton = ({ text, onClick, enabled }) => {
  const style = {
    color: "black",
    backgroundColor: "#26D863",
    padding: "10px",
    outline: 0,
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    margin: 10,
  };

  return (
    <button style={style} onClick={onClick} disabled={!enabled}>
      {text}
    </button>
  );
};

export default AppButton;
