import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";

import IndoPage from "./pages/covids/Indo";
import ProvPage from "./pages/covids/Provinsi";

import GlobalStyle from "./components/GlobalStyle";
// import CovidsContext from "./context/CovidsContext";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

import CreateCovid from "./pages/covids/Create";
import GlobalPage from "./pages/covids/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/covid/provinsi" element={<ProvPage />} />
            <Route path="/covid/indonesia" element={<IndoPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/covid/global" element={<GlobalPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/covid/provinsi/create" element={<CreateCovid />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
