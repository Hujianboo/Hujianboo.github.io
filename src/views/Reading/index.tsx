/*
 * @Author: Hujianbo
 * @Date: 2021-12-25 22:48:01
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-12-26 18:38:05
 * @FilePath: /main-blog/src/views/Reading/index.tsx
 */
import React from "react";
import ArticleListComp from "../../components/ArticleList";
import { ArticleListType } from "../../components/ArticleList";
const Reading: React.FC<ArticleListType> = (props) => {
  const { ArticleList } = props;
  return (
    <div className="reading-view">
      <ArticleListComp ArticleList={ArticleList}></ArticleListComp>
    </div>
  );
};
export default Reading;
