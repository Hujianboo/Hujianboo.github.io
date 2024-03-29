/*
 * @Author: Hujianbo
 * @Date: 2021-12-26 14:15:25
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-03 14:52:46
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
    {
      name: `"pure function"`,
      date: 20220103,
      category: Category.Tech,
      mdName: `"pure function"`,
    },
    {
      name: `json schema配置化表单的初步实现`,
      date: 20220327,
      category: Category.Tech,
      mdName: `json schema配置化表单的初步实现`,
    },
    {
      name: `react hook使用心得和经验`,
      date: 20220401,
      category: Category.Tech,
      mdName: `react hook使用心得和经验`,
    },
    {
      name: `自定义拖拽和旋转`,
      date: 20220206,
      category: Category.Tech,
      mdName: `自定义拖拽和旋转`,
    },
  ],
};
export default config;
