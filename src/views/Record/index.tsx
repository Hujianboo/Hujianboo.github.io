import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import recordMd from "../../assets/docs/record.md";
const Record: React.FC<any> = (props) => {
  const [content, setContent] = useState("");
  useEffect(() => {
    axios
      .request({
        url: recordMd,
        method: "get",
        responseType: "text",
      })
      .then((res) => res.data)
      .then((data) => {
        const regex = /\\n/g;
        // console.log(data.replace(regex, "\n"));
        // const time = "#### 自动化学士\\n#### 2018";
        // console.log(time);

        // console.log(3434);

        // console.log(time);
        // console.log('#### 自动化学士\n#### 2018');

        // console.log(data === "#### 自动化学士\n#### 2018");

        // reader.result 包含被转化为类型数组 typed array 的 blob

        // fs.writeFile("test.json", data, () => {});
        // const staticContent = data.replace(regex, "\\");
        // console.log(staticContent);
        setContent(data.replace(regex, "\n")); //这一步很奇怪/。。。需要了解一下转义的
      });
  }, []);

  return (
    <div className="about-me">
      <ReactMarkdown>{content.toString()}</ReactMarkdown>
    </div>
  );
};
export default Record;
