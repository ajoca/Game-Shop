import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersAdmin = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchUsers();
  }, [filter]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      const filteredUsers = response.data.filter(user => 
        filter === "all" ? true : filter === "premium" ? user.esPremium : !user.esPremium
      );
      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error al obtener usuarios", error);
    }
  };

  return (
    <div className="users-admin p-8">
      <h1 className="text-3xl font-bold mb-4">Gestión de Usuarios</h1>
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="mb-4">
        <option value="all">Todos</option>
        <option value="premium">Premium</option>
        <option value="regular">Regulares</option>
      </select>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Premium</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.esPremium ? "Sí" : "No"}</td>
              <td>
                <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersAdmin;