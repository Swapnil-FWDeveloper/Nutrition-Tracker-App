import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Component/Register";
import Login from "./Component/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
