import "./Link.css";
import Counter from "../Counter/Counter";

function Link({ children, img, count, onCounterClick }) {
  return (
    <div className="link-container">
      <a className="link" href="#">
        {children}
      </a>
      {count !== undefined && (
        <Counter count={count} onClick={onCounterClick} />
      )}
      {img && (
        <button
          className="image-button"
          onClick={() => console.log("Кнопка была нажата")}
        >
          <img src={img} alt="Изображение" className="link-image" />
        </button>
      )}
    </div>
  );
}

export default Link;
