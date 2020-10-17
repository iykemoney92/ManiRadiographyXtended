import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonImg, IonItem, IonLabel, IonList, IonNote, IonRow } from '@ionic/react'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../states/GlobalState';
import {firebase} from '../../firebase.config';

export const Account: React.FC<any> = ({title}) => {
    
    const { user,isLoggedIn,setUser, setIsLoggedIn } = useContext(GlobalContext);
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ name, setName] = useState<string>('');
    const [ photo_url, setPhotoUrl] = useState<string>('');
    function signIn(){
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
            setIsLoggedIn(true);
        }).catch(function(error) {
            // Handle Errors here.
            console.log(error);
            // ...
          });
    }

    function signUp(){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            console.log(error);
            // ...
          });
    }

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          if(user.displayName == null){
            user.updateProfile({
                displayName: name,
              }).then(function() {
                // Update successful.
              }).catch(function(error) {
                // An error happened.
              });
          }
          if(user.photoURL == null){
            user.updateProfile({
                photoURL: photo_url,
              }).then(function() {
                // Update successful.
              }).catch(function(error) {
                // An error happened.
              });
          }
          setUser({name: user.displayName, photo_url: user.photoURL, email: user.email});
        } else {
          // User is signed out.
          // ...
        }
      });
    return (
      <>
       <IonContent>
      <IonItem>
        <br/><br/><br/><br/>
      </IonItem>
           <IonAvatar>
                <IonImg src={user.photo_url} />
                <IonLabel>{ user.name}</IonLabel>
                <IonNote>{user.email}</IonNote>
            </IonAvatar>

           <IonList>
           <IonItem>
                   <IonLabel >
                       App Name
                   </IonLabel>
                   <IonLabel >
                       Mani Radiography Xtended
                   </IonLabel>
               </IonItem>
           <IonItem>
                   <IonLabel >
                       Email
                   </IonLabel>
                   <IonLabel >
                       maniradiography@gmail.com
                   </IonLabel>
               </IonItem>
               <IonItem>
                   <IonLabel >
                       Version
                   </IonLabel>
                   <IonLabel >
                       1.1.0
                   </IonLabel>
               </IonItem>
           </IonList>
           <IonGrid>
               <IonRow hidden={isLoggedIn == true ? false : true }>
               <IonCol >
                       <IonButton expand="full" color="success"> Sign In</IonButton>
                   </IonCol>
                   <IonCol>
                       <IonButton expand="full" color="danger">Sign Up</IonButton>
                   </IonCol>
               </IonRow>
               <IonRow hidden={isLoggedIn == true ? true : false }>
                   <IonCol >
                       <IonButton expand="full" color="secondary">Update Profile</IonButton>
                   </IonCol>
                   <IonCol>
                       <IonButton expand="full" color="danger">Sign Out</IonButton>
                   </IonCol>
               </IonRow>
           </IonGrid>
       </IonContent>
      </>
    );
  };