import React, { useState, createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const _data = {
    item1: ['Red', 'Blue', 'White']
}
export const [isLoggedIn, setLoggedIn] = useState(false);

export const [menu, setMenu] = useState([]);

export const [user, setUser] = useState({});

export const GlobalContext = createContext(_data);

export const GlobalProvider = (children:any) => {
 const [state, dispatch] = useReducer(AppReducer, _data);
 return (<GlobalContext.Provider value={{
    item1 : state.item1
 }}>
     {children}
 </GlobalContext.Provider>);
};
