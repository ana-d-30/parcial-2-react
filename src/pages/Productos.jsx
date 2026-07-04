import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import "../styles/productos.css";

const Productos = ({ productos, usuarioLogueado, agregarProducto, editarProducto, eliminarProducto }) => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [productoEditando, setProductoEditando] = useState(null);

    const abrirFormularioAgregar = () => {
        setProductoEditando(null);
        setMostrarFormulario(true);
    }

    const seleccionarProducto = (producto) => {
        setProductoEditando(producto);
        setMostrarFormulario(true);
    }

    const cancelarFormulario = () => {
        setMostrarFormulario(false);
        setProductoEditando(null);
    }

    const guardarProducto = (producto) => {
        if(productoEditando){
            editarProducto(producto);
        }else{
            agregarProducto(producto);
        }

        setMostrarFormulario(false);
        setProductoEditando(null);
    }

    return (
        <section>
            <h1 className="titulo-productos">Productos</h1>

            {
                usuarioLogueado?.rol == "admin" && (
                    <div className="acciones-productos">
                        <button onClick={abrirFormularioAgregar}>
                            Agregar Producto
                        </button>
                    </div>
                )
            }

            {
                mostrarFormulario && (
                    <ProductForm
                        key={productoEditando ? productoEditando.id : "nuevo"}
                        guardarProducto={guardarProducto}
                        cancelar={cancelarFormulario}
                        productoEditando={productoEditando}
                    />
                )
            }

            <div className="productos">
                {productos.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        usuarioLogueado={usuarioLogueado}
                        eliminarProducto={eliminarProducto}
                        seleccionarProducto={seleccionarProducto}
                    />
                ))}
            </div>
        </section>
    );
}

export default Productos;