import React, { useState, createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const AppData : any = {
    title : null, //title of each page navigated
    isLoggedIn : false,
    user : {
        name: 'Anasiudu Ikechukwu',
        photo_url: 'https://firebasestorage.googleapis.com/v0/b/mani-radiogrpahy-xtended.appspot.com/o/avatars%2F0.jpg?alt=media&token=e9764e9e-4a7d-40bc-b603-a9205fa1286e',
        email: 'skybender21@gmail.com'
    },
    isLoading: false,
    modalState: false,
    modalState1: false
};

export const GlobalContext = createContext(AppData);

export const GlobalProvider = (params:any) => {
 const [state, dispatch] = useReducer(AppReducer, AppData);

 //Actions
 function setTitle(_title : string)
 {
    return dispatch({
         type: 'SET_TITLE',
         payload: _title
     });
 }
 function setModalState(_modalState : any)
 {
    return dispatch({
         type: 'CLOSE_MODAL',
         payload: _modalState
     });
 }
 function setModalState1(_modalState : any)
 {
    return dispatch({
         type: 'CLOSE_MODAL_1',
         payload: _modalState
     });
 }
 return (<GlobalContext.Provider value={{
   ...state, title: state.title, setTitle, modalState: state.modalState, setModalState, modalState1: state.modalState1,
   setModalState1
 }}>
     {params.children}
 </GlobalContext.Provider>);
};
