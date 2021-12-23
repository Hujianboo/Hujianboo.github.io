/*
 * @Author: Hujianbo
 * @Date: 2021-12-23 22:53:39
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-12-23 23:48:33
 * @FilePath: /main-blog/src/components/ArticleList/index.tsx
 */
import React from "react";
import classNames from "classnames";

type ListType = "tech" | "life" | "game" | "reading";
// export interface ArticleListProp {
//   // type: ListType;
// }

const ArticleList: React.FC<any> = (props) => {
  // const { type } = props;
  return <div className="article-list">{/* <div>List-{type}</div> */}</div>;
};

export default ArticleList;
