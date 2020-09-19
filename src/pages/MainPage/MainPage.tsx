import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Social from '../Social/Social';

const MainPage: React.FC<any> = ({title}) => {
  return (
    <IonPage>  
    <IonContent fullscreen>
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    </IonContent>
    </IonPage>
  );
};

export default MainPage;
