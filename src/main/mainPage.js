import React from "react";
import { Card, Icon, Segment, Label } from 'semantic-ui-react'

const mainPage = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15
}

const mainContent = {
    width: 1137
}

const extra = (
    <a>
      <Icon name='user' />
      16 Friends
    </a>
  )

export default () =>
<div style={mainPage}>
    <div style={mainContent}>
    <Segment padded>
    <Label size='large' color='red' attached='top left'>Pengurus Harian</Label>
        <Card.Group itemsPerRow={6}>
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
        </Card.Group>
        </Segment>

        <Segment padded>
    <Label size='large' color='blue' attached='top left'>Technopreneur</Label>
        <Card.Group itemsPerRow={6}>
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
             <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
        </Card.Group>
        </Segment>
    </div>
</div>


