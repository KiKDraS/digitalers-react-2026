import { Button } from "../../../components/button/Button";
import { Spinner } from "../../../components/Spinner";
import { Table } from "../../../components/table/Table";
import { TableBody } from "../../../components/table/Tablebody";
import { TableHead } from "../../../components/table/TableHead";

export const CharactersTable = ({
  characters,
  isLoading,
  error,
  setCharacterToEdit,
  deleteCharacter,
}) => {
  if (isLoading) return <Spinner />;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <Table>
      <TableHead>
        <th>Nombre</th>
        <th>Casa</th>
        <th>Acciones</th>
      </TableHead>
      <TableBody>
        {characters.map((character) => {
          return (
            <tr key={character.id}>
              <td className="col">{character.name}</td>
              <td className="col">{character.house}</td>
              <td className="col">
                <div className="d-flex align-items-center gap-4">
                  <Button
                    text="Editar"
                    color="warning"
                    onClick={() => setCharacterToEdit(character)}
                  />
                  <Button
                    text="Borrar"
                    color="danger"
                    onClick={() => deleteCharacter(character.id)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
};
