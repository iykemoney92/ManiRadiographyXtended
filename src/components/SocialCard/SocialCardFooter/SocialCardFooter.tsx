import { IonGrid, IonRow, IonCol, IonIcon, IonLabel, IonButton } from '@ionic/react'
import { heart, chatbox, share } from 'ionicons/icons'
import React, { useContext, useState } from 'react'
import {projectFireStore} from '../../../firebase.config';
import { GlobalContext } from '../../../states/GlobalState';

export const SocialCardFooter: React.FC<any> = ({id,likes,shares,comments}) => {
    const { user } = useContext(GlobalContext);
    const colStyle = {textAlign:'center'};
    const [showCommentModal, setCommentModal] = useState(false);
    const likePost = () => {
      var postRef = projectFireStore.collection("posts").doc(id);
      postRef.get().then(function(post) {
        if (post.exists) {
            console.log("Document data:", post.data());
            let postData:any = post.data();
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
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    }

    const commentPost = () => {
      setCommentModal(true);
    }

    const sharePost = () => {

    }
    return (
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
                <IonCol>
                  <IonButton expand="full" fill="clear" onClick={commentPost}>Comment</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton expand="full" fill="clear" onClick={sharePost}>Share</IonButton>
                </IonCol>
              </IonRow>
              </IonGrid>
    )
}
