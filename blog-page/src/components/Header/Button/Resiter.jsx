import register_img from "../../../assets/icon-register.svg";

export default function Resiter(islogin) {
    return (
        <li className="only-pc">
            <a href="#" className="button gray">
                <img src={register_img} alt="" />
                <span>Register</span>
            </a>
        </li>
    );
}
