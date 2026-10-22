/*
  Los archivos que creo para armar un Componente de React, son Módulos de JS
*/

import { useEffect, useState } from "react";
import { useForm } from "./components/form/hook/useForm";
import { CharacterForm } from "./features/characters/components/CharacterForm";
import { CharactersTable } from "./features/characters/components/CharactersTable";
// import data from "./features/characters/data/data.json";

const INITIAL_CHARACTERS = [];
const INITIAL_FORM = {
  name: "",
  house: "",
};

// MockApi - https://mockapi.io/
const endpoint = "https://63c3312d8bb1ca34755ea0d1.mockapi.io/characters";

function App() {
  const { form, handleChange, updateForm } = useForm(INITIAL_FORM);
  const [characters, setCharacters] = useState(INITIAL_CHARACTERS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Permite realizar acciones dentro del Ciclo de Vida del Componente
  useEffect(() => {
    // GET
    const getCharacters = async () => {
      // setCharacters(data.characters);

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

    // const timer = setTimeout(() => {
    //   void getCharacters();
    // }, 3000);

    // return () => {
    //   clearTimeout(timer);
    // };
  }, []); //[] -> Vacío para que solo se ejecute el efecto, la PRIMERA VEZ que el Componente se monta

  const setCharacterToEdit = (character) => {
    updateForm(character);
  };

  const resetForm = () => {
    updateForm(INITIAL_FORM);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación con early return
    if (!form.name || !form.house) {
      alert("Debes completar todos los datos");
      return;
    }

    if (form.id) void editCharacter(form);
    else void addCharacter(form);

    resetForm();
  };

  // POST
  const addCharacter = async (newCharacter) => {
    // const newCharacterWithId = { id: crypto.randomUUID(), ...newCharacter };
    // const newCharactersList = [...characters, newCharacterWithId];
    // setCharacters(newCharactersList);

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
    // setCharacters((prev) =>
    //   prev.map((character) =>
    //     character.id === editedCharacter.id ? editedCharacter : character,
    //   ),
    // );

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
    // setCharacters((prev) => prev.filter((character) => character.id !== id));

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

  return (
    <main className="container-lg p-4 d-flex flex-column gap-4">
      <div className="w-50">
        <CharacterForm
          form={form}
          handleChange={handleChange}
          resetForm={resetForm}
          handleSubmit={handleSubmit}
        />
      </div>
      <CharactersTable
        characters={characters}
        isLoading={isLoading}
        error={error}
        setCharacterToEdit={setCharacterToEdit}
        deleteCharacter={deleteCharacter}
      />
    </main>
  );
}

export default App;
