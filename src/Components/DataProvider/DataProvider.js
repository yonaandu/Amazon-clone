// DataProvider.js
import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from '../Utility/reducer';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to set the user
  const setUser = (user) => {
    dispatch({ type: 'SET_USER', user });
  };

  return (
    <DataContext.Provider value={{ state, dispatch, setUser }}>
      {children}
    </DataContext.Provider>
  );
};
