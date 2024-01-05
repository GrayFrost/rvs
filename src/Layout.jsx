import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams, Outlet } from "react-router-dom";
import { actions } from "./qiankun/state";
import { setCode } from "./store/code";
import { useSelector, useDispatch } from "react-redux";
import SubNavs from "./components/SubNavs";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Layout() {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.code.value);
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
      chapter: '07',// todo 提前
      name: "computed"
    },
    {
      chapter: '08',
      name: 'watch',
    },
    {
      chapter: '09',
      name: 'if'
    },
    {
      chapter: '10',
      name: 'for'
    },
    {
      chapter: "11",
      name: "style",
    },
    {
      chapter: "12",
      name: "context",
    },
  ]);
  const params = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const gotoChapter = (chapter) => {
    const [ui] = location.pathname.split("/").filter(Boolean);
    const newPath = `/${ui || "react"}/chapter${chapter}`;
    navigate(newPath);
  };

  useEffect(() => {
    // 接收子应用数据
    actions.onGlobalStateChange((newState, prev) => {
      const { code } = newState;
      dispatch(setCode(code));
    });
    return () => {
      actions.offGlobalStateChange();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-row">
      <ul className="w-[200px] bg-neutral-800 text-white flex-shrink-0">
        {navs.map((nav, index) => {
          return (
            <li
              className={`flex w-full h-12 items-center justify-start px-4 hover:bg-orange-500 hover:text-slate-400 cursor-pointer ${
                `chapter${nav.chapter}` == params.chapter ? "bg-orange-500" : ""
              }`}
              onClick={() => gotoChapter(nav.chapter)}
              key={index}
            >
              {index + 1}.{nav.name}
            </li>
          );
        })}
      </ul>
      <div className="flex-1">
        <SubNavs />
        <div className="flex w-full">
          <div className="flex-1">
            <Outlet />
          </div>
          <pre className="w-[550px] h-[650px] overflow-scroll bg-slate-800 text-white rounded-md shadow-md">
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
