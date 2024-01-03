import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import microApp from '@micro-zoe/micro-app'
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default function Layout() {
  
  const params = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const [code, setCode] = useState('');

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
    microApp.addDataListener('react', (res) => {
      console.log('来自子应用react的数据', res);
      setCode(res.data);
    });

    microApp.addDataListener('vue', (res) => {
      console.log('来自子应用vue的数据', res);
      setCode(res.data);
    });

    microApp.addDataListener('svelte', (res) => {
      console.log('来自子应用svelte的数据', res);
      setCode(res.data);
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-[200px]">
        <div onClick={() => gotoChapter("01")}>1.state</div>
        <div onClick={() => gotoChapter("02")}>2.function</div>
        <div onClick={() => gotoChapter("03")}>3.props</div>
        <div onClick={() => gotoChapter('04')}>4.lifecircle</div>
        <div>4.slot</div>
        <div>5.ref</div>
        <div>6.style</div>
        <div>7.context</div>
      </div>
      <div className="flex-1">
        <div className="flex">
          <div
            className="w-20 h-16 flex justify-center items-center rounded-sm"
            onClick={() => gotoPage("react")}
          >
            react
          </div>
          <div
            className="w-20 h-16 flex justify-center items-center rounded-sm"
            onClick={() => gotoPage("vue")}
          >
            vue
          </div>
          <div
            className="w-20 h-16 flex justify-center items-center rounded-sm"
            onClick={() => gotoPage("svelte")}
          >
            svelte
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex-1">
          <Outlet/>
          </div>
          <pre className="w-[550px]">
            <code className="language-javascript">{code}</code>
          </pre>   
        </div>

      </div>
    </div>
  );
}
