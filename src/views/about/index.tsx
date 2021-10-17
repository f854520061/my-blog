import React, { useState, useEffect, useCallback } from 'react'
import { CardInfo } from './../../components'
import { Row, Col, Space, Image } from 'antd'
import { CardIframe } from './../../components'
import workersme from './../../assits/imgs/workersme.jpg'
import company1 from './../../assits/imgs/company1.png'
import company2 from './../../assits/imgs/company2.png'
import xm1 from './../../assits/imgs/xm-1.png'
import Styles from './../../assits/css/about.module.css'

const info = [
    {
        name: '姓名：',
        value: '肖智文'
    },
    {
        name: '年龄:',
        value: '26'
    },
    {
        name: '居住:',
        value: '成都市高新区'
    },
    {
        name: '意向:',
        value: 'WEB前端开发工程师'
    },
    {
        name: '经验:',
        value: '三年开发经验'
    },
    {
        name: '电话:',
        value: '18081273815'
    },
    {
        name: '邮箱:',
        value: 'zhiwenHero@aliyun.com'
    },
    {
        name: '微信：',
        value: 'Fl007xzw'
    },
    {
        name: '期望薪资：',
        value: '面议'
    },
    {
        name: '到岗时间：',
        value: '离职，随时到岗'
    }
]

const useAbout = () => {
    const [bgY, setBgY] = useState(0)

    const scrollDoc = useCallback(() => {
        // 这里可能需要优化，一直调用setBg影响性能
        // 后续看是否可以通过节流优化并且不影响效果(!!!!)
        const scrollTop = document.documentElement.scrollTop
        setBgY(scrollTop)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', scrollDoc)
        return () => {
            window.removeEventListener('scroll', scrollDoc)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className={Styles.bg} style={{ backgroundPositionY: bgY }}>
            <CardInfo title={'MY INFORMATION'} subName={'MEET ME'}>
                <Row className={'animation_fromBottomToTop'} style={{ padding: '0 20px' }}>
                    <Col span={12}>
                        <Image className={Styles.cover} src={workersme} preview={false} />
                    </Col>
                    <Col span={1} />
                    <Col span={11} style={{ fontWeight: 300 }}>
                        <div className={Styles.personInfo}>
                            {
                                info.map((item, index) => (
                                    <Space key={index}>
                                        <span style={{ fontWeight: 500 }}>{item.name}</span>
                                        <span>{item.value}</span>
                                    </Space>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </CardInfo>
            <div style={{ height: 150, backgroundColor: 'rgba(0,0,0,.5)' }}></div>
            <CardInfo title={'MY EXPERIENCE'} subName={'The way'}>
                <Row className={'animation_fromBottomToTop'} style={{ padding: '0 20px', marginBottom: 30 }}>
                    <Col span={12}>
                        <Image className={Styles.cover} style={{ objectFit: 'contain' }} src={company1} preview={false} />
                    </Col>
                    <Col span={1} />
                    <Col span={11} style={{ fontWeight: 300 }}>
                        <section style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 20
                        }}>
                            <span style={{ fontSize: 16, fontWeight: 'bold' }}>深圳市虹红科技有限公司成都分公司（技术部）</span>
                            <span>2018.09 - 2021.09</span>
                        </section>
                        <section>
                            <p>
                                简介：深圳市虹红科技有限公司（shenzhen rainbowred inc.）成立于2005年01月，十五年来，虹红科技一直深耕于在线客服这个细分的领域。
                            </p>
                            <p>
                                主要产品：<CardIframe content="一洽客服系统（Echat）" url="https://rainbowred.com/#business" />
                            </p>
                            <p>
                                官网：<CardIframe content="https://rainbowred.com/" url="https://rainbowred.com/" blank={true} />
                            </p>
                            <p>
                                我所负责的岗位：WEB前端开发工程师
                            </p>
                            <p>
                                岗位职责：负责一洽客服系统的开发维护工作，对项目中的老代码进行重构和性能优化；协同团队进行公司前端UI业务组件库的开发；负责项目技术选型，分析其在项目中的优劣势。
                            </p>
                            <p>
                                个人总结：虹红科技是一个非常和谐的大家庭，和同事之间共事也非常愉快，技术部严格的开发流程对其所主打的产品质量也非常有保障，客户满意度也非常高，总的来说，是一家非常有实力且值得信赖的企业，也是一家工作环境非常舒适的公司。
                            </p>
                        </section>
                    </Col>
                </Row>
                <Row className={'animation_fromBottomToTop'} style={{ padding: '0 20px' }}>
                    <Col span={12}>
                        <Image className={Styles.cover} src={company2} style={{ objectFit: 'none' }} preview={false} />
                    </Col>
                    <Col span={1} />
                    <Col span={11} style={{ fontWeight: 300 }}>
                        <section style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 20
                        }}>
                            <span style={{ fontSize: 16, fontWeight: 'bold' }}>成都三网融合科技有限公司</span>
                            <span>2018.01 - 2018.08</span>
                        </section>
                        <section>
                            <p>
                                简介：成都三网融合科技有限公司成立于2012年02月21日，经营范围包括软件开发；信息系统集成服务；信息技术咨询服务；技术推广服务；互联网信息服务；广告设计、制作、代理、发布；销售：机械设备、五金产品及电子产品。
                            </p>
                            <p>
                                主要产品：<CardIframe content="IPTV" url="https://vhsagj.smartapps.baidu.com/pages/lemma/lemma?lemmaTitle=iptv&lemmaId=113036&from=bottomBarShare&_swebfr=1&_swebFromHost=baiduboxapp" />等运营商业务
                            </p>
                            <p>
                                我所负责的岗位：WEB前端开发工程师（实习）
                            </p>
                            <p>
                                岗位职责：负责IPTV节目页面的开发设计，保持高效的前端性能和优秀的代码可维护性；解决多端之间的页面兼容性问题；对项目整体把控、实施进度、项目交付负责，完成研发部经历安排的具体任务。
                            </p>
                        </section>
                    </Col>
                </Row>
            </CardInfo>
            <div style={{ height: 150, backgroundColor: 'rgba(0,0,0,.5)' }}></div>
            <CardInfo title={'MY PROJECT'} subName={'I did'}>
                <Row className={'animation_fromBottomToTop'} style={{ padding: '0 20px', marginBottom: 30 }}>
                    <Col span={12}>
                        <Image className={Styles.cover} style={{ objectFit: 'contain' }} src={company1} preview={false} />
                    </Col>
                    <Col span={1} />
                    <Col span={11} style={{ fontWeight: 300 }}>
                        <section style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 20
                        }}>
                            <span style={{ fontSize: 16, fontWeight: 'bold' }}>一洽运维平台</span>
                            <span>2021.03 - 2021.09</span>
                        </section>
                        <section>
                            <p style={{ textIndent: 0 }}>
                                简介：以一洽的“IT 业务模型”和“运维管理需求”为核心的一套综合性企业 IT 运维管理平台。该平台不仅
                                可以监控、管理各服务器之间的状态，打包前后端项目代码并自动部署到服务器，还可以打印、导出服务器日志
                                信息等，具有较高扩展性，可为公司拓展一系列自定义功能。
                            </p>
                            <p style={{ textIndent: 0 }}>
                                主要技术栈：Vue3+Typescript+element-plus+Echarts
                            </p>
                            <p style={{ textIndent: 0 }}>
                                人员分工：前端开发工程师（1人） + 后端&运维开发工程师（1人）
                            </p>
                            <p style={{ textIndent: 0 }}>
                                工作成果：<br />
                                1.使用 axios 封装对应的公共请求方法，并利用其响应拦截器实现了用户身份认证过期重连功能；<br />
                                2.使用 vue-native-websocket-vue3 封装 webSocket 模块，将所有 webSocket 交互行为以及数据放到 vuex
                                中去处理；<br />
                                3.配置路由规则，通过设置路由导航守卫来制定页面的通行规则;<br />
                                4.指定 vuex 中的数据结构，采用多模块引入的方式保持其数据结构的简洁性与易维护性；<br />
                                5.整合项目公共组件库，提高组件的复用性与可维护性。
                            </p>
                        </section>
                    </Col>
                </Row>
                <Row className={'animation_fromBottomToTop'} style={{ padding: '0 20px', marginBottom: 30 }}>
                    <Col span={12}>
                        <Image className={Styles.cover} style={{ objectFit: 'contain' }} src={xm1} preview={false} />
                    </Col>
                    <Col span={1} />
                    <Col span={11} style={{ fontWeight: 300 }}>
                        <section style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 20
                        }}>
                            <span style={{ fontSize: 16, fontWeight: 'bold' }}>一洽工单系统</span>
                            <span>2020.01 - 2020.06</span>
                        </section>
                        <section>
                            <p style={{ textIndent: 0 }}>
                                简介：一洽支持企业自定义工单字段，根据不同的业务需求创建不同类型的工单模版，主要分为：访客模板
                                和客服模板，以满足不同业务场景下的工单流转需求。自定义工单字段包括：短文本、长文本、列表、单选、多
                                选、日期、数值等等；选用多个字段排列组合成一个工单模版；完全自定义能最大化的满足不同企业的实际需求。
                            </p>
                            <p style={{ textIndent: 0 }}>
                                主要技术栈：React16+TypeScript+Ant Design+Webpack+内部组件库
                            </p>
                            <p style={{ textIndent: 0 }}>
                                人员分工：前端开发工程师（4人） + 后端&运维开发工程师（2人）
                            </p>
                            <p style={{ textIndent: 0 }}>
                                工作成果：<br />
                                1. 使用 XMLHttpRequest 封装对应的公共请求方法；<br />
                                2. 使用 React-Hooks 模式开发中小型组件；<br />
                                3. 创建了一洽产品项目的 React 前端公共组件库；<br />
                                4. 使用 Webpack4 实现多文件夹和单文件夹打包；<br />
                                5. 使用 i18n 增加国际化配置。
                            </p>
                        </section>
                    </Col>
                </Row>
            </CardInfo>
        </section>
    )
}

export default useAbout