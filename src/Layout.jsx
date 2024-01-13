import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { actions } from "./qiankun/state";
import { setCode } from "./store/code";
import { useSelector, useDispatch } from "react-redux";
import Navs from "./components/Navs";
import SubNavs from "./components/SubNavs";

export default function Layout() {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.code.value);
  const navs = useSelector((state) => state.nav.value);

  const navigate = useNavigate();
  const location = useLocation();

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

  // redirect
  useEffect(() => {
    if (location.pathname === "/") {
      navigate(`/react/chapter01`);
    }
  }, [location.pathname]);

  return (
    <div className="w-full h-full flex flex-row">
      <Navs navs={navs} />
      <div className="flex-1">
        <SubNavs />
        <div className="flex w-full">
          <div className="flex-1 p-4">
            <Outlet />
          </div>
          <pre className="w-[550px] h-[650px] overflow-scroll bg-slate-800 text-white rounded-md shadow-md">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
