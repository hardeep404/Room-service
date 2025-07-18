import react from "react";
import Navbar from "./Components/Page1/Navbar";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Page1/Footer";
import Amenities from "./Components/Page1/Amenities";
import BookingForm from "./Components/Page1/BookingForm";
import Header from "./Components/Page1/Header";
import TextFunction from "./Components/TextFunction";
import AddCTAButton from "./Components/AddBtnSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/not" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
