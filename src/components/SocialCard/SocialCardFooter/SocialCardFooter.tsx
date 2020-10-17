import { IonGrid, IonRow, IonCol, IonIcon, IonLabel, IonButton, IonAvatar, IonContent, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonModal, IonNote, IonInput, IonText, IonTextarea, IonToast } from '@ionic/react'
import { heart, chatbox, share, sendOutline } from 'ionicons/icons'
import React, { useContext, useEffect, useState } from 'react'
import {projectFireStore, firebase} from '../../../firebase.config';
import { GlobalContext } from '../../../states/GlobalState';

export const SocialCardFooter: React.FC<any> = ({id,likes,shares,comments}) => {
    const { user } = useContext(GlobalContext);
    const colStyle = {textAlign:'center'};
    const [showCommentModal, setCommentModal] = useState(false);
    const [commentData, setCommentData] = useState<string>();
    const [postData, setPostData] = useState<any>();
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState('');
    const  postRef = projectFireStore.collection("posts").doc(id);

    useEffect(()=>{
    postRef.get().then(function(post) {
      if (post.exists) {
          //console.log("Document data:", post.data());
          setPostData(post.data());
      } else {
          // doc.data() will be undefined in this case
          //console.log("No such document!");
          window.location.replace('/');
      }
    }).catch(function(error) {
        //console.log("Error getting document:", error);
        window.location.replace('/');
    });

    })
    const likePost = () => {
          let exists = false;
          postData.likes.forEach((el:any)=>{
            if(el.email == user.email){
              exists = true;
            }
          })
          if(!exists){
            postData.likes.push(user);
          }
          postRef.update({likes:postData.likes});
    }

    const commentPost = () => {
      setCommentModal(true);
    }

    const sharePost = () => {
      var post = postData;
      post.title = user.name + ' reposted';
      post.user = user;
      post.created_at = firebase.firestore.Timestamp.fromDate(new Date());
      projectFireStore.collection("posts").add(post).then(()=>{
        window.location.replace('/');
      }).catch((err:any)=>{
        console.log(err);
        setMessage(err);
        setShowToast(true);
      });
    }

    const sendComment = () => {
      let comments = postData.comments;
      var comment = {
        user: user,
        comment: commentData,
        created_at: firebase.firestore.Timestamp.fromDate(new Date())
      }
      comments.push(comment);
      postRef.update({comments:comments});
      setCommentData('');
    }
    return (
      <>
        <IonGrid>
              <IonRow>
                <IonCol style={colStyle}>
                  <IonIcon icon={heart} />
                  <IonLabel>{likes.length}</IonLabel>
                </IonCol>
                <IonCol style={colStyle}>
                  <IonIcon icon={chatbox} />
                  <IonLabel>{comments.length}</IonLabel>
                </IonCol>
                <IonCol style={colStyle}>
                  <IonIcon icon={share} />
                  <IonLabel>{shares.length}</IonLabel>
                </IonCol>
                
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton expand="full" fill="clear" onClick={likePost}>Like</IonButton>
                </IonCol>
                <IonCol >
                  <IonButton expand="full" fill="clear" onClick={commentPost}>Comment</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton expand="full" fill="clear" onClick={sharePost}>RePost</IonButton>
                </IonCol>
              </IonRow>
              </IonGrid>
              <IonModal
          showBackdrop = {true}
          isOpen={showCommentModal}
          swipeToClose={true}>
            <IonContent>
              <IonGrid >
                <IonRow>
                  <IonCol size="9" >
                  <IonTextarea autofocus={true} placeholder="Type here" rows={3} autoGrow={true} value={commentData} 
                  onIonChange={ e => setCommentData(e.detail.value!)}></IonTextarea></IonCol>
                  <IonCol><IonButton  onClick={sendComment}  color="light"  shape="round"><IonIcon icon={sendOutline}/></IonButton></IonCol>
                </IonRow>
              </IonGrid>
              
            <IonList>
            {
             comments && comments.map((comment:any)  => (
              <IonItemSliding>
              <IonItem>
                <IonAvatar>
                  <IonImg src={comment.user.photo_url} />
                </IonAvatar>
                <IonText>
                <h5>
                  {comment.user.name}
                </h5>
                  {comment.comment}
                </IonText>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption onClick={() => {}}></IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))
        }
            </IonList>
            </IonContent>
          </IonModal>

          <IonToast
        isOpen={showToast}
        message={message}
        onDidDismiss={() => setShowToast(false)}
        duration={1000}
        color="danger"
      />
      </>
    )
}
