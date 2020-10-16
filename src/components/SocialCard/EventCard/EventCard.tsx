import { IonCardHeader, IonItem, IonAvatar, IonLabel, IonCardSubtitle, IonCardContent, IonImg, IonButton, IonCol, IonGrid, IonRow } from '@ionic/react'
import { url } from 'inspector'
import { body } from 'ionicons/icons'
import React from 'react'

export const EventCard: React.FC<any> = ({created_at, body, title, url,user, link,map_link}) => {
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
              <div>
                  <IonGrid><IonRow>
                      <IonCol>
                          <IonButton expand="full" color="white" href={map_link}>Get Directions</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" color="dark" href={link}>Link to Event</IonButton>
                      </IonCol>
                      </IonRow></IonGrid>

              </div>
              </IonCardContent>
        </div>
    )
}
