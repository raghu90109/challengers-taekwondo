import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./theme/theme";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/hero";
import Programs from "./home/Programs";
import Footer from "./components/layout/Footer";

function App() {
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
