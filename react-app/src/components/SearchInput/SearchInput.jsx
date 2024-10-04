import "./SearchInput.css";

function SearchInput({
  img,
  placeholder,
  value,
  onChange,
  onKeyDown,
  onButtonClick,
}) {
  return (
    <form className="form-wrapper" onSubmit={(e) => e.preventDefault()}>
      {img && (
        <button type="button" className="input-button" onClick={onButtonClick}>
          <img src={img} alt="Картинка поиска" className="input-img" />
        </button>
      )}
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
