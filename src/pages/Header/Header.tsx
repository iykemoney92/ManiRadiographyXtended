import React from 'react';
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar} from '@ionic/react';

const Header: React.FC<any> = ({title}) => {
  return (
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
             <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
  );
};

export default Header;
