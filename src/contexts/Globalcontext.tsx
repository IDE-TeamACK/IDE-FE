import { createContext, useContext } from 'react';

type IGlobalContext = {
  roomUserName: string;
  setRoomUserName: (name: string) => void;
};

export const GlobalContext = createContext<IGlobalContext>({
  roomUserName: '',
  setRoomUserName: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
