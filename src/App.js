import "./App.css";
import { DateTime } from "luxon";

function App() {
  const now = DateTime.now();
  console.log(now);

  return <div className="App"></div>;
}

export default App;
