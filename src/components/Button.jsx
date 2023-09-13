const Button = ({ onClick, children, extraClassName }) => {
  return (
    <button className={`btn ${extraClassName}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
