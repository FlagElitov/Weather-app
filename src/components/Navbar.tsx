import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
type NavbarProps = {
  handleSubmitHistory: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ handleSubmitHistory }) => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-3">
        <div className="brand-logo center">
          <span className="logo">
            <NavLink to="/">Weather + API</NavLink>
          </span>
        </div>
        <ul className="left hide-on-med-and-down">
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
          <li>
            <Button
              onClick={handleSubmitHistory}
              variant="contained"
              color="secondary"
            >
              Сохранить историю
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
