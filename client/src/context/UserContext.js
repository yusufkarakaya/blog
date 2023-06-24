import { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userContextInfo, setUserContextInfo] = useState({});
  return (
    <UserContext.Provider value={{ userContextInfo, setUserContextInfo }}>
      {children}
    </UserContext.Provider>
  );
}
