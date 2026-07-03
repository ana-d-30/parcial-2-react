import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Categorias from "./pages/Categorias";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const App = () => {

    const [usuarioLogueado, setUsuarioLogueado] = useState(null);

    return (
        <>
            <Navbar
                usuarioLogueado={usuarioLogueado}
                setUsuarioLogueado={setUsuarioLogueado}
            />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/productos/:id" element={<DetalleProducto />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/nosotros" element={<Nosotros />} />

                    <Route
                        path="/login"
                        element={
                            <Login
                                setUsuarioLogueado={setUsuarioLogueado}
                            />
                        }
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;