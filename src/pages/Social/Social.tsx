import React,{Component, useContext, useEffect, useState} from 'react';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter, withIonLifeCycle } from '@ionic/react';
import { attach, camera, chatbubbles, documentText, locate} from 'ionicons/icons';
import useFireStore from '../../hooks/useFireStore';
import { SocialCard } from '../../components/SocialCard/SocialCard';
import { GlobalContext } from '../../states/GlobalState';
import { ShareTextModal } from '../../modals/ShareTextModal/ShareTextModal';
import { ShareImageModal } from '../../modals/ShareImageModal/ShareImageModal';
import Header from '../Header/Header';



const Social: React.FC = () => {
  const { posts } = useFireStore('posts');
  const { modalState,setTitle,setModalState, modalState1,setModalState1 } = useContext(GlobalContext);
  const [showShareImageModal, setShareImage] = useState(false);
  const [showShareFileModal, setShareFile] = useState(false);
  const [showShareEventModal, setShareEvent] = useState(false);
  
  //setTitle('Social');
  
  /*useEffect(()=>{
    setTitle('Social');
  })*/
  
  return (
    <>
    <IonContent color="light">
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
            <IonFabButton onClick={()=>{setModalState(true)}}><IonIcon icon={documentText} /></IonFabButton>
            <IonFabButton onClick={()=>{setModalState1(true)}}><IonIcon icon={camera} /></IonFabButton>
            <IonFabButton onClick={()=>{setShareFile(true)}}><IonIcon icon={attach} /></IonFabButton>
            <IonFabButton onClick={()=>{setShareEvent(true)}}><IonIcon icon={locate} /></IonFabButton>
          </IonFabList>
        </IonFab>

        <>
          <IonModal
          showBackdrop = {true}
          isOpen={modalState}
          swipeToClose={true}>
            <ShareTextModal />
          </IonModal>
          <IonModal
          showBackdrop = {true}
          isOpen={modalState1}
          swipeToClose={true}>
            <ShareImageModal />
          </IonModal>
        </>
    </IonContent>
    </>
  );
};

export default Social;
