import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainLogo } from "../components/Photos";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../css/Header.css";

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const [menu, setMenu] = useState({ display: "none" });

  function handleSwitcher() {
    setIsActive((prev) => !prev);
  }

  useEffect(() => {
    if (isActive) {
      setMenu({ display: "flex" });
    } else {
      setMenu({ display: "none" });
    }
  }, [isActive]);

  return (
    <>
      <header className="container">
        <div>
          <div className="header__block">
            <div className="header_block_for_space_between">
              <div className="header__block_logo">
                <MainLogo />
              </div>

              <div className="header__block_navigation">
                <Link to={"/"}>
                  <h3 className="link">Домашня сторінка</h3>
                </Link> 
                <Link to={"/servicepage"}>
                  <h3 className="link">Послуги</h3>
                </Link>
                <Link to={"/aboutuspage"}>
                  <h3 className="link">Про нас</h3>
                </Link>
                <Link to={"/contactuspage"}>
                  <h3 className="link">Контакти</h3>
                </Link>
              </div>
              <div className="hamburger_menu" style={{position:"fixed", right:"0px"}}>
                <div style={menu} className="container_hamburger_menu">
                    <Link style={{paddingTop:"25px"}} to={"/"}>
                      <h3  className="link">Домашня сторінка</h3>
                    </Link>
                    <Link to={"/servicepage"}>
                      <h3 className="link">Послуги</h3>
                    </Link>
                    <Link to={"/aboutuspage"}>
                      <h3 className="link">Про нас</h3>
                    </Link>
                    <Link style={{paddingBottom:"25px"}} to={"/contactuspage"}>
                      <h3 className="link">Контакти</h3>
                    </Link>
                </div>
                <button onClick={() => handleSwitcher()}>
                  <FontAwesomeIcon
                    style={{ height: "40px", color: "white" }}
                    icon={isActive ? faBars : faXmark}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
