import { useState } from "react";
import categorias from "../data/categorias.json";
import "../styles/productForm.css";

const ProductForm = ({ guardarProducto, cancelar, productoEditando }) => {
    const [nombre, setNombre] = useState(productoEditando ? productoEditando.nombre : "");
    const [categoria, setCategoria] = useState(productoEditando ? productoEditando.categoria : "");
    const [descripcion, setDescripcion] = useState(productoEditando ? productoEditando.descripcion : "");
    const [precio, setPrecio] = useState(productoEditando ? productoEditando.precio : "");
    const [stock, setStock] = useState(productoEditando ? productoEditando.stock : "");
    const [estado, setEstado] = useState(productoEditando ? productoEditando.estado : "Disponible");
    const [requierePermiso, setRequierePermiso] = useState(productoEditando ? productoEditando.requierePermiso : false);
    const [mensaje, setMensaje] = useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();

        if(nombre == "" || categoria == "" || descripcion == "" || precio == "" || stock == ""){
            setMensaje("Debe completar todos los campos");
            return;
        }

        if(Number(precio) <= 0){
            setMensaje("El precio debe ser mayor a cero");
            return;
        }

        if(Number(stock) < 0){
            setMensaje("El stock no puede ser negativo");
            return;
        }

        const producto = {
            id: productoEditando ? productoEditando.id : 0,
            nombre: nombre,
            categoria: categoria,
            descripcion: descripcion,
            precio: Number(precio),
            stock: Number(stock),
            estado: estado,
            requierePermiso: requierePermiso,
            imagen: productoEditando ? productoEditando.imagen : "producto.jpg"
        };

        guardarProducto(producto);
    }

    return (
        <section className="form-producto">
            <h2>{productoEditando ? "Editar producto" : "Agregar producto"}</h2>

            <form onSubmit={enviarFormulario}>
                <div>
                    <label>Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label>Categoría</label>
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">Seleccione una categoría</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.nombre}>
                                {categoria.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Descripción</label>
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                </div>

                <div>
                    <label>Precio</label>
                    <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </div>

                <div>
                    <label>Stock</label>
                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
                </div>

                <div>
                    <label>Estado</label>
                    <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option value="Disponible">Disponible</option>
                        <option value="Bajo stock">Bajo stock</option>
                        <option value="Sin stock">Sin stock</option>
                    </select>
                </div>

                <div className="check-permiso">
                    <label>
                        <input
                            type="checkbox"
                            checked={requierePermiso}
                            onChange={(e) => setRequierePermiso(e.target.checked)}
                        />
                        Requiere permiso especial
                    </label>
                </div>

                <button type="submit">
                    {productoEditando ? "Guardar cambios" : "Agregar producto"}
                </button>

                <button type="button" onClick={cancelar}>
                    Cancelar
                </button>
            </form>

            <p>{mensaje}</p>
        </section>
    );
}

export default ProductForm;