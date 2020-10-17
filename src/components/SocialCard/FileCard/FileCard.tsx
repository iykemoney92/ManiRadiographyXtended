import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonAvatar, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react'
import { documentOutline } from 'ionicons/icons'
import React from 'react'

export const FileCard: React.FC<any> = ({created_at, body, title, url,user}) => {
    
    return (
        <div>
            <IonCardHeader>
            <IonItem>
            <IonAvatar><img src={user.photo_url} />
            </IonAvatar>
            <IonLabel>{user.name}</IonLabel>
            <IonCardSubtitle slot="end">{created_at}</IonCardSubtitle>
            </IonItem>
            </IonCardHeader> 
              <IonCardContent>
              <IonButton download="Click to download" href={url} fill="clear" expand="full" style={{textAlign:'center'}} strong >
                  <IonIcon style={{zoom:2}} icon={documentOutline} />
              </IonButton>
              <div>{body}</div>
              </IonCardContent>
        </div>
    )
}
