import Logo from "./Button/Logo";
import "./header.css";
import "./button.css";
import Write from "./Button/write";
import Mypage from "./Button/Mypage";
import Logout from "./Button/Logout";
import Login from "./Button/Login";
import Resiter from "./Button/Resiter";

export default function Header() {
  return (
    <div>
      <header>
        <div className="max-width">
          <Logo />
          <ul>
            <Mypage />
            <Write />
            <Logout />
            <Login />
            <Resiter />
          </ul>
        </div>
      </header>
    </div>
  );
}
