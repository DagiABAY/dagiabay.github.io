import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar";
import Home from "./scenes/Home";
import About from "./scenes/About";
import Experience from "./scenes/Experience";
import Projects from "./scenes/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const theme = createTheme();

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />

        <TopBar />
        <Offset />
        <Offset />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          {/* Additional routes */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
