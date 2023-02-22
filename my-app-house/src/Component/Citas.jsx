import axios from "axios";
import React, { useContext } from "react";
import { PropIdContext } from "../Contexts/PropIdContext";
import useInput from "../Hooks/useInput";
import swal from "sweetalert";

const Citas = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  const { detalle } = useContext(PropIdContext);

  const nombre = useInput();
  const email = useInput();
  const telefono = useInput();
  const mensaje = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/api/cita/agrega/${usuario.id}`, {
        idUsuario: usuario.id,
        idPropiedades: detalle.id,
        nombre: nombre.value,
        telefono: telefono.value,
        email: email.value,
        mensaje: mensaje.value,
        imagen: detalle.imagen,
      })
      .then(() => swal("Enviado", "En breve nos contactaremos ", "success"))
      .cath((e) => e);
  };

  return (
    <div>
      <main className="form-signin">
        <h3>"Contactate con House"</h3>
        <form className="row">
          <div className="Auto">
            <label for="floatingInput"> Nombre </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder={usuario.nombre}
              {...nombre}
            />
          </div>
          <div className="Auto">
            <label for="floatingInput"> Email </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder={usuario.email}
              {...email}
            />
          </div>
          <div className="Auto">
            <label for="floatingInput"> Telefono </label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              placeholder={usuario.celular}
              {...telefono}
            />
          </div>
          <div className="Auto">
            <label for="exampleFormControlTextarea1" class="form-label">
              Mensaje
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              {...mensaje}
            ></textarea>
          </div>

          <button className="btn btn-warning" onClick={handleSubmit}>
            Contactar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Citas;
