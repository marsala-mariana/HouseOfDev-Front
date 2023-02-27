import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import AdminPropiedad from "./AdminPropiedad";
import AgregarPropiedad from "./AgregarPropiedad";
import styled from "styled-components";

const Admin = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/usuarios", {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  const handleSubmit = (id) => {
    axios
      .delete(`http://localhost:3001/api/users/borrarUser/${id}`, {
        withCredentials: true,
      })

      .then(() => swal("Usuario eliminado!"))
      .then(() => {
        window.location.reload(false);
      });
  };
  return (
    <>
      {usuario.admin ? (
        <AdminSti>
          <div className="container  d-flex justify-content-center d-flex align-items-center">
            <div className="row ">
              <div className="mb-3 d-flex justify-content-center">
                <h1>Perfil de Administrador</h1>
              </div>

              <div className="card-body">
                <div className="mb-3 ">
                  <h1>Lista de Usuarios</h1>
                </div>

                <ul className="list-group list-group-flush">
                  {user.map((usuarios) => {
                    return (
                      <div className="card ">
                        <div className="col-md-6 ">
                          <h5 className="card-title ">
                            Nombre: {usuarios.nombre}
                          </h5>
                          <h5 className="card-title">
                            Celular: {usuarios.celular}
                          </h5>
                          <h5 className="card-title">
                            Email: {usuarios.email}
                          </h5>
                          <h5 className="card-title">
                            Creacion: {usuarios.updatedAt}
                          </h5>
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleSubmit(usuarios.id)}
                          >
                            🗑 Eliminar
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </ul>
              </div>

              <div className="container">
                <AgregarPropiedad />
              </div>
              <div className="container">
                <AdminPropiedad />
              </div>
            </div>
          </div>
        </AdminSti>
      ) : (
        <h1>NO SOS ADMIN</h1>
      )}
    </>
  );
};

export default Admin;

const AdminSti = styled.div`
  h1 {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: medium;

    padding-left: 8px;
    padding-top: 26px;
    height: 42px;

    margin-left: 13px;
    margin-top: 14px;
  }
  h5 {
    color: black;
    font-family: "Times New Roman", Times, serif;
    font-size: medium;
  }
  .btn-secondary {
    color: white;

    --bs-btn-bg: #dc3545;
  }
  .card {
    width: 660px;
    padding-bottom: 19px;
    padding-left: 21px;
    padding-top: 17px;
  }
`;
