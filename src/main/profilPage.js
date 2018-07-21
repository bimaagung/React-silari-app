import React from "react";
import { Form, Label, Input, Breadcrumb,  Table, Image, Grid, Segment } from 'semantic-ui-react';
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
    marginLeft:255,
    marginTop: 10
}


const optionsGender = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]


export default () =>
    <div style={mainPage}>
        <div style={mainContent}>
      
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <Breadcrumb>
                        <Breadcrumb.Section link as={Link} to="/">Home</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right angle' />
                        <Breadcrumb.Section active>Profil</Breadcrumb.Section>
                        </Breadcrumb>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid centered>
                    <Grid.Row>
                        <Grid.Column width={10}>
                        <Form size='medium' key='medium'>
                            <Image src={'https://react.semantic-ui.com/images/avatar/large/elliot.jpg'} style={imageView} rounded centered />
                            
                        
                        <Segment>
                            <Label attached='top left' size='large' color='blue'>Biodata Pribadi</Label>
                            <Form.Group widths={2}>
                            <Form.Input size='small' label='* Nama'  />
                            <Form.Input size='small' label='* Nama Lengkap' />
                            </Form.Group>
                            <Form.Group widths={2}>
                            <Form.Input size='small' label='* Tanggal Lahir' />
                            <Form.Select size='small' fluid label='* Gender' options={optionsGender} />
                            </Form.Group>
                            <Form.Group widths={2}>
                            <Form.TextArea label='* Alamat'/>
                            <Form.Input size='small' label='* No HP/WA' />
                            </Form.Group>
                        </Segment>

                        <Segment>
                            <Label attached='top left' size='large' color='blue'>Pekerjaan</Label>
                            <Form.Group widths={2}>
                            <Form.Input size='small' label='Nama Perusahaan'  />
                            <Form.Input size='small' label='Jabatan' />
                            </Form.Group>
                        </Segment>

                         <Segment>
                            <Label attached='top left' size='large' color='blue'>Studi Lanjut S2</Label>
                            <Form.Group widths={2}>
                            <Form.Input size='small' label='Nama Universitas'  />
                            <Form.Input size='small' label='Fakultas' />
                            </Form.Group>
                            <Form.Group widths={2}>
                            <Form.Input size='small' label='Jurusan' />
                            <Form.Input size='small' label='Semester' />
                            </Form.Group>
                        </Segment>


                        <Segment>
                            <Label attached='top left' size='large' color='blue'>Media Sosial</Label>
                            <Form.Group widths={2}>
                            <Form.Input size='small' label='Facebook'  />
                            <Form.Input size='small' label='Instagram' />
                            </Form.Group>
                            <Form.Group widths={2}>
                            <Form.Input size='small' label='No WhatApps' />
                            <Form.Input size='small' label='No Telegram' />
                            </Form.Group>
                            <Form.Group widths={2}>
                            <Form.Input size='small' label='Line' />
                            <Form.Input size='small' label='Twitter' />
                            </Form.Group>
                        </Segment>

                        <Segment>
                            <Label attached='top left' size='large' color='blue'>Motivasi</Label>
                            <Form.Group widths={2}>
                            <Form.TextArea size='small' label='Motto'/>
                            <Form.TextArea size='small' label='Pesan'/>
                            </Form.Group>
                            <Form.Group widths={2}>
                            <Form.Checkbox label='Dengan ini saya mengisi dengan jujur' />
                            <Form.Button floated='right' color='green' fluid size='huge'>SIMPAN</Form.Button>
                            </Form.Group>
            
                        </Segment>

                        </Form>
                        </Grid.Column>
                       
                    </Grid.Row>
                </Grid>

        </div>
    </div>


