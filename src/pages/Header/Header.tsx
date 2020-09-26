import React, {useContext} from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar} from '@ionic/react';
import { GlobalContext } from '../../states/GlobalState';

const Header: React.FC<any> = () => {
  const {title} = useContext(GlobalContext);
  return (
    <>
    <IonHeader >
        <IonToolbar color="primary">
          <IonButtons slot="start">
             <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar> 
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
      </>
  );
};

export default Header;
