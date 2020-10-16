import { IonPage, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Route } from 'react-router';
import Menu from '../../components/Menu/Menu';
import Header from '../Header/Header';
import MainTabs from '../MainTabs/MainTabs';

const MainPage: React.FC<any> = ({title}) => {
  return (
    <IonReactRouter>
    <IonSplitPane contentId="main">
      <Menu />
      <IonPage id="main">
       <Header />
      <MainTabs /></IonPage>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default MainPage;
