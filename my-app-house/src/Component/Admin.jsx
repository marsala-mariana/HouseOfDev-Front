import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import AdminPropiedad from "./AdminPropiedad";
import AgregarPropiedad from "./AgregarPropiedad";

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
        <div className="container">
          <h4>PERFIL ADMINISTRADOR</h4>

          <div className="card-body">
            <h2 className="card-title">Lista de Usuarios:</h2>

            <ul className="list-group list-group-flush">
              {user.map((usuarios) => {
                return (
                  <li key={usuarios.id} className="list-group-item">
                    {usuarios.nombre}
                    <br />
                    {usuarios.celular}
                    <br />
                    {usuarios.email}
                    <br />
                    {usuarios.updatedAt}
                    <br />
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => handleSubmit(usuarios.id)}
                    >
                      🗑 Eliminar
                    </button>
                  </li>
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
      ) : (
        <h1>NO SOS ADMIN</h1>
      )}
    </>
  );
};

export default Admin;
