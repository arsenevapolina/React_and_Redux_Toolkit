import "./Button.css";

function Button({ onClick, text }) {
  return (
    <button onClick={onClick} className="button accent">
      {text}
    </button>
  );
}

export default Button;