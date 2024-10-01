import "./SearchInput.css";

function SearchInput({ img, placeholder, value, onChange, onKeyDown }) {
  return (
    <form className="form-wrapper">
      {img && <img src={img} alt="Картинка поиска" className="input-img" />}
      <input
        type="text"
        name="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
        onKeyDown={onKeyDown}
      />
    </form>
  );
}

export default SearchInput;
