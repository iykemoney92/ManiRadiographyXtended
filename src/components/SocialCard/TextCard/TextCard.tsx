import { IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonAvatar, IonLabel, IonItem } from '@ionic/react'
import React from 'react'

export const TextCard: React.FC<any> = ({created_at, body, title, user}) => {
    
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
                {body}
            </IonCardContent>
        </div>
    )
}
