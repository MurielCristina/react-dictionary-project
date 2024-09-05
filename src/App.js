import Designer from "./Designer.png";

import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Designer} className="App-logo" alt="logo" />
        <span className="App-text">Muri</span>
      </header>
      <Footer />
    </div>
  );
}
