/*
 * @Author: Hujianbo
 * @Date: 2021-12-25 22:48:18
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-12-26 18:38:36
 * @FilePath: /main-blog/src/views/Life/index.tsx
 */
import React from "react";
import ArticleListComp from "../../components/ArticleList";
import { ArticleListType } from "../../components/ArticleList";
const Life: React.FC<ArticleListType> = (props) => {
  const { ArticleList } = props;
  return (
    <div className="life-view">
      <ArticleListComp ArticleList={ArticleList}></ArticleListComp>
    </div>
  );
};
export default Life;
