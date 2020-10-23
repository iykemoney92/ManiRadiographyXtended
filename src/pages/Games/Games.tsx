import { IonGrid, IonRow, IonCol, IonCard, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonContent, IonItem } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import {projectFireStore} from '../../firebase.config';

export const Games: React.FC<any> = () => {
    //const { posts } = useFireStore('games');
    const [games,setGames] = useState([]);
  
    useEffect(()=>{
    projectFireStore.collection("games").get().then(function(querySnapshot) {
        var docs:any = [];
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            docs.push({...doc.data(),id:doc.id});
        });
        setGames(docs);
    }).finally(function(){
        //console.log(games);
    })});
    return (<IonContent><IonItem style={{margin:10}}>
       
        </IonItem>
           <IonGrid>
               <IonRow>{
                    games && games.map((game:any)  => (
                        <IonCol size="6">
                                <IonCard><IonImg src={game.photo_url} />
                                        <IonCardHeader>
                                        <IonCardSubtitle>{game.stats.play_count} plays</IonCardSubtitle>
                                        <IonCardTitle>{game.name}</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                        {game.description}
                                        </IonCardContent>
                                            <IonButton color="secondary" href={game.url} expand="full">
                                                Play
                                            </IonButton>
                                    </IonCard>
                            </IonCol>

                    ))
                    }
               </IonRow>
           </IonGrid></IonContent>
    )
}
