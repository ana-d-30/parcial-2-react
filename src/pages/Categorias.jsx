import categorias from "../data/categorias.json";
import productos from "../data/productos.json";
import "../styles/categorias.css";

const Categorias = () => {

    return (
        <section>

            <h1 className="titulo-categorias">
                Categorías
            </h1>

            <div className="contenedor-categorias">

                {categorias.map((categoria) => {

                    const cantidadProductos = productos.filter(
                        (producto) => producto.categoria == categoria.nombre
                    ).length;

                    return (

                        <div
                            key={categoria.id}
                            className="card-categoria"
                        >

                            <h3>{categoria.nombre}</h3>

                            <p>{categoria.descripcion}</p>

                            <p>
                                <strong>Cantidad de productos:</strong> {cantidadProductos}
                            </p>

                        </div>

                    );

                })}

            </div>

        </section>
    );

}

export default Categorias;