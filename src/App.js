import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Price from "./pages/Price";
import FirebaseLogin from "./services/firebase/FirebaseLogin";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/login" element={<FirebaseLogin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
