import { useState } from "react";
import "./App.css";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header />
      <PageContent/>
      <Footer/>
    </>
  );
}

export default App;
