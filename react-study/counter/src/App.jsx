import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </div>
  );
}

export default App;
