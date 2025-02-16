import "../../css/Button.css";

export function Button({name}) {
  return (
    <>
      <div className="button_div">
        <button type="submit" className="button btn-sent">
          {name}
        </button>
      </div>
    </>
  );
}
