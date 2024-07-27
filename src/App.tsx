import Header from "./components/Header/index";
import Bottom from "./components/Bottom/index";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* 点击按钮访问后台接口 */}
      <Bottom />
    </>
  );
}

export default App;
