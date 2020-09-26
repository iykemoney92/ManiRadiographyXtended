import { IonChip, IonAvatar, IonLabel, IonTextarea, IonButton, IonItem } from '@ionic/react';
import React, { useContext } from 'react'
import { GlobalContext } from '../../states/GlobalState';

export const ShareTextModal:React.FC = () => {
  const { user } = useContext(GlobalContext);
    return (
        <div>
            <IonChip>
                <IonAvatar >
                <img src={user.photo_url} />
                </IonAvatar>
                <IonLabel>{user.name}</IonLabel>
            </IonChip>
            <IonItem>
            <IonTextarea autoGrow={true} autofocus={true} placeholder="Type here" required={true} spellcheck={true} rows={10}></IonTextarea>
            </IonItem>
            <IonButton>Post</IonButton>
        </div>
    )
}
