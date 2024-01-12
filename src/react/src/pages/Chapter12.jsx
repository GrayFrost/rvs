import { createContext, useContext, useState } from "react";
import { useSendCode } from '../hooks/useSendCode';

const ThemeContext = createContext(null);

const GrandSon = () => {
  const { text, theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>最外层text: {text}</p>
      <p>主题：{theme}</p>
      <button
        onClick={() => setTheme("dark")}
        className="w-auto h-auto p-1 border"
      >
        Dark
      </button>
      <button
        onClick={() => setTheme("light")}
        className="w-auto h-auto p-1 border"
      >
        Light
      </button>
    </div>
  );
};

const Child = () => {
  return <GrandSon />;
};

export default function Page() {
  const [text] = useState('hello world');
  const [theme, setTheme] = useState("dark");

  useSendCode('12');

  return (
    <section>
      <h1>第十二章 —— context</h1>
      <ThemeContext.Provider
        value={{
          text,
          theme,
          setTheme,
        }}
      >
        <Child />
      </ThemeContext.Provider>
    </section>
  );
}
