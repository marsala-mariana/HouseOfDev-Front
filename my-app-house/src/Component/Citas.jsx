import axios from "axios";
import React, { useContext } from "react";
import { PropIdContext } from "../Contexts/PropIdContext";
import useInput from "../Hooks/useInput";
import swal from "sweetalert";
import styled from "styled-components";

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
      .post(`http://localhost:3001/api/cita/agregarcita/${usuario.id}`, {
        idUsuario: usuario.id,
        idPropiedades: detalle.id,
        nombre: nombre.value,
        telefono: telefono.value,
        email: email.value,
        mensaje: mensaje.value,
        imagen: detalle.imagen,
      })
      .then(() => swal("Enviado", "En breve nos contactaremos ", "success"));
  };

  return (
    <StyleCitas>
      <div className="container d-flex justify-content-center d-flex align-items-center">
        <main className="form-signin">
          <form className="row">
            <div className="mb-3 d-flex justify-content-center">
              <h1>"Contactate con House"</h1>
            </div>

            <div className="Auto mb-3 d-flex justify-content-center">
              <label for="floatingInput"> Nombre </label>

              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder={usuario.nombre}
                {...nombre}
              />
            </div>

            <div className="Auto mb-3 d-flex justify-content-center">
              <label for="floatingInput"> Email </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder={usuario.email}
                {...email}
              />
            </div>
            <div className="Auto Auto mb-3 d-flex justify-content-center">
              <label for="floatingInput"> Telefono </label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                placeholder={usuario.celular}
                {...telefono}
              />
            </div>
            <div className="Auto Auto mb-3 d-flex justify-content-center">
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

            <div className="d-flex justify-content-center">
              <button className="btn " onClick={handleSubmit}>
                Contactar
              </button>
            </div>
          </form>
        </main>
      </div>
    </StyleCitas>
  );
};

export default Citas;

const StyleCitas = styled.div`
  h1 {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: 30px;

    padding-left: 8px;
    padding-top: 9px;
    height: 42px;

    margin-left: 13px;
    margin-top: 14px;
  }

  .label {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    padding-top: 16px;
  }
  .form-control {
    width: 345px;
    margin-left: 14px;
  }
  .container {
    margin-top: 63px;

    box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
    -webkit-box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
    -moz-box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
  }
  .btn {
    width: 225px;
    height: 54px;

    --bs-btn-color: #f8f9fa;
    --bs-btn-bg: #fe4236;
  }
  .row {
    margin-bottom: 123px;
  }
  .Auto {
    padding-bottom: 21px;
    height: 73px;
  }
`;
