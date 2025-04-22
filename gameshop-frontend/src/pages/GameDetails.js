import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importa useNavigate
import axios from "axios";

const GameDetails = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const navigate = useNavigate(); // Hook para navegación
  const [game, setGame] = useState(null); // Estado para almacenar los datos del juego
  const [loading, setLoading] = useState(true); // Estado para saber si los datos se están cargando
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchGame = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/game/${id}`);
        setGame(response.data);
      } catch (err) {
        setError("Error al obtener los detalles del juego.");
      } finally {
        setLoading(false);
      }
    };
    fetchGame();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!game) {
    return <p>Juego no encontrado.</p>;
  }

  return (
    <div className="p-8 bg-white shadow-md rounded-md max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{game.nombre}</h1>
      <p className="mb-4 text-lg">{game.descripcion}</p>
      <p className="text-xl mb-2">Precio: ${game.precio}</p>
      <p className="text-lg">Consola: {game.consola}</p>
      <p className="text-lg">Idioma: {game.idioma}</p>
      <p className="text-lg">Género: {game.genero}</p>
      <p className="text-lg">Peso: {game.peso}</p>
      <p className="text-lg">Versión: {game.version}</p>

      {/* Imágenes del Juego */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Imágenes del Juego</h2>
        <div className="flex gap-4">
          {game.imguno && (
            <img
              src={game.imguno}
              alt="Imagen 1"
              className="w-1/3 h-64 object-cover rounded-md"
            />
          )}
          {game.imgdos && (
            <img
              src={game.imgdos}
              alt="Imagen 2"
              className="w-1/3 h-64 object-cover rounded-md"
            />
          )}
          {game.imgtres && (
            <img
              src={game.imgtres}
              alt="Imagen 3"
              className="w-1/3 h-64 object-cover rounded-md"
            />
          )}
        </div>
      </div>

      {/* Video del Juego */}
      {game.video && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Trailer del Juego</h3>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/II5UsqP2JAk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md border border-gray-200"
          ></iframe>
        </div>
      )}

      {/* Botón de Volver */}
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-8 bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700"
      >
        Volver
      </button>
    </div>
  );
};

export default GameDetails;
