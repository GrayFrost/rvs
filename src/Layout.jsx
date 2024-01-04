import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Layout() {
  const [navs] = useState([
    {
      chapter: "01",
      name: "state",
    },
    {
      chapter: "02",
      name: "function",
    },
    {
      chapter: "03",
      name: "props",
    },
    {
      chapter: "04",
      name: "lifecircle",
    },
    {
      chapter: "05",
      name: "slot",
    },
    {
      chapter: "06",
      name: "ref",
    },
    {
      chapter: "07",
      name: "style",
    },
    {
      chapter: "08",
      name: "context",
    },
  ]);
  const params = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const [code, setCode] = useState("");

  const gotoPage = (type) => {
    const { chapter } = params;
    const newPath = `/${type}/${chapter}`;
    navigate(newPath);
  };

  const gotoChapter = (chapter) => {
    const [ui] = location.pathname.split("/").filter(Boolean);
    const newPath = `/${ui || "react"}/chapter${chapter}`;
    navigate(newPath);
  };

  useEffect(() => {
    // 接收子应用数据
    return () => {

    };
  }, []);

  return (
    <div className="w-full h-full flex flex-row">
      <ul className="w-[200px] bg-neutral-800 text-white">
        {navs.map((nav, index) => {
          return (
            <li
              className="flex w-full h-12 items-center justify-start px-4 hover:bg-orange-500 hover:text-slate-400 cursor-pointer"
              onClick={() => gotoChapter(nav.chapter)} key={index}>
              {index + 1}.{nav.name}
            </li>
          );
        })}
      </ul>
      <div className="flex-1">
        <div className="flex">
          <div
            className="w-20 h-12 flex justify-center items-center rounded-sm bg-react text-white"
            onClick={() => gotoPage("react")}
          >
            react
          </div>
          <div
            className="w-20 h-12 flex justify-center items-center rounded-sm bg-vue text-white"
            onClick={() => gotoPage("vue")}
          >
            vue
          </div>
          <div
            className="w-20 h-12 flex justify-center items-center rounded-sm bg-svelte text-white"
            onClick={() => gotoPage("svelte")}
          >
            svelte
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex-1">
            <Outlet />
          </div>
          <pre className="w-[550px]">
            <code>{code}</code>
          </pre>   
          {/* <SyntaxHighlighter language="javascript" style={docco}>
            {code}
          </SyntaxHighlighter> */}
        </div>
      </div>
    </div>
  );
}
