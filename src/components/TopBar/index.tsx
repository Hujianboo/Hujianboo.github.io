import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import avatarFront from "../../assets/img/avatar-front.png";
import avatarBack from "../../assets/img/avatar-back.png";
const TopBar: React.FC = () => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div className="top-bar">
      {/* <Link to="/"> */}
      <div
        className={classnames({
          "flip-container": true,
          hover: hoverState,
        })}
        onClick={(e) => {
          setHoverState(!hoverState);
        }}
      >
        <div className="flipper">
          <div className="front">
            <img
              className="avatar"
              src={avatarFront}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="back">
            <img
              className="avatar"
              src={avatarBack}
              alt=""
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      {/* </Link> */}
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
        <Link to="/about" className="tag">
          <div>关于我</div>
        </Link>
      </div>
    </div>
  );
};
export default TopBar;
