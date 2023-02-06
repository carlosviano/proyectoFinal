import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300&display=swap"
        rel="stylesheet"
      />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
