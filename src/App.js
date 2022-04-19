import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carros from "./pages/Carros";
import Array from "./pages/Array";
import Objeto from "./pages/Objeto";
import Pagina1 from "./pages/Pagina1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import FilmesPopulares from "./pages/filmes/FilmesPopulares";
import FilmesDetalhes from "./pages/filmes/FilmesDetalhes";
import FilmesLancamentos from "./pages/filmes/FilmesLancamentos";
import FilmesEmCartaz from "./pages/filmes/FilmesEmCartaz";
import AtoresDetalhes from "./pages/atores/AtoresDetalhes";
import SeriesPopulares from "./pages/series/SeriesPopulares";
import SeriesCartaz from "./pages/series/SeriesCartaz";
import SeriesLancamento from "./pages/series/SeriesLancamento";
import SeriesDetalhes from "./pages/series/SeriesDetalhes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Carros />} />
            <Route path="/carros" element={<Carros />} />
            <Route path="/array" element={<Array />} />
            <Route path="/objeto" element={<Objeto />} />
            <Route path="/pagina1" element={<Pagina1 />} />
            <Route path="/filmes/populares" element={<FilmesPopulares />} />
            <Route path="/filmes/lancamentos" element={<FilmesLancamentos />} />
            <Route path="/filmes/Em/Cartaz" element={<FilmesEmCartaz />} />
            <Route path="/filmes/:id" element={<FilmesDetalhes />} />
            <Route path="/atores/:id" element={<AtoresDetalhes />} />
            <Route path="/series/:id" element={<SeriesDetalhes />} />
            <Route path="/series/populares" element={<SeriesPopulares />} />
            <Route path="/series/cartaz" element={<SeriesCartaz/>} />
            <Route path="/series/lancamento" element={<SeriesLancamento />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
