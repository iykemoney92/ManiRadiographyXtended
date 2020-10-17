import React,{useEffect, useState} from 'react';
import {projectFireStore} from '../firebase.config';


const useFireStore = (collection : any) => {
    const [posts,setPosts] = useState([]);
  
    
      useEffect(() => {
          const unsub = projectFireStore.collection(collection).orderBy('created_at','desc').onSnapshot((snap)=>{
            let documents : any = [];
            snap.forEach( doc => {
                //console.log(doc.id);
                documents.push({...doc.data(),id: doc.id});
            })
            setPosts(documents);
            return () => unsub();
        });
    }, [collection]);

    return { posts };
}

export default useFireStore;
  