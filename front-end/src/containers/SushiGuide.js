import React from 'react'
import { Grid, Container, Divider, Header, Image } from 'semantic-ui-react'

class SushiGuide extends React.Component {

  render(){
    return (
      <div>
        <Container fluid textAlign='center'>
          <Header as='h2'>Sushi Guide</Header>
          <Divider />
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image src='https://www.curiouscuisiniere.com/wp-content/uploads/2015/07/Kimbap-Korean-Sushi-DSC05900-1-2.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://www.curiouscuisiniere.com/wp-content/uploads/2015/07/Kimbap-Korean-Sushi-DSC05900-1-2.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://www.curiouscuisiniere.com/wp-content/uploads/2015/07/Kimbap-Korean-Sushi-DSC05900-1-2.jpg' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
            <Grid.Column>
              <Image src='https://www.curiouscuisiniere.com/wp-content/uploads/2015/07/Kimbap-Korean-Sushi-DSC05900-1-2.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://www.curiouscuisiniere.com/wp-content/uploads/2015/07/Kimbap-Korean-Sushi-DSC05900-1-2.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://www.curiouscuisiniere.com/wp-content/uploads/2015/07/Kimbap-Korean-Sushi-DSC05900-1-2.jpg' />
            </Grid.Column>
            </Grid.Row>
          </ Grid>
        </Container>
      </div>
    )
  }
}

export default SushiGuide
