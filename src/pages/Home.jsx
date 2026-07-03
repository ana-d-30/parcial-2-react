import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
    return (
        <section className="home">

            <h1>Quimix</h1>

            <h2>Sistema de Gestión de Insumos de Laboratorio</h2>

            <p>
                Bienvenido a Quimix. Esta aplicación permite administrar
                productos e insumos de laboratorio de forma simple,
                organizada y eficiente.
            </p>

            <div className="botones-home">

                <Link to="/productos">
                    <button>Ver Productos</button>
                </Link>

                <Link to="/login">
                    <button>Iniciar Sesión</button>
                </Link>

            </div>

        </section>
    );
}

export default Home;