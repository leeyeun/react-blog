import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PostList from "../PostList/PostList";
import { data } from "../../data/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Homepage() {
  // console.log(posts.posts.posts);
  // console.log(posts.posts);
  // console.log(posts);

  return (
    <div>
      <Header />
      {data.map((item) => (
        <React.Fragment key={item}>
          <Banner blog={item.blog} />
          <PostList posts={item.posts} />
        </React.Fragment>
      ))}
      {/* <Banner blog={posts.posts.blog} />
      <PostList posts={posts.posts.posts} /> */}
      <Footer />
    </div>
  );
}
