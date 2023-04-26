import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import TableDetails from "./components/features/TableDetails/TableDetails";
import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/detail/:id' element={<TableDetails />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
