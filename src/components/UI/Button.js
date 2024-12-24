import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={`button`}
      type={props.type || "submit"}
      onCLick={props.onCLick}
    >
      {props.children}
    </button>
  );
};
export default Button;
