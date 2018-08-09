import React, { Component } from "react";
import { Card, Icon, Segment, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



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

export class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost/silari-admin/index.php/admin/page_alumni/get_alumnus_ajax')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading</div>
        }
        else {
            return (

                <div style={mainPage}>
                    <div style={mainContent}>
                        <Segment vertical >
                        </Segment>
                        <Segment vertical >
                            <Label size='large' color='blue' attached='top left'>Pengurus Harian</Label>
                            <Card.Group itemsPerRow={7}>
                                {items.map(item =>(
                                    <Card
                                    image='http://localhost/silari-admin/assets/img/Alarm.png'
                                    header={item.nama}
                                    //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                    extra={extra}
                                    as={Link}
                                    to="/detail-profil"
                                   />
                                ))};
                                
                                {/* <Card
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
                                /> */}
                            </Card.Group>
                        </Segment>

                        <Segment vertical>
                            <Label size='large' color='blue' attached='top left'>Technopreneur</Label>
                            <Card.Group itemsPerRow={7}>
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
                                <Card
                                    image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                                    header='Elliot Baker'
                                    //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                    extra={extra}
                                />
                            </Card.Group>
                        </Segment>

                        <Segment vertical>
                            <Label size='large' color='blue' attached='top left'>Robotik</Label>
                            <Card.Group itemsPerRow={7}>
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
            );
        }
    }
}

