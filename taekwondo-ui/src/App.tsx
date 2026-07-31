import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./theme/theme";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/hero";
import Programs from "./home/Programs";
import Footer from "./components/layout/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Programs />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
