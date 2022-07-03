import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import PostView from "./components/PostView/PostView";
import "./reset.css";
import "./global.css";
import { data } from "../src/data/data";
// import { useEffect, useState } from "react";
// import axios from "axios";
function App() {
    console.log(data);
    // const [postsData, setPostData] = useState([]);
    // useEffect(() => {
    //   axios
    //     .get("/data.json")
    //     .then((res) => {
    //       setPostData(res.data);
    //     })
    //     .catch((err) => console.log(err));
    // }, []);
    // console.log(postsData);

    return (
        <div className="App">
            <BrowserRouter>
                {/* <Homepage posts={postsData} /> */}
                <Route exact path="/" component={Homepage}></Route>
                {/* <Route exact path="/postview/:id" component={PostView}></Route> */}
                {data.map((data) => (
                    <Route
                        exact
                        path="/postview/:id"
                        render={() => (
                            <PostView key={data} posts={data.posts} />
                        )}
                    ></Route>
                ))}
            </BrowserRouter>
        </div>
    );
}

export default App;
