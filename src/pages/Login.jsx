import { useState } from "react";
import usuarios from "../data/usuarios";
import "../styles/login.css";

const Login = ({ setUsuarioLogueado }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const iniciarSesion = (e) => {
        e.preventDefault();

        if(email == "" || password == ""){
            setMensaje("Debe completar todos los campos");
            return;
        }

        const usuarioEncontrado = usuarios.find(
            usuario => usuario.email == email && usuario.password == password
        );

        if(usuarioEncontrado){
            setUsuarioLogueado(usuarioEncontrado);
            setMensaje("Sesión iniciada como: " + usuarioEncontrado.rol);
        }else{
            setMensaje("Email o contraseña incorrectos");
        }
    }

    return (
        <section className="login">
            <h1>Login</h1>

            <form onSubmit={iniciarSesion}>
                <div>
                    <label>Email</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Contraseña</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Ingresar</button>
            </form>

            <p>{mensaje}</p>
        </section>
    );
}

export default Login;