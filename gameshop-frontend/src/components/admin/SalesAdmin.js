import React, { useEffect, useState } from "react";
import axios from "axios";

const SalesAdmin = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const response = await axios.get("http://localhost:8080/sales");
      setSales(response.data);
    } catch (error) {
      console.error("Error al obtener ventas", error);
    }
  };

  return (
    <div className="sales-admin p-8">
      <h1 className="text-3xl font-bold mb-4">Gestión de Ventas</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th>ID Usuario</th>
            <th>Videojuegos</th>
            <th>Fecha</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.userId}</td>
              <td>{sale.gameIds.join(", ")}</td>
              <td>{sale.date}</td>
              <td>${sale.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesAdmin;
