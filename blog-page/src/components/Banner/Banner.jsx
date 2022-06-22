import "./banner.css";
export default function Banner(blog) {
  return (
    <div className="banner">
      <div className="max-width">
        <div className="banner-contents">
          <p className="sub-text">{blog.blog.subTitle}</p>
          <p className="main-text">{blog.blog.mainTitle}</p>
          <p className="description">{blog.blog.description}</p>
        </div>
      </div>
    </div>
  );
}
