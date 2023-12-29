function App() {
  return (
    <div>
      <div>react</div>
      <div>vue</div>
      <div>svelte</div>
      <micro-app
        name="react-app"
        url="http://localhost:5001/"
        iframe
        baseroute="/react/"
      ></micro-app>
      <micro-app
        name="vue-app"
        url="http://localhost:5002/"
        iframe
        baseroute="/vue/"
      ></micro-app>
      <micro-app
        name="svelte-app"
        url="http://localhost:5003/"
        iframe
        baseroute="/svelte/"
      ></micro-app>
    </div>
  );
}

export default App;
