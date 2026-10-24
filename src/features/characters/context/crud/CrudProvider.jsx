import { useEffect, useMemo, useState } from "react";
import { CrudContext } from "./CrudContext";

const INITIAL_CHARACTERS = [];

// MockApi - https://mockapi.io/
const endpoint = "https://63c3312d8bb1ca34755ea0d1.mockapi.io/characters";

export const CrudProvider = ({ children }) => {
  const [characters, setCharacters] = useState(INITIAL_CHARACTERS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Permite realizar acciones dentro del Ciclo de Vida del Componente
  useEffect(() => {
    // GET
    const getCharacters = async () => {
      try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Error fetching characters list");
        const characters = await res.json();
        setCharacters(characters);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    void getCharacters();
  }, []); //[] -> Vacío para que solo se ejecute el efecto, la PRIMERA VEZ que el Componente se monta

  // POST
  const addCharacter = async (newCharacter) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newCharacter),
        headers: {
          "content-type": "application/json", // Aviso que estoy enviando un Objeto JSON en el body
        },
      };

      const res = await fetch(endpoint, options);

      if (!res.ok) throw new Error("Error creating new character");

      const createdCharacter = await res.json();
      setCharacters((prev) => [...prev, createdCharacter]);
    } catch (error) {
      setError(error.message);
    }
  };

  // PUT
  const editCharacter = async (editedCharacter) => {
    try {
      const options = {
        method: "PUT",
        body: JSON.stringify(editedCharacter),
        headers: {
          "content-type": "application/json", // Aviso que estoy enviando un Objeto JSON en el body
        },
      };

      const res = await fetch(`${endpoint}/${editedCharacter.id}`, options);

      if (!res.ok) throw new Error("Error updating character");

      const updatedCharacter = await res.json();
      setCharacters((prev) =>
        prev.map((character) =>
          character.id === updatedCharacter.id ? updatedCharacter : character,
        ),
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // DELETE
  const deleteCharacter = async (id) => {
    try {
      const options = {
        method: "DELETE",
      };

      const res = await fetch(`${endpoint}/${id}`, options);

      if (!res.ok) throw new Error("Error delete character");

      const deletedCharacter = await res.json();

      setCharacters((prev) =>
        prev.filter((character) => character.id !== deletedCharacter.id),
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const data = useMemo(
    () => ({
      characters,
      error,
      isLoading,
      addCharacter,
      editCharacter,
      deleteCharacter,
    }),
    [characters, error, isLoading],
  );

  // Desde v19 NO es necesario CrudContext.Provider
  return <CrudContext value={data}>{children}</CrudContext>;
};
