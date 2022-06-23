import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PostList from "../PostList/PostList";
// import { data } from "../../data/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Homepage() {
  const [postsData, setPostData] = useState([]);
  const [datas, setDatas] = useState(false);
  // console.log("data", data);
  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        setPostData(res.data);
        console.log(postsData);
      })
      .catch((err) => console.log(err));

    // console.log(postsData);
  }, [datas]);

  const datalist = () => {
    // axios
    //   .get("/data.json")
    //   .then((res) => setPostData(res.data))
    //   .catch((err) => console.log(err));
    // console.log(postsData);
  };

  return (
    <div>
      <Header />
      {/* {data.map((item) => (
        <React.Fragment key={item}>
          <Banner blog={item.blog} />
          <PostList posts={item.posts} />
        </React.Fragment>
      ))} */}

      <Footer />
    </div>
  );
}
