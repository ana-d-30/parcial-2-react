import productos from "../data/productos.json";
import ProductCard from "../components/ProductCard";
import "../styles/productos.css";

const Productos = ({ usuarioLogueado }) => {
    return (
        <section>

            <h1 className="titulo-productos">
                Productos
            </h1>

            {
                usuarioLogueado?.rol === "admin" && (
                    <button>
                        Agregar Producto
                    </button>
                )
            }

            <div className="productos">

                {productos.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                    />
                ))}

            </div>

        </section>
    );
}

export default Productos;