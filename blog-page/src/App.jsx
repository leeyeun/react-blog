import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import PostView from "./components/PostView/PostView";
import "./reset.css";
import "./global.css";
import { data } from "../src/data/data";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Homepage}></Route>
        {/* <Route exact path="/postview" component={PostView}></Route> */}
        <Route exact path="/postview/:id" render={() => <PostView />}></Route>
      </BrowserRouter>
      {/* <Homepage />
      <PostView /> */}
    </div>
  );
}

export default App;
