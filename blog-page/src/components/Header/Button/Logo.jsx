import logo from "../../../assets/Logo.svg";

export default function Logo() {
  return (
    <h1>
      <a href="/">
        <img src={logo} alt="My Blog" />
      </a>
    </h1>
  );
}
