import React from "react";
import { Rating, Breadcrumb, Label, Table, Card, Icon, Segment, Image, Grid, Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const mainPage = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
}

const mainContent = {
    width: 1137
}

const imageView = {
    width: 250
}

const cardView = {
    width: 150
}

const ratingDisplay =
{
    marginLeft: 255,
    marginTop: 10
}

export default () =>
    <div style={mainPage}>
        <div style={mainContent}>


            <Grid>
                <Grid.Row>

                    <Breadcrumb>
                        <Breadcrumb.Section link as={Link} to="/">Home</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right angle' />
                        <Breadcrumb.Section active>Detail</Breadcrumb.Section>
                    </Breadcrumb>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={11}>
                        <Image src={'https://react.semantic-ui.com/images/avatar/large/elliot.jpg'} style={imageView} rounded centered />
                        <Rating style={ratingDisplay} maxRating={5} defaultRating={3} icon='star' size='huge' />
                        <Table celled selectable>


                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>John</Table.Cell>
                                    <Table.Cell>No Action</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie</Table.Cell>
                                    <Table.Cell>Approved</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill</Table.Cell>
                                    <Table.Cell>Denied</Table.Cell>
                                </Table.Row>
                                <Table.Row warning>
                                    <Table.Cell>John</Table.Cell>
                                    <Table.Cell>No Action</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie</Table.Cell>
                                    <Table.Cell positive>Approved</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill</Table.Cell>
                                    <Table.Cell negative>Denied</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column width={5}>

                        <Card>
                            <Card.Content>
                                <Card.Header>Pencarian Terakhir</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                                        <Feed.Content>
                                            <Feed.Date content='1 day ago' />
                                            <Feed.Summary>
                                                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                                    </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>

                                    <Feed.Event>
                                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                                        <Feed.Content>
                                            <Feed.Date content='3 days ago' />
                                            <Feed.Summary>
                                                You added <a>Molly Malone</a> as a friend.
                                                    </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>

                                    <Feed.Event>
                                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                                        <Feed.Content>
                                            <Feed.Date content='4 days ago' />
                                            <Feed.Summary>
                                                You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                                                    </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>


                                    <Feed.Event>
                                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                                        <Feed.Content>
                                            <Feed.Date content='4 days ago' />
                                            <Feed.Summary>
                                                You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                                                    </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>


                                    <Feed.Event>
                                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                                        <Feed.Content>
                                            <Feed.Date content='4 days ago' />
                                            <Feed.Summary>
                                                You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                                                    </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>


                                    <Feed.Event>
                                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                                        <Feed.Content>
                                            <Feed.Date content='4 days ago' />
                                            <Feed.Summary>
                                                You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                                                    </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card.Content>
                        </Card>


                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    </div>


