import React from "react";
import { Avatar, Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { rootReducerTypes } from './../store/reducer'
// import { routerAction } from './../store/actions'
import avatarImg from './../assits/imgs/about.jpg'
import Styles from './../assits/css/layout.module.css'
import '../assits/css/antd.initial.css'

const { Header, Content, Sider } = Layout;

const Layout_component = (props: any) => {
    const history = useHistory()
    const router: any = useSelector((state: rootReducerTypes) => state.router)
    // 默认选中
    const menuDefaultSelectedKeys = [router.location.pathname]

    return (
        <section className={Styles.layoutRoot}>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    className={Styles.leftLayout}
                    width={280}
                >
                    <div className="logo" />
                    <div className={Styles.bloggerInfo}>
                        <Avatar size={64} src={avatarImg} />
                        <div className={Styles.info}>
                            <span>ALICE JOSEPH</span>
                            <span>UI Designer</span>
                        </div>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={menuDefaultSelectedKeys}
                        onClick={e => {
                            history.push(e.key)
                        }}>
                        <Menu.Item key="/" icon={<UserOutlined />}>
                            HOME
                        </Menu.Item>
                        <Menu.Item key="/about" icon={<VideoCameraOutlined />}>
                            RESUME
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className={Styles.content}>
                    <Header className={Styles.header} />
                    <Content>
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </section>
    )
}

export default Layout_component