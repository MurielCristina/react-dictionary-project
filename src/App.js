import Designer from "./Designer.png";

import Dictionary from "./Dictionary";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={Designer} className="App-logo" alt="logo" />
          <span className="App-text">Muri</span>
        </header>
        <Dictionary />
        <Footer />
      </div>
    </div>
  );
}
