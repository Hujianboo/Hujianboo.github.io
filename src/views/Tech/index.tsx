import React, { useEffect } from "react";
import ArticleListComp from "../../components/ArticleList";
import { ArticleListType } from "../../components/ArticleList";
const Tech: React.FC<ArticleListType> = (props) => {
  const { ArticleList } = props;

  // const sortArticleList = React.useMemo(() => {
  //   if (!ArticleList) {
  //     return [];
  //   } else {
  //     return ArticleList.sort((a, b) => b.date - a.date);
  //   }
  // }, [ArticleList]);
  return (
    <div className="tech-view">
      <ArticleListComp ArticleList={ArticleList}></ArticleListComp>
    </div>
  );
};
export default Tech;
