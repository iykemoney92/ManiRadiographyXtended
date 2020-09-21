import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react'
import React from 'react'

export const SocialCard : React.FC<any> = ({id, created_at,title,body}) => {
    return (
        <IonCard key={id}>
              <IonCardHeader>
                <IonCardSubtitle>{created_at.toString()}</IonCardSubtitle>
                <IonCardTitle>{title}</IonCardTitle>
              </IonCardHeader> 
              <IonCardContent>
                {body}
              </IonCardContent>
            </IonCard>
    )
}
