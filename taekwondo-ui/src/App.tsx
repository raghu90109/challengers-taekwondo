import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import theme from "./theme/theme";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/hero";
import Programs from "./home/Programs";
import Footer from "./components/layout/Footer";
import AboutFounder from "./pages/AboutFounder";
import Contact from "./pages/contact/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
    </>
  );
}
function ProgramsPage() {
  return (
    <>
      <Programs />
    </>
  );
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/about/founder" element={<AboutFounder />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
