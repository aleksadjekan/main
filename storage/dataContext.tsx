import React, { createContext, useState } from 'react';
import { User } from './types';

export const DataContext = React.createContext({ users: [], animals: [], loginUser: null });

export const GlobalState = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [loginUser, setLoginUser] = useState(null as User);

  return (
    <DataContext.Provider value={{ users, animals, loginUser }}>
      {children}
    </DataContext.Provider>
  );
};