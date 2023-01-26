import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Price from "./pages/Price";
import CreateNewClient from "./components/CreateNewClient";
import PasswordReset from "./components/PasswordReset";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/create_new_client" element={<CreateNewClient />} />
          <Route path="/reset_password_form" element={<PasswordReset />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
