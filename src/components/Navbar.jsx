import { Link } from "react-router-dom";
import "./../styles/navbar.css";


const Navbar = () => {
    return (
        <nav>
            <h2>Quimix</h2>

            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/categorias">Categorías</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;