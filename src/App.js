import "./App.css";
import { DateTime } from "luxon";
import Content from "./components/Content";

function App() {
  const now = DateTime.now();
  console.log(now);

  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;
