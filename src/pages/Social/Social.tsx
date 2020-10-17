import React,{Component, useContext, useEffect, useState} from 'react';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonModal, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter, withIonLifeCycle } from '@ionic/react';
import { attach, camera, chatbubbles, documentText, locate, pin} from 'ionicons/icons';
import useFireStore from '../../hooks/useFireStore';
import { SocialCard } from '../../components/SocialCard/SocialCard';
import { GlobalContext } from '../../states/GlobalState';
import { ShareTextModal } from '../../modals/ShareTextModal/ShareTextModal';
import { ShareImageModal } from '../../modals/ShareImageModal/ShareImageModal';
import Header from '../Header/Header';
import { ShareFileModal } from '../../modals/ShareFileModal/ShareFileModal';
import { ShareEventModal } from '../../modals/ShareEventModal/ShareEventModal';



const Social: React.FC = () => {
  const { posts } = useFireStore('posts');
  const { modalState,setTitle,setModalState, modalState1,setModalState1,modalState2,setModalState2, modalState3, setModalState3 } = useContext(GlobalContext);
  const [showShareEventModal, setShareEvent] = useState(false);
  
  //setTitle('Social');
  
  /*useEffect(()=>{
    setTitle('Social');
  })*/
  const slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  return (
    <>
    <IonContent color="light">
      <IonItem>
        <br/><br/><br/>
      </IonItem>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide><IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide><IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide><IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>
      </IonSlide>
    </IonSlides>
        {
        posts && posts.map(({id, created_at,type,meta,title,likes,shares,comments,user})  => (
              <SocialCard key={id} id={id} created_at={created_at} meta={meta} 
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
            <IonFabButton onClick={()=>{setModalState2(true)}}><IonIcon icon={attach} /></IonFabButton>
            <IonFabButton onClick={()=>{setModalState3(true)}}><IonIcon icon={locate} /></IonFabButton>
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
          <IonModal
          showBackdrop = {true}
          isOpen={modalState2}
          swipeToClose={true}>
            <ShareFileModal />
          </IonModal>
          <IonModal
          showBackdrop = {true}
          isOpen={modalState3}
          swipeToClose={true}>
            <ShareEventModal />
          </IonModal>
        </>
    </IonContent>
    </>
  );
};

export default Social;
