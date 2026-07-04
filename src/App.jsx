import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import productosIniciales from "./data/productos.json";

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
    const [productos, setProductos] = useState(productosIniciales);

    const agregarProducto = (nuevoProducto) => {
        const nuevoId = productos.length + 1;
        setProductos([...productos, { ...nuevoProducto, id: nuevoId }]);
    }

    const editarProducto = (productoEditado) => {
        const productosActualizados = productos.map((producto) => {
            if(producto.id == productoEditado.id){
                return productoEditado;
            }
            return producto;
        });

        setProductos(productosActualizados);
    }

    const eliminarProducto = (id) => {
        const productosActualizados = productos.filter(
            (producto) => producto.id != id
        );

        setProductos(productosActualizados);
    }

    return (
        <>
            <Navbar
                usuarioLogueado={usuarioLogueado}
                setUsuarioLogueado={setUsuarioLogueado}
            />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route
                        path="/productos"
                        element={
                            <Productos
                                productos={productos}
                                usuarioLogueado={usuarioLogueado}
                                agregarProducto={agregarProducto}
                                editarProducto={editarProducto}
                                eliminarProducto={eliminarProducto}
                            />
                        }
                    />

                    <Route
                        path="/productos/:id"
                        element={<DetalleProducto productos={productos} />}
                    />

                    <Route
                        path="/categorias"
                        element={<Categorias productos={productos} />}
                    />

                    <Route path="/nosotros" element={<Nosotros />} />

                    <Route
                        path="/login"
                        element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;