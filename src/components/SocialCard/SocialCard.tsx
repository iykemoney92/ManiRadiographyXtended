import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCol, IonContent, IonIcon, IonLabel, IonRow, IonButton, IonGrid } from '@ionic/react'
import React,{useState} from 'react'
import { heart, share, chatbox } from 'ionicons/icons';
import { SocialCardFooter } from './SocialCardFooter/SocialCardFooter';
import { TextCard } from './TextCard/TextCard';
import { ImageCard } from './ImageCard/ImageCard';
import { FileCard } from './FileCard/FileCard';
import { EventCard } from './EventCard/EventCard';

export const SocialCard : React.FC<any> = ({id, title, type, created_at, meta,likes,shares,comments,user}) => {
  const date = new Date(1970,0,1);
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
                <IonCard>
                <FileCard created_at={date.toLocaleString()} body={meta.body} url={meta.url} title={title} user={user}/>
                <SocialCardFooter likes={likes} shares={shares} comments={comments} id={id}/>
              </IonCard>
              )
                break;
                case 'event':
                  return (<IonCard>
                    <EventCard created_at={date.toLocaleString()} body={meta.body} link={meta.link} 
                    map_link={meta.map_link} event_title = {meta.title} event_date={meta.event_date} title={title} user={user}/>
                    <SocialCardFooter likes={likes} shares={shares} comments={comments} id={id}/>
                  </IonCard>
                )
                  break;
                  default:
                    return (<IonCard></IonCard>)
                    break;
        }
}
