import React from "react";
import Footer from "./components/Footer";
import Routes from "./Routes";

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
