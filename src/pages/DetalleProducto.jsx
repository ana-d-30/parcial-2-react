import { useParams } from "react-router-dom";
import "../styles/detalleProducto.css";

const DetalleProducto = ({ productos }) => {
    const { id } = useParams();

    const producto = productos.find(
        (producto) => producto.id == id
    );

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <section className="detalle-producto">
            <h1>{producto.nombre}</h1>

            <p><strong>Categoría:</strong> {producto.categoria}</p>
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Stock:</strong> {producto.stock}</p>
            <p><strong>Estado:</strong> {producto.estado}</p>
            <p><strong>Requiere permiso:</strong> {producto.requierePermiso ? "Sí" : "No"}</p>
        </section>
    );
}

export default DetalleProducto;