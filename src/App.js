import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Price from "./pages/Price";
import CreateNewClient from "./components/CreateNewClient";
import PasswordReset from "./components/PasswordReset";
import PersonalAccountMain from "./components/personal_account/PersonalAccountMain";
import UserInformationPage from "./components/personal_account/UserInformationPage";
import Contact from "./pages/Contact";
import Promo from "./pages/Promo";

import Test from "./components/Test";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/price" element={<Price />} />
          <Route path="/personal_account" element={<PersonalAccountMain />} />
          <Route path="/user_information" element={<UserInformationPage />} />
          <Route path="/create_new_client" element={<CreateNewClient />} />
          <Route path="/reset_password_form" element={<PasswordReset />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
