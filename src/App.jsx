import { Routes, Route } from "react-router-dom";
import "./App.css";

import PageLayout from "./layout/PageLayout";
import Home from "./pages/home/Home";
import FilmForm from "./pages/filmForm/FilmForm";
import FilmsList from "./pages/filmsList/FilmsList";
import Film from "./pages/film/Film";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/film/form" element={<FilmForm />} />
        <Route path="/film/:id/edit" element={<FilmForm />} />
        <Route path="/films" element={<FilmsList />} />
        <Route path="/film/:id" element={<Film />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;