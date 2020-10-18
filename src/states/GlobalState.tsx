import React, { useState, createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const AppData : any = {
    title : null, //title of each page navigated
    isLoggedIn : false,
    user : null,
    isLoading: false,
    modalState: false,
    modalState1: false,
    modalState2: false,
    modalState3: false,
    signInModalState: false,
    signUpModalState: false,
    updateProfileModalState: false
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
 function setSignInModalState(_modalState : any)
 {
    return dispatch({
         type: 'SIGNIN_MODAL_STATE',
         payload: _modalState
     });
 }
 function setSignUpModalState(_modalState : any)
 {
    return dispatch({
         type: 'SIGNUP_MODAL_STATE',
         payload: _modalState
     });
 }
 function setupdateProfileModalState(_modalState : any)
 {
    return dispatch({
         type: 'UPDATE_PROFILE_MODAL_STATE',
         payload: _modalState
     });
 }
 return (<GlobalContext.Provider value={{
   ...state, title: state.title, setTitle, modalState: state.modalState, setModalState, modalState1: state.modalState1,
   setModalState1, modalState2: state.modalState2, setModalState2,modalState3:state.modalState3,setModalState3, isLoggedIn: state.isLoggedIn,
   setIsLoggedIn, setUser, user: state.user, signUpModalState: state.signUpModalState, setSignUpModalState, signInModalState: state.signInModalState,
   setSignInModalState,updateProfileModalState: state.updateProfileModalState,setupdateProfileModalState
 }}>
     {params.children}
 </GlobalContext.Provider>);
};
