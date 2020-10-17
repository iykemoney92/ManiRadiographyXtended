import { IonChip, IonAvatar, IonLabel, IonTextarea, IonButton, IonItem, IonLoading, IonToast, IonInput, IonIcon, IonImg, IonContent } from '@ionic/react';
import React, { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../../states/GlobalState';
import {projectFireStore, firebase} from '../../firebase.config';
import { documentOutline, imageOutline } from 'ionicons/icons';

export const ShareFileModal:React.FC = () => {
    const { user,setModalState2 } = useContext(GlobalContext);
    const [ postData, setPostData ] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState('');
    const [file_url, setFileUrl] = useState('');
    const [isHidden, setIsHidden] = useState(true);
    const [hasError, setError] = useState(false);
    const fileInput = useRef(null);
    const [file, setFile] = useState<any> (null);
    const handleFileChange = (e: any) => {
    let f = e.target.files[0];
    setFile(f);
    // Split the filename to get the name and type
    let fileParts = f.name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    if(['pdf','doc','ppt','pps','xls','zip'].indexOf(fileType)!=-1){
        var reader = new FileReader();
        reader.onload = function (e: any) {
           setIsHidden(false);
           setError(false);
           setFileUrl(e.target.result);
        }
        reader.readAsDataURL(f); 
    }else{
        setIsHidden(true);
        setError(true);
        setMessage('File type not supported. Only pdf, doc, ppt, pps, xls, zip allowed');
        setShowToast(true);
    }
    }
    const post = () => {
        if(!hasError && file!=null){
            var storage = firebase.storage();

            var storageRef = storage.ref();
            //show loading
            setShowLoading(true);
            //upload to storage
            // Create the file metadata
                    
            let fileParts = file.name.split('.');
            let fileType = fileParts[1];
            let contentType = '';
            switch(fileType){
                case 'doc':
                    contentType = 'application/msword';
                    break;
                case 'pdf':
                    contentType = 'application/pdf';
                    break;
                    case 'ppt':
                        contentType = 'application/vnd.ms-powerpoint'
                        break;
                        case 'pps':
                            contentType = 'application/vnd.ms-powerpoint';
                            break;
                            case 'xls':
                                contentType = 'application/vnd.ms-excel';
                                break;
                                case 'zip':
                                    contentType = 'application/zip';
                                    break;
            }
            var metadata = {
                contentType: contentType
            };
  
            // Upload file and metadata to the object 'images/mountains.jpg'
            var uploadTask = storageRef.child('images/' + (Math.random()).toString().substr(2,25)).put(file, metadata);
            
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
                console.log('File available at', downloadURL);const data = {
                    comments: [],
                    created_at: firebase.firestore.Timestamp.fromDate(new Date()),
                    likes: [],
                    meta:{
                      body: postData,
                      url: downloadURL
                    },
                    type: 'file',
                    shares: [],
                    title: ' shared a document',
                    user: user};
                  console.log(fileInput);
                  const res = projectFireStore.collection('posts').add(data).then(()=>{
                    window.location.replace('/');
                  }).catch((err:any)=>{
                    console.log(err);
                    setMessage(err);
                    setShowToast(true);
                  }).finally(()=>{
                  setShowLoading(false);
                  });
                });
            });

      
    }
    else{
        setMessage('File type not supported or none selected');
        setShowToast(true);
    }
}

      return (
        <IonContent>
            <IonItem>
              <IonChip>
                  <IonAvatar >
                  <img src={user.photo_url} />
                  </IonAvatar>
                  <IonLabel>{user.name}</IonLabel>
              </IonChip></IonItem>
              <IonItem>
                        <input
                    ref={fileInput}
                    hidden
                    type="file"
                    accept=".doc,.ppt,.pps,.xls,.pdf,.zip"
                    onChangeCapture={handleFileChange}
                />
                        <IonButton
                color="primary"
                onClick={() => {
                // @ts-ignore
                fileInput?.current?.click();
                // setBackgroundOption(BackgroundOptionType.Gradient);
                }} expand="block">
                <IonIcon slot="start" icon={documentOutline} />
                Select document you wish to share.
            </IonButton>
              </IonItem >
              <IonItem hidden={isHidden}>
                <IonIcon   style={{zoom:5}} icon={documentOutline}/>
                Document selected
                </IonItem>
              <IonItem>
              <IonTextarea  autofocus={true} placeholder="Type here" value={postData} 
              required={true} onIonChange={e => setPostData(e.detail.value!)} rows={10}></IonTextarea>
              </IonItem>
              <IonItem>
              <IonButton  onClick={post}>Post</IonButton>
              <IonButton  onClick={() => {setModalState2(false)}} color="light">Cancel</IonButton></IonItem>
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
      /></IonContent>
      )
}
