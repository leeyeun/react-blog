import Logo from "./Button/Logo";
import "./header.css";
import "./button.css";
import Write from "./Button/write";
import Mypage from "./Button/Mypage";
import Logout from "./Button/Logout";
import Login from "./Button/Login";
import Resiter from "./Button/Resiter";
import { useState } from "react";

export default function Header() {
    const [islogin, setIslogin] = useState(true);

    const handleLogin = () => {
        setIslogin(true);
    };

    const handleLogout = () => {
        setIslogin(false);
    };
    return (
        <div>
            <header>
                <div className="max-width">
                    <Logo />
                    <ul>
                        <Mypage />
                        <Write />
                        {islogin ? (
                            <Logout islogin={handleLogin} />
                        ) : (
                            <>
                                <Login islogin={handleLogout} />
                                <Resiter islogin={handleLogout} />
                            </>
                        )}
                    </ul>
                </div>
            </header>
        </div>
    );
}
