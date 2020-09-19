import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { attach, camera, chatbubbles, documentText, locate} from 'ionicons/icons';

const Social: React.FC = () => {
  return (
    <IonPage>
    <Header title="Social" />
    <IonContent>
      <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>
        </IonCard>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={chatbubbles} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton><IonIcon icon={documentText} /></IonFabButton>
            <IonFabButton><IonIcon icon={camera} /></IonFabButton>
            <IonFabButton><IonIcon icon={attach} /></IonFabButton>
            <IonFabButton><IonIcon icon={locate} /></IonFabButton>
          </IonFabList>
          
        </IonFab>
    </IonContent>
    </IonPage>
  );
};

export default Social;
