import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import MainComponent from "./Components/mainContent";

function MyInfo() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));
