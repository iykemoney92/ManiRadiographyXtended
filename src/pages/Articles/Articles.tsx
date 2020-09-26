import { IonContent, IonList, IonItem, IonLabel } from '@ionic/react'
import React from 'react'

export const Articles : React.FC = () => {
    return (
        <IonContent>
            <IonList>
            <IonItem>
                <IonLabel>Pokémon Yellow</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Pac-Man</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Super Mario World</IonLabel>
            </IonItem>
            </IonList>
        </IonContent>
    )
}
