import {
  Routes,
  Route,
  Outlet,
  Link,
  useNavigate,
  useNavigation,
  useParams,
  useLocation,
} from "react-router-dom";
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
    const [ui] = location.pathname.split('/').filter(Boolean);
    const newPath = `/${ui || 'react'}/${chapter}`;
    navigate(newPath);
  }
  return (
    <div className="rvs flex">
      <div className="sidebar">
        <div onClick={() => gotoChapter('one')}>
          one
        </div>
        <div onClick={() => gotoChapter('two')}>
          two
        </div>
        <div onClick={() => gotoChapter('three')}>
          three
        </div>
      </div>
      <div className="content">
        <div className="tab flex">
          <div className="tab-item" onClick={() => gotoPage("react")}>
            react
          </div>
          <div className="tab-item" onClick={() => gotoPage("vue")}>
            vue
          </div>
          <div className="tab-item" onClick={() => gotoPage("svelte")}>
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
