import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Sponsorship from "./pages/Sponsorship";
import Collaborate from "./pages/Collaborate";
import Contact from "./pages/Contact";
import Event from "./pages/Event";

export default function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/event" element={<Event />} />
          <Route path="/sponsor" element={<Sponsorship />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}