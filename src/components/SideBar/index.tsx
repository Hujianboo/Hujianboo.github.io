/*
 * @Author: Hujianbo
 * @Date: 2021-12-23 22:37:43
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-12-23 23:49:09
 * @FilePath: /main-blog/src/components/SideBar/index.tsx
 */
import * as React from "react";
import { Link } from "react-router-dom";
export default class SideBar extends React.Component {
  public render() {
    return (
      <div className="side-bar">
        <div className="name">Hujianbo</div>
        <div className="desc"></div>
        <div className="social"></div>
        <div className="nav">
          <Link to="/tech">
            <div className="tag">技术</div>
          </Link>
          <Link to="/game">
            <div className="tag">游戏</div>
          </Link>
          <Link to="/read">
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
