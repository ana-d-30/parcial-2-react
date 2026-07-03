import productos from "../data/productos.json";
import ProductCard from "../components/ProductCard";
import "../styles/productos.css";

const Productos = () => {
    return (
        <section>

            <h1 className="titulo-productos">
                Productos
            </h1>

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