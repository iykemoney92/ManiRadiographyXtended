import { IonContent, IonItem, IonInput, IonButton, IonLoading, IonToast } from '@ionic/react'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../states/GlobalState';
import {firebase, projectFireStore} from '../../firebase.config';

export const SignInModal: React.FC<any> = () => {
    
    const { user,isLoggedIn,setUser,signInModalState, setIsLoggedIn,setSignInModalState } = useContext(GlobalContext);
    const [email, setEmail]  = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    function signIn(){
        setShowLoading(true);
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
            setIsLoggedIn(true);
            setSignInModalState(false);
        }).catch(function(error) {
            // Handle Errors here.
            console.log(error);
            // ...
            setMessage(error.message);
            setShowToast(true);
          }).finally(function(){
            //setSignInModalState(false);
            setShowLoading(false);
          });
    }
    return (
        <IonContent>
              <h3>Sign In</h3>
            <IonItem>
              <IonInput type="email" value={email} onIonChange = { (e:any) => setEmail(e.detail.value!)} placeholder="Email"/></IonItem>
              <IonItem>
              <IonInput type="password" value={password} onIonChange = { (e:any) => setPassword(e.detail.value!)} placeholder="Password"/></IonItem>
              <IonButton expand="full" color="dark" onClick={signIn}>Sign In</IonButton>
              <IonButton expand="full" color="light" onClick={setSignInModalState(false)}>Cancel</IonButton>
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
