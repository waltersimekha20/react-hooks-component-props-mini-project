import React from 'react'

function Article(props) {
  return (
    <div>
       <article>
        <h3>{props.title}</h3>
        <small>{props.date}</small>
        <p>{props.preview}</p>
        </article> 

    </div>
  )
}
Article.defaultProps ={
    date:"January 1, 1970"
}

export default Article