import "./styles.css";
import IMAGE from "./react.png";
import logo from "./logo.svg";
// To run the build, goto build folder and run npx serve
export default function App() {
  return (
    <>
      <h1>React Typescript Webpack Starter Template {process.env.name}</h1>;
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={logo} alt="React Logo" width="300" height="200" />
    </>
  );
}
