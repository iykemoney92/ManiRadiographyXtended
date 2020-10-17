import { IonChip, IonAvatar, IonLabel, IonTextarea, IonButton, IonItem, IonLoading, IonToast, IonProgressBar, IonInput, IonDatetime } from '@ionic/react';
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../states/GlobalState';
import {projectFireStore, firebase} from '../../firebase.config';

export const ShareEventModal:React.FC = () => {
  const { user,setModalState3 } = useContext(GlobalContext);
  const [ postDataTitle, setPostDataTitle ] = useState('');
  const [ postDataBody, setPostDataBody ] = useState('');
  const [ postDataTime, setPostDataTime ] = useState(firebase.firestore.Timestamp.fromDate(new Date()).toDate().toString());
  const [ postDataLink, setPostDataLink ] = useState('');
  const [ postDataMapLink, setPostDataMapLink ] = useState('');
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
        body: postDataBody,
        map_link: postDataMapLink,
        link: postDataLink,
        event_date: postDataTime,
        title: postDataTitle
      },
      type: 'event',
      shares: [],
      title: ' shared an event',
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
            <IonInput  autofocus={true} placeholder="Event Title*" value={postDataTitle} 
            required={true} onIonChange={e => setPostDataTitle(e.detail.value!)} ></IonInput>
            </IonItem>
           <IonItem><IonInput  autofocus={true} placeholder="Event Link (optional)" value={postDataLink} 
             onIonChange={e => setPostDataLink(e.detail.value!)} ></IonInput>
            </IonItem>
           <IonItem><IonInput  autofocus={true} placeholder="Event Location*" value={postDataMapLink} 
             onIonChange={e => setPostDataMapLink(e.detail.value!)} ></IonInput>
            </IonItem>
            <IonItem> 
                <IonDatetime 
                 displayFormat="DDD MMM YYYY, h m a"
                 placeholder="Event Date" value={postDataTime} onIonChange={e => setPostDataTime(e.detail.value!)}></IonDatetime>
                </IonItem>
            <IonItem>
            <IonTextarea  autofocus={true} placeholder="Description" value={postDataBody} 
            required={true} onIonChange={e => setPostDataBody(e.detail.value!)} rows={10}></IonTextarea>
            </IonItem>
            <IonButton expand="full" onClick={post}>Post</IonButton>
            <IonButton expand="full" onClick={() => {setModalState3(false)}} color="light">Cancel</IonButton>
            <IonLoading
                isOpen={showLoading}
                message={'Please wait...'}
                duration={0}
      />  <IonToast
      isOpen={showToast}
      message={message}
      onDidDismiss={() => setShowToast(false)}
      duration={2000}
      color="danger"
    />
        </div>
    )
}
