import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import Categorias from "./pages/Categorias";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/categorias">Categorías</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;