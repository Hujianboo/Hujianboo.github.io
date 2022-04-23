import * as React from "react";
import { useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article/index";
import Record from "./views/Record";
import Game from "./views/Game";
import Reading from "./views/Reading";
import Tech from "./views/Tech";
import Life from "./views/Life";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import config from "./config";
import "./assets/scss/App.scss";
import { Category } from "./components/Article";
const _ = require("lodash");
const App: React.FC<any> = () => {
  const [ArticleList, setArticleList] = useState({});
  useEffect(() => {
    const list = _.groupBy(config.ArticleList, "category");
    for (const key in list) {
      list[key] = list[key].sort((a, b) => b.date - a.date);
    }
    setArticleList(list);
  }, []);
  return (
    <HashRouter>
      <div className="app">
        <SideBar />
        <TopBar />
        <div className="app-container">
          <Switch>
            <Route exact path="/about">
              <Record />
            </Route>
            <Route path="/tech">
              <Tech ArticleList={ArticleList[Category.Tech]} />
            </Route>
            <Route path="/game">
              <Game ArticleList={ArticleList[Category.Game]} />
            </Route>
            <Route path="/reading">
              <Reading ArticleList={ArticleList[Category.Reading]} />
            </Route>
            <Route path="/life">
              <Life ArticleList={ArticleList[Category.Life]} />
            </Route>
            <Route exact path={`/article/:mdName`} component={Article}></Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
