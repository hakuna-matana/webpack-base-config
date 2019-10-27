import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import {Layout} from "../components/Layout/Layout";
import {About} from "../components/About/About";
import {Main} from "../components/Main/Main";

export class Router extends React.Component {
  render() {
    return(
      <>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </>
    )
  }
}
