import logoin_img from "../../../assets/icon-login.svg";

export default function Login(islogin) {
    return (
        <li>
            <a href="#" className="button gray">
                <img src={logoin_img} alt="" />
                <span>Login</span>
            </a>
        </li>
    );
}
