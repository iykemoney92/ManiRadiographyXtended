import { IonCardHeader, IonItem, IonAvatar, IonLabel, IonCardSubtitle, IonCardContent, IonImg, IonButton, IonCol, IonGrid, IonRow, IonIcon } from '@ionic/react'
import { url } from 'inspector'
import { body, pin, timeOutline } from 'ionicons/icons'
import React from 'react'

export const EventCard: React.FC<any> = ({created_at, body, title, url,user, link,map_link,event_title,event_date}) => {
    const e_date = new Date(event_date);
    return (
        <div>
            <IonCardHeader>
            <IonItem>
            <IonAvatar><img src={user.photo_url} />
            </IonAvatar>
            <IonLabel>
            <p>{user.name}</p>
            <p><small>{title}</small></p>
            </IonLabel>
            <IonCardSubtitle slot="end">{created_at}</IonCardSubtitle>
            </IonItem>
            </IonCardHeader> 
              <IonCardContent>
                  <div style={{textAlign:'left'}}>
              <h5><b>Event Title</b>: {event_title}</h5>
              <div>{body}</div>
              <div> <IonIcon icon={timeOutline} slot="start" />: {e_date.toLocaleString()}</div>
              <div><IonIcon icon={pin} slot="start" />: {map_link}</div></div>
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
