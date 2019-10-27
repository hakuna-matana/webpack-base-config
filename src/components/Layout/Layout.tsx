import * as React from "react";
import { Header } from "../Header/Header";
// import { Main } from "../Main/Main";
import * as s from "./Layout.scss";

export class Layout extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <Header />
        {this.props.children}
        {/*<Main />*/}
      </div>
    );
  }
}
