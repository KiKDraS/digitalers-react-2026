import { Button } from "../../../components/button/Button";
import { Spinner } from "../../../components/Spinner";
import { Table } from "../../../components/table/Table";
import { TableBody } from "../../../components/table/Tablebody";
import { TableHead } from "../../../components/table/TableHead";
import { useAuthContext } from "../../auth/context/AuthProvider";
import { isAdmin } from "../../auth/utils/roles";
import { useCrudContext } from "../context/crud/useCrudContext";
import { useFormContext } from "../context/form/FormProvider";

export const CharactersTable = () => {
  const { setCharacterToEdit } = useFormContext();
  const { isLoading, error, characters, deleteCharacter } = useCrudContext();
  const { user } = useAuthContext();

  if (isLoading) return <Spinner />;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <Table>
      <TableHead>
        <th>Nombre</th>
        <th>Casa</th>
        {isAdmin(user) && <th>Acciones</th>}
      </TableHead>
      <TableBody>
        {characters.map((character) => {
          return (
            <tr key={character.id}>
              <td className="col">{character.name}</td>
              <td className="col">{character.house}</td>
              {isAdmin(user) && (
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
              )}
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
};
