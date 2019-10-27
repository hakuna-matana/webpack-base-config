import * as React from "react";
import * as s from "./Header.scss";
import {Link} from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <nav className={s.nav}>
          <Link to={"/about"} className={s.link}>About</Link>
        </nav>
        <button className={s.button}>Войти</button>
      </div>
    );
  }
}
