import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import microApp from "@micro-zoe/micro-app";

export const useReload = () => {
  const location = useLocation();

  const [ui, chapter] = location.pathname.split("/").filter(Boolean);

  useEffect(() => {
    microApp.reload(ui).then((result) => {
      if (result) {
        console.log("重新渲染成功");
      } else {
        console.log("重新渲染失败");
      }
    });
  }, [ui, chapter]);
}