/*
 * @Author: Hujianbo
 * @Date: 2021-12-25 22:48:09
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-12-26 19:18:05
 * @FilePath: /main-blog/src/views/Game/index.tsx
 */
import React from "react";
import ArticleListComp from "../../components/ArticleList";
import { ArticleListType } from "../../components/ArticleList";
const Game: React.FC<ArticleListType> = (props) => {
  const { ArticleList } = props;
  return (
    <div className="life-view">
      <ArticleListComp ArticleList={ArticleList}></ArticleListComp>
    </div>
  );
};
export default Game;
