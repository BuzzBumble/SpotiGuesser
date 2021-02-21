

const AppButton = ({ text, onClick }) => {
  const style = {
    color: "black",
    backgroundColor: "#26D863",
    padding: "10px",
    outline: 0,
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    margin: 20,
  };
  return (
    <button style={style} onclick={onClick}>
      {text}
    </button>
  );
};

export default AppButton;