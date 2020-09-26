import React from 'react';
import { Route } from 'react-router-dom';
import {
  IonApp,
  IonSplitPane
} from '@ionic/react';
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
import {GlobalProvider} from './states/GlobalState';
import MainPage from './pages/MainPage/MainPage';
import Menu from './components/Menu/Menu';
const App: React.FC = () => (
  <GlobalProvider>
    <IonApp>
      <MainPage />
    </IonApp>
  </GlobalProvider>
);

export default App;
