import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb,Radio } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { MESSAGES } from './Resourses';

import enUS from 'antd/lib/locale/en_US';
import ruRU from 'antd/lib/locale/ru_RU';
import './custom.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const breadcrumbNameMap = {
  '/fetch': 'fetch',
  '/counter': 'counter',
  '/apps/2': 'Application2',
};

class MainPage extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        const { location } = this.props;
        const pathSnippets = location.pathname.split('/').filter(i => i);

        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
            );
        });

        const breadcrumbItems = [
            <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
            </Breadcrumb.Item>,
        ].concat(extraBreadcrumbItems);

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
                           <Menu.Item key="4">
                                <Link to="counter">counter</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background header" style={{ padding: 0 }}>
                        <Radio.Group style={{display: 'inline-block', margin:'10px'}}
                            value={this.props.locale}
                            onChange={this.props.changeLocale}>
                            <Radio.Button key="en" value={enUS}>
                                English
                            </Radio.Button>
                            <Radio.Button key="ru" value={ruRU}>
                                Русский
                            </Radio.Button>
                        </Radio.Group>                     
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {breadcrumbItems}
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: '100%' }}>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route path='/fetch' component={FetchData} />
                                <Route path='/counter' component={Counter} />
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>{MESSAGES[this.props.locale.locale].author}</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(MainPage);