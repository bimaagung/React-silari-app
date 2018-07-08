import React, { Component } from 'react'
import { Input, Menu, Button, Header } from 'semantic-ui-react'

export default class HeaderNav extends Component {
    render() {
        return (
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
                        <Button primary>Sign up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
