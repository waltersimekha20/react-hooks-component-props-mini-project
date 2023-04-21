import React from 'react'
import Article from './Article';

function ArticleList({posts}) {
  return (
    <div>

        <main>

        {posts.map(post => {
                const {id, title, date, preview, minutes} = post;
                return(
                    <Article key={id} title={title} date={date} preview={preview} minutes={minutes} />
                )
            })} 

        </main>
    </div>
  )
}

export default ArticleList