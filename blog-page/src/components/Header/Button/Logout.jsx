import logout_img from "../../../assets/icon-logout.svg";

export default function Logout(islogin) {
    return (
        <li>
            <button className="button white">
                <img src={logout_img} alt="" />
                <span>Logout</span>
            </button>
        </li>
    );
}
