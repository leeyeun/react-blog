import "./viewbanner.css";
export default function ViewBanner() {
  return (
    <div
      className="view-banner"
      style={{ background: "url(/assets/post-background6.jpg)" }}
    >
      <div className="max-width">
        <div className="banner-contents">
          <p className="today">
            May <em>25</em> Wednesday
          </p>
        </div>
      </div>
    </div>
  );
}
