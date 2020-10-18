import { IonContent, IonItem, IonInput, IonButton, IonLoading, IonToast } from '@ionic/react'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../states/GlobalState';
import {firebase, projectFireStore} from '../../firebase.config';

export const SignUpModal: React.FC<any> = () => {
    
    const { setUser, setIsLoggedIn,setSignUpModalState } = useContext(GlobalContext);
    const [email, setEmail]  = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    function signUp(){
        setShowLoading(true);
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
                setUser({name: name, photo_url: null, email: email});
                setIsLoggedIn(true);
                setSignUpModalState(false);
            }).catch(function(error){
                setMessage(error.message);
                setShowToast(true);
            })
        }).catch(function(error) {
            // Handle Errors here.
            console.log(error);
            // ...
            setMessage(error.message);
            setShowToast(true);
          }).finally(function(){
            setShowLoading(false);
          });
    }
    
    return (
        <IonContent>
              <h3>Sign Up</h3>
              <IonItem>
              <IonInput type="text" value={name} onIonChange = { (e:any) => setName(e.detail.value!)} placeholder="Name"/></IonItem>
              <IonItem>
              <IonInput type="email" value={email} onIonChange = { (e:any) => setEmail(e.detail.value!)} placeholder="Email"/></IonItem>
              <IonItem>
              <IonInput type="password" value={password} onIonChange = { (e:any) => setPassword(e.detail.value!)} placeholder="Password"/></IonItem>
              <IonButton expand="full" color="dark" onClick={signUp}>Sign Up</IonButton>
              <IonButton expand="full" color="light" onClick={setSignUpModalState(false)}>Cancel</IonButton>
              <IonLoading
                  isOpen={showLoading}
                  message={'Please wait...'}
                  duration={0}
        /> <IonToast
        isOpen={showToast}
        message={message}
        onDidDismiss={() => setShowToast(false)}
        duration={2000}
        color="danger"
      />
              </IonContent>
          
    )
}
