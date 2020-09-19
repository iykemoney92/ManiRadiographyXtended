import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MainTabs from './pages/MainTabs/MainTabs';
import Menu from './components/Menu/Menu';
import Social from './pages/Social/Social';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MainPage from './pages/MainPage/MainPage';

const App: React.FC = () => (
  <IonApp>
    <IonSplitPane contentId="main">
    <Menu  />
    <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/"  render={() => <MainTabs />} />
        </IonRouterOutlet>
    </IonReactRouter>
    </IonSplitPane>
  </IonApp>
);

export default App;
