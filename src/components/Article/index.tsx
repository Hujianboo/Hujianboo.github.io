/*
 * @Author: Hujianbo
 * @Date: 2021-12-26 14:21:30
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-12-26 17:20:12
 * @FilePath: /main-blog/src/components/Article/index.tsx
 */
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import recordMd from "../../assets/docs/record.md";
import axios from "axios";
export enum Category {
  Tech,
  Life,
  Reading,
  Game,
}
export interface ArticleType {
  name: string;
  date: number;
  category: Category;
  mdName: string;
}
const Article: React.FC<any> = (props) => {
  const [content, setContent] = useState("");
  useEffect(() => {
    import(`../../assets/docs/${props.match.params.mdName}.md`)
      .then((res) => res.default)
      .then((url) =>
        axios.request({
          url: url,
          method: "get",
        }),
      )
      .then((res) => res.data)
      .then((data) => {
        const regex = /\\n/g;
        setContent(data.replace(regex, "\n")); //这一步很奇怪/。。。需要了解一下转义的
      });
  }, []);
  return (
    <div className="article-container">
      <div className="detail">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Article;
