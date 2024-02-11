import React from "react";

function Article({title,date="January 1, 1970",preview ,minutes}){
     function gettingMin(){
        let emojis=""
        if (minutes<30) {
            //console.log(minutes)
          const coffeeCups = Math.ceil(minutes/5);
          emojis = '☕️'.repeat(coffeeCups);
        }
        else {
            const bentoBoxes = Math.ceil(minutes / 10);
            emojis = '🍱'.repeat(bentoBoxes);
          }
          return (`${emojis} ${minutes} min read`);
        }
        
return(
    <>
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview}</p>
    <p>{gettingMin()} minutes</p>
    </>
)
} 

export default Article;
