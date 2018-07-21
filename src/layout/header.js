import React, { Component } from 'react';
import { Input, Menu, Dropdown, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const divSearch = {
    width: 500
}

const centerSearch = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const trigger = (
    <span>
        <Icon disabled name='grid layout' size='large' color='white'/>
    </span>
)

const options = [
    { key: 'user', text: 'User', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]

const colorMenu = {
    backgroundColor:'rgb(242, 242, 242)'
}


export default class HeaderNav extends Component {

    render() {
        return (
            <div>
                <Menu style={colorMenu}>
                    <Menu.Menu position='left'>
                        <Menu.Item>
                            <h3>SILARI v.1.0</h3>
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input  action={{ color: 'blue', labelPosition: 'right', icon: 'search', content: 'Cari' }} size='small' placeholder='Search...' />
                        </Menu.Item>
                        <Menu.Item>
                        <Dropdown icon='user' pointing='top right'>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/user">Profil</Dropdown.Item>
                                <Dropdown.Item>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    </Menu.Menu>

                </Menu>
                


                {/*
                <div style={centerSearch}>
                <Segment style={divSearch}>
                    <Form>
                        <Form.Group>
                            <Form.Input label='Nama' placeholder='First Name' width={12} />
                            <Form.Input label='Bidang' placeholder='Middle Name' width={12} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Tahun Masuk' placeholder='First Name' width={12} />
                            <Form.Input label='Asal' placeholder='Middle Name' width={12} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Checkbox label='Fungsionaris' width={4} />
                            <Form.Checkbox label='Anggota Robotik' width={5} />
                            <Form.Checkbox label='Anggota PTI' width={4} />
                        </Form.Group>

                         <Button type='submit'>Submit</Button> 
                    </Form>
                </Segment>
                </div>
                */}
            </div>
        )
    }
}
