import "../styles/productCard.css";

const ProductCard = ({ producto }) => {
    return (
        <div className="card-producto">

            <h3>{producto.nombre}</h3>

            <p>
                <strong>Categoría:</strong> {producto.categoria}
            </p>

            <p>{producto.descripcion}</p>

            <p>
                <strong>Precio:</strong> ${producto.precio}
            </p>

            <p>
                <strong>Stock:</strong> {producto.stock}
            </p>

            <p>
                <strong>Estado:</strong> {producto.estado}
            </p>

            <p>
                <strong>Permiso:</strong>{" "}
                {producto.requierePermiso ? "Sí" : "No"}
            </p>

        </div>
    );
}

export default ProductCard;