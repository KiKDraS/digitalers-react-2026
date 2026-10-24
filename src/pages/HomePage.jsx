import { ROLES } from "../features/auth/constants";
import { CharacterForm } from "../features/characters/components/CharacterForm";
import { CharactersTable } from "../features/characters/components/CharactersTable";
import { CrudProvider } from "../features/characters/context/crud/CrudProvider";
import { FormProvider } from "../features/characters/context/form/FormProvider";
import { RoleGuard } from "./guards/RoleGuard";

export const HomePage = () => {
  return (
    <main className="container-lg p-4 d-flex flex-column gap-4">
      <FormProvider>
        <CrudProvider>
          <RoleGuard role={ROLES.ADMIN}>
            <div className="w-50">
              <CharacterForm />
            </div>
          </RoleGuard>
          <CharactersTable />
        </CrudProvider>
      </FormProvider>
    </main>
  );
};
