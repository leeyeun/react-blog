import "./category.css";
import "./author.css";
import "./post.css";
import PostView from "../PostView/PostView";
import { Link } from "react-router-dom";
import Author from "./Author";
import Category from "./Category";
export default function Post(posts) {
  console.log("posts", posts);
  return (
    <>
      {/* {posts.posts.map((item) => ( */}
      <li>
        <Link to="/postview" className="post">
          <article>
            <img src={posts.posts.thumbnail} alt="" />
            <div className="contents-wrap">
              <Category posts={posts.posts} />

              <h3>{posts.posts.title}</h3>
              <Author posts={posts.posts} />
              <p className="post-description">{posts.posts.contents[0].text}</p>
            </div>
          </article>
        </Link>
      </li>
      {/* ))} */}
    </>
  );
}
