import { useLocation } from 'react-router-dom';

export const useChapter = () => {
  const location = useLocation();
  const [ui, chapter] = location.pathname.split("/").filter(Boolean);
  return [
    ui || 'react',
    chapter || 'chapter01'
  ]
}