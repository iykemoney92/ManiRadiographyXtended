import React,{useEffect, useState} from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../Header/Header';
import { attach, camera, chatbubbles, documentText, locate} from 'ionicons/icons';
import useFireStore from '../../hooks/useFireStore';
import { SocialCard } from '../../components/SocialCard/SocialCard';


const Social: React.FC = () => {
  const { posts } = useFireStore('posts');

  console.log(posts);
  return (
    <>
    <IonPage>
    <Header title="Social" />
    <IonContent>
        {
        posts && posts.map(({id, created_at,title,body})  => (
              <SocialCard id = {id} created_at={created_at} body={body} />
          ))
        }
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
    </>
  );
};

export default Social;
