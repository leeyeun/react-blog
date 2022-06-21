import profile_img from "../../../assets/profile.jpg";

export default function Mypage() {
  return (
    <li className="profile-img">
      <a href="#">
        <img src={profile_img} alt="My Page" />
      </a>
    </li>
  );
}
