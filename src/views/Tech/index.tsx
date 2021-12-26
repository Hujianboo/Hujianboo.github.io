import React from "react";
import ArticleListComp from "../../components/ArticleList";
import { ArticleListType } from "../../components/ArticleList";
const Tech: React.FC<ArticleListType> = (props) => {
  const { ArticleList } = props;
  return (
    <div className="tech-view">
      <ArticleListComp ArticleList={ArticleList}></ArticleListComp>
    </div>
  );
};
export default Tech;
