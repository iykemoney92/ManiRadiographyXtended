import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonAvatar, IonItem, IonLabel } from '@ionic/react'
import React from 'react'

export const ImageCard: React.FC<any> = ({created_at, body, title, url,user}) => {
    
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
              <IonImg src={url} />
              <div>{body}</div>
              </IonCardContent>
        </div>
    )
}
