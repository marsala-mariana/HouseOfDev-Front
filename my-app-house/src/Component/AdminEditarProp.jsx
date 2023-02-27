import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useInput from "../Hooks/useInput";
import styled from "styled-components";

const AdminEditarProp = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editar, setEditar] = useState({});

  const ubicacion = useInput();
  const estado = useInput();
  const nombre = useInput();
  const barrio = useInput();
  const pais = useInput();
  const disponibilidad = useInput();
  const precio = useInput();
  const descripcion = useInput();
  const categoria = useInput();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/propiedades/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        return res.data;
      })
      .then((editar) => {
        setEditar(editar);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3001/api/propiedades/${id}`,

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
        },
        {
          withCredentials: true,
        }
      )
      .then(() => navigate(`/detalles/${id}`))
      .catch((error) => console.log(error, "error no editado"));
  };

  return (
    <Editar>
      <div className="container d-flex justify-content-center d-flex align-items-center">
        <main className="form-signin">
          <form className="row" onSubmit={handleSubmit}>
            <h1>Editar Propiedad</h1>
            <div className="Auto">
              <label for="floatingInput">Ubicabion: </label>
              <p>{editar.ubicacion}</p>
              <input
                {...ubicacion}
                type="text"
                className="form-control"
                aria-describedby="ubicacion"
                placeholder="Editar"
              />
            </div>
            <div className="Auto ">
              <label for="floatingInput">Estado: </label>
              <p>{editar.estado}</p>
              <input
                {...estado}
                type="text"
                className="form-control"
                placeholder="Editar"
              />
            </div>
            <div className="Auto ">
              <label for="floatingInput">Nombre: </label>
              <p>{editar.nombre}</p>
              <input
                {...nombre}
                type="text"
                className="form-control"
                placeholder="Editar"
              />
            </div>
            <div className="Auto ">
              <label for="floatingInput">Barrio: </label>
              <p>{editar.barrio}</p>
              <input
                {...barrio}
                type="text"
                className="form-control"
                placeholder="Editar"
              />
            </div>
            <div className="Auto">
              <label for="floatingInput">Pais: </label>
              <p>{editar.pais}</p>
              <input
                {...pais}
                type="text"
                className="form-control"
                placeholder="Editar"
              />
            </div>
            <div className="Auto ">
              <label for="floatingInput">Disponibilidad: </label>
              <p>{editar.disponibilidad}</p>
              <input
                {...disponibilidad}
                type="text"
                className="form-control"
                placeholder="Editar"
              />
            </div>
            <div className="Auto ">
              <label for="floatingInput">Precio: </label>
              <p>{editar.precio}</p>
              <input
                {...precio}
                type="number"
                className="form-control"
                placeholder="Editar"
              />
            </div>
            <div className="Auto mb-3 ">
              <label for="floatingInput">Descripcion: </label>
              <p>{editar.descripcion}</p>
              <input
                {...descripcion}
                type="text"
                className="form-control"
                placeholder="Editar"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary d-flex justify-content-center"
              >
                Guardar
              </button>
            </div>
          </form>
        </main>
      </div>
    </Editar>
  );
};

export default AdminEditarProp;

const Editar = styled.div`
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
  label {
    font-weight: bold;
  }
  p {
    font-style: italic;
  }
  .btn-primary {
    --bs-btn-bg: #dc3545;
    --bs-btn-border-color: #dc3545;
    width: 113px;
  }
`;
