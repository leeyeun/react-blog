export default function PostButton() {
  return (
    <>
      <div className="btn-group">
        <a href="/" className="btn-modify">
          <span className="a11y-hidden">modify</span>
        </a>
        <button type="button" className="btn-delete">
          <span className="a11y-hidden">delete</span>
        </button>
      </div>
      <a href="/" className="btn-back">
        <span className="a11y-hidden">Back</span>
      </a>
    </>
  );
}
