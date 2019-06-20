import React from 'react'

export default function Article(props) {
  if (!props.articleRequested) {
    return <button onClick={props.buttonClicked}>Load</button>;
  } else {
    if (props.articleTitle === null) {
      return <span>Loading...</span>;
    } else {
      return (
        <div>
          <span>{props.articleTitle}</span>
          <div>{props.articleAuthor}</div>
        </div>
        
      )
    }
  }
}
