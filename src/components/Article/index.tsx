/* eslint-disable react/no-children-prop */
/*
 * @Author: Hujianbo
 * @Date: 2021-12-26 14:21:30
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-03 15:33:41
 * @FilePath: /main-blog/src/components/Article/index.tsx
 */
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
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
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={solarizedlight}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Article;
