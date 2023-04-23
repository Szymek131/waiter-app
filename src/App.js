import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
