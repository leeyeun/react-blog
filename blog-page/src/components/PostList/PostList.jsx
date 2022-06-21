import About from "../About/About";
import Post from "../Posts/Post";
import "./postlist.css";
import "./main.css";

export default function PostList(posts) {
  // console.log("data", data);
  console.log(posts);
  const datas = posts;
  console.log("data", datas);
  return (
    <main>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <ul className="posts">
          {datas.map((item) => (
            <Post key={item} posts={item} />
          ))}
        </ul>
        <About />
      </div>
    </main>
  );
}
