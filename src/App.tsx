import "./styles.css";
import IMAGE from "./react.png";
import logo from "./logo.svg";

export default function App() {
  return (
    <>
      <h1>React Typescript Webpack Starter Template</h1>;
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={logo} alt="React Logo" width="300" height="200" />
    </>
  );
}
