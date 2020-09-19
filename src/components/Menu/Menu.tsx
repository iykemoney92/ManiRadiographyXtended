import {
    IonContent,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import { peopleOutline, peopleSharp, libraryOutline, librarySharp, gameControllerOutline, 
    gameControllerSharp, personOutline, personSharp, bookmarkOutline} from 'ionicons/icons';
  import './Menu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Social',
      url: '/page/Social',
      iosIcon: peopleOutline,
      mdIcon: peopleSharp
    },
    {
      title: 'Information',
      url: '/page/Information',
      iosIcon: libraryOutline,
      mdIcon: librarySharp
    },
    {
      title: 'Games',
      url: '/page/Games',
      iosIcon: gameControllerOutline,
      mdIcon: gameControllerSharp
    },
    {
      title: 'Profile',
      url: '/page/Profile',
      iosIcon: personOutline,
      mdIcon: personSharp
    }
  ];
   

  
  const Menu: React.FC = () => {
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonImg src="https://lh3.googleusercontent.com/b2NojjdSBfqPD6vD8MEvzoGC_gPhrwoh94bEvEGf-V233iycweQiFG_2hYkK0cHSJws"/>
          <IonList id="inbox-list">
            <IonListHeader>
              <IonLabel>Mani Radiography Xtended</IonLabel>
              <IonNote>Browse radiological informations, connect with radiography enthusiasts, students and professionals. Play radiological games. Mix!!!</IonNote>
              </IonListHeader>
            
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem  routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
  
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
  