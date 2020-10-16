import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCol, IonContent, IonIcon, IonLabel, IonRow, IonButton, IonGrid } from '@ionic/react'
import React,{useState} from 'react'
import { heart, share, chatbox } from 'ionicons/icons';
import { SocialCardFooter } from './SocialCardFooter/SocialCardFooter';
import { TextCard } from './TextCard/TextCard';
import { ImageCard } from './ImageCard/ImageCard';

export const SocialCard : React.FC<any> = ({id, title, type, created_at, meta,likes,shares,comments,user}) => {
  const date = new Date();
  date.setSeconds(created_at.seconds); 
  const [showPopover, setShowPopover] = useState(false);
  switch(type)
        {
          case 'text':
            return (
              <IonCard>
                <TextCard created_at={date.toLocaleString()} body={meta.body} title={title} user={user}/>
                <SocialCardFooter likes={likes} shares={shares} comments={comments} id={id} />
              </IonCard>
            )
          break;
            case 'image':return (
              <IonCard>
                <ImageCard created_at={date.toLocaleString()} body={meta.body} url={meta.url} title={title} user={user}/>
                <SocialCardFooter likes={likes} shares={shares} comments={comments} id={id}/>
              </IonCard>
            )
              break;
              case 'file':return (
                <IonCard></IonCard>
              )
                break;
                case 'event':
                  return (
                  <IonCard></IonCard>
                )
                  break;
                  default:return (
                    <IonCard></IonCard>
                  )
                    break;
        }
}
