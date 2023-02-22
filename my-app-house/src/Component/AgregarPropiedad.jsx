import axios from "axios";
import React from "react";
import useInput from "../Hooks/useInput";
import swal from "sweetalert";

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
    <div>
      <h4>AGREGAR UNA PROPIEDAD:</h4>
      <form>
        <div class="row">
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="ubicacion"
              {...ubicacion}
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="estado"
              {...estado}
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="nombre"
              {...nombre}
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="barrio"
              {...barrio}
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="pais"
              {...pais}
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="disponibilidad"
              {...disponibilidad}
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="precio"
              {...precio}
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="descripcion"
              {...descripcion}
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="categoria"
              {...categoria}
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="imagen"
              {...imagen}
            />
          </div>
        </div>
        <button className="btn btn-outline-warning" onClick={handleSubmit}>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AgregarPropiedad;
