import { useState } from "react";

export default function Page() {
  const [gender, setGender] = useState("");

  const changeGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <section>
      <h1>第八章 —— if</h1>
      请选择性别：
      <section className="flex">
        <input
          id="male"
          type="radio"
          value="male"
          name="gender"
          checked={gender === "male"}
          onChange={changeGender}
        />
        <label htmlFor="male">男</label>
      </section>
      <section className="flex">
        <input
          id="female"
          type="radio"
          value="femail"
          name="gender"
          checked={gender === "female"}
          onChange={changeGender}
        />
        <label htmlFor="female">女</label>
      </section>
      {gender && (
        <section>
          你好，
          {gender === "male" ? (
            <span className="text-sky-400">先生</span>
          ) : (
            <span className="text-rose-400">女士</span>
          )}
        </section>
      )}
    </section>
  );
}
