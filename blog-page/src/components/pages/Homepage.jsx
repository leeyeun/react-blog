import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import PostList from "../PostList/PostList";
import { data } from "../../data/data";
import React from "react";
export default function Homepage() {
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
