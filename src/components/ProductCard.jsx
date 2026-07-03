import { Link } from "react-router-dom";
import "../styles/productCard.css";

const ProductCard = ({ producto }) => {
    return (
        <div className="card-producto">

            <h3>{producto.nombre}</h3>

            <p>
                <strong>Categoría:</strong> {producto.categoria}
            </p>

            <p>
                <strong>Precio:</strong> ${producto.precio}
            </p>

            <p>
                <strong>Stock:</strong> {producto.stock}
            </p>

            <Link to={`/productos/${producto.id}`}>
                <button className="btn-detalle">
                    Ver detalle
                </button>
            </Link>

        </div>
    );
}

export default ProductCard;