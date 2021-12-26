/*
 * @Author: Hujianbo
 * @Date: 2021-12-26 14:15:25
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-12-27 00:51:46
 * @FilePath: /main-blog/src/config.ts
 */
import { ArticleListType } from "./components/ArticleList";
import { Category } from "./components/Article";
const config: ArticleListType = {
  ArticleList: [
    {
      name: "《枪炮 病菌和钢铁》阅读总结",
      date: 20211226,
      category: Category.Reading,
      mdName: "《枪炮 病菌和钢铁》阅读总结",
    },
    {
      name: "我的七年学生生活",
      date: 20211227,
      category: Category.Life,
      mdName: "我的七年学生生活",
    },
  ],
};
export default config;
