import React from 'react'
import "ViewArticleModal.css";

export const ViewArticleModal:React.FC = (url:string) => {
    return (
        <div>
            <iframe src={url}></iframe>
        </div>
    )
}
