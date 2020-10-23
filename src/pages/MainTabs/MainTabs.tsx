import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { people, library, gameController, person } from 'ionicons/icons';
import Social from '../Social/Social';
import { Account } from '../Account/Account';
import { Games } from '../Games/Games';
import { Articles } from '../Articles/Articles';

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
       
        {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Redirect exact path="/" to="/tabs/social" />
        <Route path="/tabs/social" render={() => <Social />} exact={true} />
        <Route path="/tabs/articles" render={() => <Articles />} exact={true} />
        <Route path="/tabs/games" render={() => <Games />} exact={true} />
        <Route path="/tabs/account" render={() => <Account />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="social" href="/tabs/social">
          <IonIcon icon={people} />
          <IonLabel>Social</IonLabel>
        </IonTabButton>
        <IonTabButton tab="articles" href="/tabs/articles">
          <IonIcon icon={library} />
          <IonLabel>Learn</IonLabel>
        </IonTabButton>
        <IonTabButton tab="games" href="/tabs/games">
          <IonIcon icon={gameController} />
          <IonLabel>Games</IonLabel>
        </IonTabButton>
        <IonTabButton tab="account" href="/tabs/account">
          <IonIcon icon={person} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;