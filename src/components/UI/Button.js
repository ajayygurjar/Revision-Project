import "./Button.css";

const Button = (props) => {
  return (
    <button className={`button`} type={props.type || "submit"}>
      {props.children}
    </button>
  );
};
export default Button;
