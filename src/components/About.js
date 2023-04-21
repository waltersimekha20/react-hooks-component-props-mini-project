import React from 'react'

function About(props) {
  return (
    <div>

        <aside>

            <img src={props.image} alt='blogpost'/> 
            <p>{props.about}</p>
           
        </aside>


    </div>
  )
}
About.defaultProps ={
    image:"https://via.placeholder.com/215"
}

export default About