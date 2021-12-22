import { slide as Menu } from "react-burger-menu";

let Sidebar = (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Main page
      </a>
      <a className="menu-item" href="/info">
        Info
      </a>
      <a className="menu-item" href="/history">
        History
      </a>
    </Menu>
  );
};

export default Sidebar;
