import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PostList from "../PostList/PostList";
import { data } from "../../data/data";
import React from "react";
export default function Homepage() {
  console.log("data", data);
  return (
    <div>
      <Header />
      {data.map((item) => (
        <React.Fragment key={item}>
          <Banner blog={item.blog} />
          <PostList posts={item.posts} />
        </React.Fragment>
      ))}

      <Footer />
    </div>
  );
}
