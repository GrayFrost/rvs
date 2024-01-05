import { useNavigate, useParams } from "react-router-dom";

export default function SubNavs() {
  const params = useParams();
  const navigate = useNavigate();

  const gotoPage = (type) => {
    const { chapter } = params;
    const newPath = `/${type}/${chapter}`;
    navigate(newPath);
  };
  return (
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
  );
}
