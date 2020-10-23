import { IonContent, IonList, IonItem, IonLabel, IonLoading, IonModal, IonToast } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { projectFireStore } from '../../firebase.config';
import { ViewArticleModal } from '../../modals/ViewArticleModal/ViewArticleModal';

export const Articles : React.FC = () => {
     //const { posts } = useFireStore('games');
     const [articles,setArticles] = useState([]);
     const [showToast, setShowToast] = useState(false);
     const [message, setMessage] = useState('');
     const [showLoading, setShowLoading] = useState(false);
     const [modalState, setModalState] = useState(false);
     const [url, setUrl] = useState<string>('');
     useEffect(()=>{
     projectFireStore.collection("articles").get().then(function(querySnapshot) {
         var docs:any = [];
         querySnapshot.forEach(function(doc) {
             // doc.data() is never undefined for query doc snapshots
             docs.push({...doc.data(),id:doc.id});
         });
         setArticles(docs);
     }).finally(function(){
         //console.log(games);
     })});

     const navMaster = () => {

     }

     const navNode = () => {

     }
    return (
        <IonContent>
            <IonList>
             {   
            articles && articles.map((article:any)  => (
            <IonItem onClick={article.isMaster ? navMaster : navNode }>
                <IonLabel>{article.title}</IonLabel>
            </IonItem>
            ))
            }
            </IonList>
            <>
            <IonModal
          showBackdrop = {true}
          isOpen={modalState}
          swipeToClose={true}
          
          >
              <ViewArticleModal url={url} />
          </IonModal></>
       <>
       <IonLoading
                  isOpen={showLoading}
                  message={'Please wait...'}
                  duration={0}
        /> <IonToast
        isOpen={showToast}
        message={message}
        onDidDismiss={() => setShowToast(false)}
        duration={2000}
        color="danger"
      />
       </>
        </IonContent>
    )
}
