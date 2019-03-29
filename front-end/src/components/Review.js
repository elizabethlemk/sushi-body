import React from 'react'
import { Comment, Grid, Rating } from 'semantic-ui-react'



const Review = () => {
  return (
    <Grid.Column>
      <Comment.Group>
       <Comment>
         <Comment.Content textAlign='center'>
           <Comment.Author>Stevie Feliciano</Comment.Author>
           <Comment.Metadata>
            <Rating maxRating={5} defaultRating={3} icon='star' disabled/>
           </Comment.Metadata>
           <Comment.Text>
             Hey guys, I hope this example comment is helping you read this documentation.
           </Comment.Text>
         </Comment.Content>
       </Comment>
     </Comment.Group>
   </Grid.Column>
  )
}

export default Review
