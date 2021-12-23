import * as React from "react";
import { hot } from "react-hot-loader";
import SideBar from "./components/SideBar";
import ArticleList from "./components/ArticleList";
import Record from "./components/Record";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <BrowserRouter>
        <div className="app">
          <SideBar />
          <Switch>
            <Route exact path="/">
              <Record />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
