import "./App.css";
import {Calculator} from "./Calculator"

const Header = () => {
  return (
    <>
      <h1>
        <span>SPLI</span>
        <span>TTER</span>
      </h1>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  );
};

export default App;
