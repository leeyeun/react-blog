import "./about.css";
import profile_img from "../../assets/profile.jpg";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Github from "../../assets/Github.svg";
export default function About() {
  return (
    <aside className="about">
      <h2>About Me</h2>
      <img src="./assets/profile.jpg" alt="" className="user-profile" />
      <p className="user-name">Chilli</p>
      <p className="user-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <h3>Categories</h3>
      <ul className="categories">
        <li>
          <a href="#">Life</a>
        </li>
        <li>
          <a href="#">Style</a>
        </li>
        <li>
          <a href="#">Tech</a>
        </li>
        <li>
          <a href="#">Sport</a>
        </li>
        <li>
          <a href="#">Photo</a>
        </li>
        <li>
          <a href="#">Develop</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
      </ul>
      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Github} alt="GitHub" />
          </a>
        </li>
      </ul>
    </aside>
  );
}
