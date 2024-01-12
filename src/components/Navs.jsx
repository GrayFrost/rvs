import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function Navs(props) {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { navs } = props;

  const gotoChapter = (chapter) => {
    const [ui] = location.pathname.split("/").filter(Boolean);
    const newPath = `/${ui || "react"}/chapter${chapter}`;
    navigate(newPath);
  };

  return (
    <ul className="w-[200px] bg-neutral-800 text-white flex-shrink-0">
        {navs.map((nav, index) => {
          return (
            <li
              className={`flex w-full h-12 items-center justify-start px-4 hover:bg-orange-500 hover:text-white hover:cursor-pointer transition-colors duration-500 ${
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
  )
}