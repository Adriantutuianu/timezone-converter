import "./App.css";
import { DateTime } from "luxon";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const now = DateTime.now();
  console.log(now);

  return (
    <div className="App">
      <Content />
      <Footer />
    </div>
  );
}

export default App;
