import { createContext, ReactNode, useState } from "react";
import { useLocation, useParams } from "react-router";

export interface updateTournamentInterface {}

const defaultState = {} as updateTournamentInterface;

export const updateTournamentContext = createContext(defaultState);

type settingDrawerProviderProps = {
  children: ReactNode;
};

export default function UpdateTournamentContextProvider({
  children,
}: settingDrawerProviderProps) {
  const [isTournamentDialogOpen, setIsTournamentDialogOpen] = useState(false);

  const getSelectedTournamentId = () => {
    let params = useParams();
    return params?.id;
  };

  return (
    <updateTournamentContext.Provider
      value={{
        isTournamentDialogOpen,
        setIsTournamentDialogOpen,
        getSelectedTournamentId,
      }}>
      {children}
    </updateTournamentContext.Provider>
  );
}
