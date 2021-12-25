import * as React from "react";
import { Link } from "react-router-dom";
export default class SideBar extends React.Component {
  public render() {
    return (
      <div className="side-bar">
        <Link to="/">
          <div className="name">Hujianbo</div>
        </Link>
        <div className="desc"></div>
        <div className="social"></div>
        <div className="nav">
          <Link to="/tech">
            <div className="tag">技术</div>
          </Link>
          <Link to="/game">
            <div className="tag">游戏</div>
          </Link>
          <Link to="/reading">
            <div className="tag">阅读</div>
          </Link>
          <Link to="/life">
            <div className="tag">生活</div>
          </Link>
        </div>
      </div>
    );
  }
}
