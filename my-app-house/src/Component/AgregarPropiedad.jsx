import axios from "axios";
import React from "react";
import useInput from "../Hooks/useInput";
import swal from "sweetalert";
import styled from "styled-components";

const AgregarPropiedad = () => {
  const ubicacion = useInput();
  const estado = useInput();
  const nombre = useInput();
  const barrio = useInput();
  const pais = useInput();
  const disponibilidad = useInput();
  const precio = useInput();
  const descripcion = useInput();
  const categoria = useInput();
  const imagen = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/propiedades/agregar",

        {
          ubicacion: ubicacion.value,
          estado: estado.value,
          nombre: nombre.value,
          barrio: barrio.value,
          pais: pais.value,
          disponibilidad: disponibilidad.value,
          precio: precio.value,
          descripcion: descripcion.value,
          categoria: categoria.value,
          imagen: [imagen.value],
        },
        {
          withCredentials: true,
        }
      )
      .then(() => swal("Propiedad agregada!"))
      .then(() => window.location.reload(false))
      .catch((error) => error);
  };

  return (
    <PropA>
      <div className="container d-flex justify-content-center d-flex align-items-center">
        <form className="row">
          <div className="mb-3 ">
            <h1>Agregar Propiedad</h1>
          </div>

          <div class="Auto mb-3 d-flex justify-content-center">
            <input
              type="text"
              className="form-control"
              placeholder="ubicacion"
              {...ubicacion}
            />
          </div>
          <div class="Auto mb-3 d-flex justify-content-center">
            <input
              type="text"
              class="form-control"
              placeholder="estado"
              {...estado}
            />
          </div>
          <div class="Auto mb-3 d-flex justify-content-center">
            <input
              type="text"
              class="form-control"
              placeholder="nombre"
              {...nombre}
            />
          </div>
          <div class="Auto mb-3 d-flex justify-content-center">
            <input
              type="text"
              class="form-control"
              placeholder="barrio"
              {...barrio}
            />
          </div>
          <div class="Auto mb-3 d-flex justify-content-center">
            <input
              type="text"
              class="form-control"
              placeholder="pais"
              {...pais}
            />
          </div>
          <div class="Auto mb-3 d-flex justify-content-center">
            <input
              type="text"
              class="form-control"
              placeholder="disponibilidad"
              {...disponibilidad}
            />
          </div>
          <div class="Auto mb-3 d-flex justify-content-center">
            <input
              type="text"
              class="form-control"
              placeholder="precio"
              {...precio}
            />
          </div>
          <div class="Auto mb-3 d-flex justify-content-center">
            <input
              type="text"
              class="form-control"
              placeholder="descripcion"
              {...descripcion}
            />
          </div>
          <div class="Auto mb-3 d-flex justify-content-center">
            <input
              type="text"
              class="form-control"
              placeholder="categoria"
              {...categoria}
            />
          </div>
          <div class="Auto mb-3 d-flex justify-content-center">
            <input
              type="text"
              class="form-control"
              placeholder="imagen"
              {...imagen}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary d-flex justify-content-center"
              onClick={handleSubmit}
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </PropA>
  );
};

export default AgregarPropiedad;

const PropA = styled.div`
  h1 {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: medium;
    padding-left: 8px;
    padding-top: 9px;
    height: 42px;
    margin-left: 13px;
    margin-top: 14px;
  }
`;
