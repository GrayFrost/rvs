import { useNavigate, useParams } from "react-router-dom";

export default function SubNavs() {
  const params = useParams();
  const navigate = useNavigate();

  const gotoPage = (type) => {
    const { chapter } = params;
    const newPath = `/${type}/${chapter || 'chapter01'}`;
    navigate(newPath);
  };
  return (
    <div className="flex">
      <div
        className="w-20 h-12 flex justify-center items-center rounded-sm bg-react text-white mr-4 hover:cursor-pointer hover:shadow-lg"
        onClick={() => gotoPage("react")}
      >
        react
      </div>
      <div
        className="w-20 h-12 flex justify-center items-center rounded-sm bg-vue text-white mr-4 hover:cursor-pointer hover:shadow-lg"
        onClick={() => gotoPage("vue")}
      >
        vue
      </div>
      <div
        className="w-20 h-12 flex justify-center items-center rounded-sm bg-svelte text-white hover:cursor-pointer hover:shadow-lg"
        onClick={() => gotoPage("svelte")}
      >
        svelte
      </div>
    </div>
  );
}
