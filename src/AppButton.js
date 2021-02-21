const AppButton = ({ text, onClick }) => {
  const style = {
    color: "black",
    backgroundColor: "#26D863",
    padding: "10px",
    fontFamily: "Arial",
    borderRadius: "50px"
  };
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default AppButton;