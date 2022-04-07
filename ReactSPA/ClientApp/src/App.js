import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Carousel } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const contentStyle = {
    height: '64px',
    color: '#fff',
    lineHeight: '64px',
    textAlign: 'center',
    background: '#364d79',
};

export default class App extends Component {
    static displayName = App.name;

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };


    render() {
        const { collapsed } = this.state;

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />} onClick={() => { }} >
                            <Link to="/">Option 1</Link>
                        </Menu.Item>

                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <Link to="counter">Option 2</Link>
                        </Menu.Item>

                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">
                                <Link to="fetch">fetch</Link>
                            </Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <Carousel autoplay>
                            <div>
                                <h3 style={contentStyle}>Создавайте анкеты</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>Смотрите статистику</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>Стройте графики</h3>
                            </div>
                        </Carousel>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: '100%' }}>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route path='/fetch' component={FetchData} />
                                <Route path='/counter' component={Counter} />
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>?2022 Created by Alex</Footer>
                </Layout>
            </Layout>
        );
    }
}