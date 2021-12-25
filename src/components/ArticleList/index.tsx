import React from "react";
import classNames from "classnames";

type ListType = "tech" | "life" | "game" | "reading";

const ArticleList: React.FC<any> = (props) => {
  // const { type } = props;
  return <div className="article-list">{/* <div>List-{type}</div> */}</div>;
};

export default ArticleList;
