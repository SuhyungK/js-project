const Button = ({ text, color }) => {
  const onButtonClick = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={onButtonClick} style={{ color: color }}>
      {text}
    </button>
  );
};

export default Button;
