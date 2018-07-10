import React, { Component } from 'react'
import { Input, Menu, Button, Header, Segment, Form } from 'semantic-ui-react'


const divSearch = {
    width: 500
}

const centerSearch = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default class HeaderNav extends Component {
    render() {
        return (
            <div>
                <Menu stackable>
                    <Menu.Menu position='left'>
                        <Menu.Item>
                            <h3>Silari [ Sistem Alumni Riptek ]</h3>
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position='center'>
                        <Menu.Item>
                            <Input icon='search' size='large' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button color='blue'>Fungsionaris</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button color='olive'>PTI</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button color='red'>Robotik</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button primary>Sign up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
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

                        {/* <Button type='submit'>Submit</Button> */}
                    </Form>
                </Segment>
                </div>
            </div>

        )
    }
}
