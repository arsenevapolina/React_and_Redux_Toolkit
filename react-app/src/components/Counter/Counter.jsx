import "./Counter.css";

function Counter({ count, onClick }) {
  return (
    <button className="counter" onClick={onClick}>
      {count}
    </button>
  );
}

export default Counter;