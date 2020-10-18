import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonLoading, IonModal, IonNote, IonRow, IonToast } from '@ionic/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../states/GlobalState';
import {firebase, projectFireStore} from '../../firebase.config';
import { imageOutline } from 'ionicons/icons';
import { SignInModal } from '../../modals/SignInModal/SignInModal';
import { SignUpModal } from '../../modals/SignUpModal/SignUpModal';

export const Account: React.FC<any> = ({title}) => {
    
    const { user,isLoggedIn,setUser, setIsLoggedIn,
      signUpModalState,setSignUpModalState,signInModalState, 
      setSignInModalState,updateProfileModalState, setupdateProfileModalState } = useContext(GlobalContext);
    const [name, setName] = useState<string>('');
    const [photo_url, setPhotoUrl] = useState<string>('');
    const [isHidden, setIsHidden] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [file, setFile] = useState<any> (null);
    const [showLoading, setShowLoading] = useState(false);
    const fileInput = useRef(null);
    const [settings, setSettings] = useState<any>({});
    useEffect(()=>{
      const  docRef = projectFireStore.collection("appInfo").doc('settings');
      docRef.get().then(function(doc) {
        if (doc.exists) {
            //console.log("Document data:", post.data());
            setSettings(doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });  
    })
    const handleFileChange = (e: any) => {
    let f = e.target.files[0];
    setFile(f);
    // Split the filename to get the name and type
    let fileParts = f.name.split('.');
    let fileType = fileParts[1];
    if(['jpeg','jpg','gif','png'].indexOf(fileType)!=-1){
        var reader = new FileReader();
        reader.onload = function (e: any) {
           setIsHidden(false);
           setImageUrl(e.target.result);
        }
        reader.readAsDataURL(f); 
    }else{
        setIsHidden(true);
        setMessage('File type not supported. Only jpeg, jpg, png, gif allowed');
        setShowToast(true);
    }
    }


    
    function updateProfile(){
        let user:any = firebase.auth().currentUser;
        if(name!=null){
        user.updateProfile({
            displayName: name,
          }).then(function() {
            // Update successful.
          }).catch(function(error:any) {
            // An error happened.
          });}
          if(file != null){
            var storage = firebase.storage();

            var storageRef = storage.ref();
            //show loading
            setShowLoading(true);
            //upload to storage
            // Create the file metadata
            let fileParts = file.name.split('.');
            let fileType = fileParts[1];
            var metadata = {
                contentType: 'image/'+fileType
            };
  
            // Upload file and metadata to the object 'images/mountains.jpg'
            var uploadTask = storageRef.child('profile_photo/' + (Math.random()).toString().substr(2,25)).put(file, metadata);
            
            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                }
                }, function(error:any) {
                    
                setMessage(error);
                setShowToast(true);
                console.log(error.code);
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object\
                    break;
            
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
            }, function() {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                user.updateProfile({
                    photoURL: downloadURL,
                  }).then(function() {
                    // Update successful.
                  }).catch(function(error:any) {
                    // An error happened.
                  }).finally(function(){
                    setupdateProfileModalState(false);
                  });
            });
          });
        }
    }
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          if(user.photoURL == null){
              user.updateProfile({
                  photoURL : settings.photo_url,
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
          //setIsLoggedIn(false);
          //setUser(null);
        }
      });
      function signOut()
      {
        console.log('Signout called');
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log('User signed out')
          }).catch(function(error) {
            // An error happened.
            console.log(error);
          });
      }
    return (
      <>
       <IonContent>
      <IonItem style={{margin:10}}>
       
      </IonItem>
        
           <IonList>
      <IonItem style={{padding:10, textAlign:"center"}} hidden={user == null ? true : false}>
           <IonAvatar >
                <IonImg src={user?.photo_url} />
            </IonAvatar>
            <div><IonLabel>
                    { user?.name}
                    </IonLabel>
                    <IonNote>{user?.email}</IonNote>
                    </div>
            </IonItem>
           <IonItem>
                   <IonLabel >
                       App Name
                   </IonLabel>
                   <IonLabel >
                       {settings.app_name}
                   </IonLabel>
               </IonItem>
           <IonItem>
                   <IonLabel >
                       Email
                   </IonLabel>
                   <IonLabel >
                       {settings.email}
                   </IonLabel>
               </IonItem>
               <IonItem>
                   <IonLabel >
                       Version
                   </IonLabel>
                   <IonLabel >
                       {settings.app_version}
                   </IonLabel>
               </IonItem>
           </IonList>
           <IonGrid>
               <IonRow hidden={isLoggedIn == true ? true : false }>
               <IonCol >
                       <IonButton expand="full" color="success" onClick={() => setSignInModalState(true)}> Sign In</IonButton>
                   </IonCol>
                   <IonCol>
                       <IonButton expand="full" color="danger" onClick={() => setSignUpModalState(true)}>Sign Up</IonButton>
                   </IonCol>
               </IonRow>
               <IonRow hidden={isLoggedIn == true ? false : true }>
                   <IonCol >
                       <IonButton expand="full" color="secondary" onClick={() => setupdateProfileModalState(true)}>Update Profile</IonButton>
                   </IonCol>
                   <IonCol>
                       <IonButton expand="full" color="danger" onClick={signOut}>Sign Out</IonButton>
                   </IonCol>
               </IonRow>
           </IonGrid>
       </IonContent>
       <>
       <IonModal
          showBackdrop = {true}
          isOpen={signUpModalState}
          swipeToClose={true}>
            <SignUpModal />
          </IonModal>

          <IonModal
          showBackdrop = {true}
          isOpen={signInModalState}
          swipeToClose={true}>
            <SignInModal />
            </IonModal>
          <IonModal
          showBackdrop = {true}
          isOpen={updateProfileModalState}
          swipeToClose={true}>
              <h3>Update</h3>
             
               <IonAvatar><IonImg src={image_url}  hidden={isHidden}/></IonAvatar>
                <IonItem>
                        <input
                    ref={fileInput}
                    hidden
                    type="file"
                    accept="image/*"
                    onChangeCapture={handleFileChange}
                />
                        <IonButton
                color="primary"
                onClick={() => {
                // @ts-ignore
                fileInput?.current?.click();
                // setBackgroundOption(BackgroundOptionType.Gradient);
                }} expand="block">
                <IonIcon slot="start" icon={imageOutline} />
                Select photo you wish to share
            </IonButton>
            </IonItem>
              <IonItem>
              <IonInput type="text" value={name} onIonChange = { (e:any) => setName(e.detail.value!)} placeholder="Name"/></IonItem>
              <IonButton expand="full" color="dark" onClick={updateProfile}>Update Profile</IonButton>
          </IonModal>
       </>
       <>
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
       </>
      </>
    );
  };