import "./Link.css";

function Link({ children, img }) {
  return (
    <div className="link-container">
      <a className="link" href="#">
        {children}
      </a>
      {img && <img src={img} alt="Картинка" />}
    </div>
  );
}

export default Link;
