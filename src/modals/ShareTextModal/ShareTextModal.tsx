import { IonChip, IonAvatar, IonLabel, IonTextarea, IonButton, IonItem, IonLoading, IonToast, IonProgressBar } from '@ionic/react';
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../states/GlobalState';
import {projectFireStore, firebase} from '../../firebase.config';

export const ShareTextModal:React.FC = () => {
  const { user,setModalState } = useContext(GlobalContext);
  const [ postData, setPostData ] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const post = () => {
    //show loading
    setShowLoading(true);
    //send post to firestore 
    const data = {
      comments: [],
      created_at: firebase.firestore.Timestamp.fromDate(new Date()),
      likes: [],
      meta:{
        body: postData
      },
      type: 'text',
      shares: [],
      title: user.name + ' posted',
      user: user};
    
    const res = projectFireStore.collection('posts').add(data).then(()=>{
      window.location.replace('/');
    }).catch((err:any)=>{
      console.log(err);
      setMessage(err);
      setShowToast(true);
    }).finally(()=>{
    setShowLoading(false);
    });
    //close modal
  }
    return (
        <div>
            <IonChip>
                <IonAvatar >
                <img src={user.photo_url} />
                </IonAvatar>
                <IonLabel>{user.name}</IonLabel>
            </IonChip>
            <IonItem>
            <IonTextarea  autofocus={true} placeholder="Type here" value={postData} 
            required={true} onIonChange={e => setPostData(e.detail.value!)} rows={10}></IonTextarea>
            </IonItem>
            <IonButton expand="full" onClick={post}>Post</IonButton>
            <IonButton expand="full" onClick={() => {setModalState(false)}} color="light">Cancel</IonButton>
            <IonLoading
                isOpen={showLoading}
                message={'Please wait...'}
                duration={0}
      />  <IonToast
      isOpen={showToast}
      message={message}
      onDidDismiss={() => setShowToast(false)}
      duration={200}
      color="danger"
    />
        </div>
    )
}
