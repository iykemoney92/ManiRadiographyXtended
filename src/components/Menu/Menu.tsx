import {
  IonButtons,
  IonCol,
    IonContent,
    IonGrid,
  IonHeader,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonNote,
    IonRow,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
  
  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import { peopleOutline, peopleSharp, libraryOutline, librarySharp, gameControllerOutline, 
    gameControllerSharp, personOutline, personSharp, bookmarkOutline} from 'ionicons/icons';
  import './Menu.css';
  
  interface MenuItems {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const menuItems: MenuItems[] = [
    
  ];
   

  
  const Menu: React.FC = () => {
    return (
      <IonMenu contentId="main"  type="overlay">
        <IonContent>
          <IonImg src="https://firebasestorage.googleapis.com/v0/b/mani-radiogrpahy-xtended.appspot.com/o/assets%2Fmenu_banner.png?alt=media&token=78eb585a-07f5-4a93-947f-e5df80cbd264"/>
          <IonList id="inbox-list">
            <IonListHeader>
              <IonGrid>
                <IonRow><IonCol>
                <IonLabel>Mani Radiography Xtended</IonLabel></IonCol></IonRow>
                <IonRow><IonCol>
                  <IonNote>Browse radiological informations, connect with radiography enthusiasts, students and professionals. Play radiological games. Mix!!!</IonNote>
              </IonCol></IonRow>
              </IonGrid></IonListHeader>
            
            {menuItems.map((menuItem, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem  routerLink={menuItem.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={menuItem.iosIcon} md={menuItem.mdIcon} />
                    <IonLabel>{menuItem.title}</IonLabel>
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
  