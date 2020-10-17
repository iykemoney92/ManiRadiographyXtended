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
    modalState1: false,
    modalState2: false,
    modalState3: false
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
 function setModalState2(_modalState : any)
 {
    return dispatch({
         type: 'CLOSE_MODAL_2',
         payload: _modalState
     });
 }
 
 function setModalState3(_modalState : any)
 {
    return dispatch({
         type: 'CLOSE_MODAL_3',
         payload: _modalState
     });
 }
 function setUser(_user : any)
 {
    return dispatch({
         type: 'SET_USER',
         payload: _user
     });
 }
 function setIsLoggedIn(_isLoggedIn : any)
 {
    return dispatch({
         type: 'SET_LOGGED_IN',
         payload: _isLoggedIn
     });
 }
 return (<GlobalContext.Provider value={{
   ...state, title: state.title, setTitle, modalState: state.modalState, setModalState, modalState1: state.modalState1,
   setModalState1, modalState2: state.modalState2, setModalState2,modalState3:state.modalState3,setModalState3, isLoggedIn: state.isLoggedIn,
   setIsLoggedIn, setUser
 }}>
     {params.children}
 </GlobalContext.Provider>);
};
