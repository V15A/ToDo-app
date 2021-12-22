import { Link } from "react-router-dom";
import logo from "./logo.svg";

/**
 * Function for sidemenu.
 *
 * @returns sidemenu which can be used to navigate the app
 */
export default function Sidemenu() {
  return (
    <div>
      <nav className="navbar" id="navid">
        <a>
          <Link to="/">Main page</Link>
        </a>
        <a>
          <Link to="/info">Info</Link>
        </a>
        <a>
          <Link to="/history">History</Link>
        </a>
        <a className="icon" onClick={open}>
          <span>{logo}</span>
        </a>
      </nav>
    </div>
  );
}
// this function opens the side menu of the app and displays the options
// available (including but not limited to task view, info and history)
let open = function () {
  console.log("JAA");
  var x = document.getElementById("navid");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
};
