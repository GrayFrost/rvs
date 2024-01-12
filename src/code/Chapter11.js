export const reactCode = 
`export default function Page() {
  return (
    <section>
      <h1>第十一章 —— style</h1>
      <div
        style={{
          border: "1px solid black",
          fontSize: 16,
        }}
      >
        hello world
      </div>
    </section>
  );
}
`;

export const vueCode =
`<template>
<section>
  <h1>第十一章 —— style</h1>
  <div :style="{ border: '1px solid black', fontSize: 16 }">
    hello world
  </div>
</section>
</template>
`;

export const svelteCode =
`<section>
<h1>第十一章 —— style</h1>
<div style="border: 1px solid black;font-size: 16px;">hello world</div>
</section>
`;