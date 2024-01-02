import { useEffect } from 'react';
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import microApp from '@micro-zoe/micro-app'

export default function Layout() {
  const params = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  console.log("zzh params", params, location);

  const gotoPage = (type) => {
    const { chapter } = params;
    const newPath = `/${type}/${chapter}`;
    navigate(newPath);
  };

  const gotoChapter = (chapter) => {
    const [ui] = location.pathname.split("/").filter(Boolean);
    const newPath = `/${ui || "react"}/${chapter}`;
    navigate(newPath);
  };

  useEffect(() => {
    microApp.addDataListener('react', (data) => {
      console.log('zzh 接收数据');
      console.log('来自子应用react的数据', data);
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-[200px]">
        <div onClick={() => gotoChapter("one")}>1.state</div>
        <div onClick={() => gotoChapter("two")}>2.function</div>
        <div onClick={() => gotoChapter("three")}>3.props</div>
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
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
