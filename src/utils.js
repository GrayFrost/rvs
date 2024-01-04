import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import microApp, { getActiveApps, preFetch } from "@micro-zoe/micro-app";

export const useReload = () => {
  const location = useLocation();

  const [ui, chapter] = location.pathname.split("/").filter(Boolean);

  useEffect(() => {
    console.log('zzh activeapps', getActiveApps());
    microApp.reload(ui).then((result) => {
      if (result) {
        console.log("重新渲染成功");
      } else {
        console.log("重新渲染失败");
      }
    });
  }, [ui, chapter]);
}