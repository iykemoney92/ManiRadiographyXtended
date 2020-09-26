import { IonGrid, IonRow, IonCol, IonIcon, IonLabel, IonButton } from '@ionic/react'
import { heart, chatbox, share } from 'ionicons/icons'
import React from 'react'

export const SocialCardFooter: React.FC<any> = ({likes,shares,comments}) => {
    const colStyle = {textAlign:'center'};
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
                  <IonButton expand="full" fill="clear">Like</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton expand="full" fill="clear">Comment</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton expand="full" fill="clear">Share</IonButton>
                </IonCol>
              </IonRow>
              </IonGrid>
    )
}
