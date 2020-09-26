import React,{Component, useContext, useEffect, useState} from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter, withIonLifeCycle } from '@ionic/react';
import { attach, camera, chatbubbles, documentText, locate} from 'ionicons/icons';
import useFireStore from '../../hooks/useFireStore';
import { SocialCard } from '../../components/SocialCard/SocialCard';
import { GlobalContext } from '../../states/GlobalState';
import { ShareTextModal } from '../../modals/ShareTextModal/ShareTextModal';



const Social: React.FC = () => {
  const { posts } = useFireStore('posts');
  const { setTitle } = useContext(GlobalContext);
  const [showShareTextModal, setShareText] = useState(false);
  const [showShareImageModal, setShareImage] = useState(false);
  const [showShareFileModal, setShareFile] = useState(false);
  const [showShareEventModal, setShareEvent] = useState(false);
  
  useEffect(()=>{
    setTitle('Social');
  })
  
  return (
    <IonContent >
        {
        posts && posts.map(({id, created_at,type,meta,title,likes,shares,comments,user})  => (
              <SocialCard key={id} created_at={created_at} meta={meta} 
              type={type} title={title} likes={likes} shares={shares} 
              comments={comments} user={user}/>
          ))
        }
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={chatbubbles} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton onClick={()=>{setShareText(true)}}><IonIcon icon={documentText} /></IonFabButton>
            <IonFabButton onClick={()=>{setShareImage(true)}}><IonIcon icon={camera} /></IonFabButton>
            <IonFabButton onClick={()=>{setShareFile(true)}}><IonIcon icon={attach} /></IonFabButton>
            <IonFabButton onClick={()=>{setShareEvent(true)}}><IonIcon icon={locate} /></IonFabButton>
          </IonFabList>
        </IonFab>

        <>
          <IonModal
          isOpen={showShareTextModal}
          swipeToClose={true}
          onDidDismiss={() => setShareText(true)}>
            <ShareTextModal />
          </IonModal>
        </>
    </IonContent>
  );
};

export default Social;
