import React, { useEffect } from "react";
import classNames from "classnames";
import Article from "../Article";
import { ArticleType } from "../Article";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export interface ArticleListType {
  ArticleList: ArticleType[];
}
const ArticleList: React.FC<ArticleListType> = (props) => {
  const { ArticleList } = props;
  const history = useHistory();
  const handleClick = (mdName) => {
    history.push(`/article/${mdName}`);
  };
  return (
    <div className="article-list">
      {ArticleList &&
        ArticleList.map((item, index) => (
          <div
            key={index}
            className="article-list-tab"
            onClick={(e) => handleClick(item.mdName)}
          >
            {item.name}
          </div>
        ))}
    </div>
  );
};

export default ArticleList;
