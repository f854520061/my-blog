import React, { useCallback, useEffect, useState } from 'react'
import { Image, Row, Col, Space, Card, Button } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { CardInfo, ProgressTool, CopyRight, CardIframe } from './../../components'
import Styles from './../../assits/css/home.module.css'
import bg2 from './../../assits/imgs/banner2.jpg'
import csdn from './../../assits/imgs/csdn.png'

const info = [
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
        value: '四年开发经验'
    },
    {
        name: '电话:',
        value: '18081273815'
    },
    {
        name: '邮箱:',
        value: 'zhiwenHero@aliyun.com'
    }
]

const skills = [
    {
        name: 'JavaScript',
        value: 85
    },
    {
        name: 'VUE',
        value: 75
    },
    {
        name: 'React',
        value: 65
    },
    {
        name: 'CSS',
        value: 60
    }
]

const Home = () => {
    // 设置背景图片位置，使滑动滚动条的时候有缓冲动效
    const [bgY, setBgY] = useState(0)

    // 定义此组件的滚动事件
    // 因为需要在卸载前移除掉此事件，所以此事件应为一个不可变的事件，故不应该有任何依赖，并且其中的属性方法也必须是不可变的
    const scrollDoc = useCallback(() => {
        // 这里可能需要优化，一直调用setBg影响性能
        // 后续看是否可以通过节流优化并且不影响效果(!!!!)
        const scrollTop = document.documentElement.scrollTop
        setBgY(scrollTop / 4)
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
        <>
            <section className={Styles.bgCover} style={{ backgroundPositionY: bgY }}>
                {/* <Image className={Styles.bgCoverImg} src={bg1} preview={false} /> */}
            </section>
            <CardInfo title={'GET TO KNOW'} subName={'About Me'}>
                <Row className={Styles.row}>
                    <Col span={12}>
                        <Image className={Styles.cover} src={bg2} preview={false} />
                    </Col>
                    <Col span={1} />
                    <Col span={11} style={{ fontWeight: 300 }}>
                        <h1 className={Styles.introduce}>肖智文</h1>
                        <p>
                            2017年毕业，统招本科，软件工程专业；
                            2017年3月加入了第一家公司{<CardIframe content="成都三网融合科技有限公司" url="https://vhsagj.smartapps.baidu.com/pages/lemma/lemma?lemmaTitle=%E6%88%90%E9%83%BD%E4%B8%89%E7%BD%91%E8%9E%8D%E5%90%88%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&lemmaId=53827163&from=bottomBarShare&_swebfr=1&_swebFromHost=baiduboxapp" />},当时从事的岗位就是前端开发工程师，所负责的工作领域主要是IPTV上的节目页面开发和内容管理平台的搭建，所涉及的技术栈主要是Jquery和Vue；
                            2018年9月加入了第二家公司{<CardIframe content="深圳市虹红科技有限公司" url="https://vhsagj.smartapps.baidu.com/pages/lemma/lemma?lemmaTitle=%E6%B7%B1%E5%9C%B3%E5%B8%82%E8%99%B9%E7%BA%A2%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&lemmaId=51694144&from=bottomBarShare&_swebfr=1&_swebFromHost=baiduboxapp" />}成都分公司,从事的岗位也是前端开发工程师，所负责的工作是公司主要产品的迭代开发和附属产品以及内部平台的搭建，所涉及到的技术栈主要为React、Vue和Angular等；
                        </p>
                        <p>
                            为人谦虚谨慎，有持续学习的习惯，有上进心，工作中善于和同事沟通交流，有代码洁癖（轻微强迫症），喜欢优化代码已达到产品的至高质量和用户的极致体验。
                        </p>
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
            <CardInfo title={'ABILITIES'} subName={'My Skills'}>
                <Row className={Styles.row}>
                    <Col span={12} style={{ fontWeight: 300 }}>
                        <p>
                            JS基本功扎实；熟悉前端状态管理（Redux、VUEX等）；熟悉 TypeScript 开发；熟悉 VUE 全家桶、React全家桶开发，熟悉 Angular 1.x（公司项目老代码有使用）；研究过 VUE 核心代码部分，对其设计思想和原理有一定程度了解；熟悉 VUE2、VUE3 开发模式；了解 React 组件化和数据流以及React-Hooks的设计思想（目前仍在深入学习其深度优化方案）；了解 React、VUE 的 DIFF 算法原理；使用过的UI库主要有：Ant Design、Element-ui/plus等；使用过 Echarts 图标库；
                        </p>
                        <p>
                            了解大部分 CSS 属性（感觉要学全CSS还不是一件容易的事儿~~），能熟练运用 CSS 多种模式进行页面布局，会使用 CSS 动画制作一些基本动效（复杂动效可能还需要深入学习）。
                        </p>
                    </Col>
                    <Col span={1} />
                    <Col span={11}>
                        {
                            skills.map((skill, index) => (
                                <ProgressTool key={index} {...skill} />
                            ))
                        }
                        <span style={{ color: '#ccc' }}>(此技术条只代表个人的相对能力哈~~)</span>
                    </Col>
                </Row>
            </CardInfo>
            <CardInfo title={'WELCOME TO VISIT'} subName={'My Blogs'} options={{ backgroundColor: '#f7f7f7' }}>
                <Row className={Styles.row}>
                    <Col span={12}>
                        <Card>
                            <GithubOutlined style={{ fontSize: 35 }} />
                            <br />
                            <p style={{ fontSize: 20, fontWeight: 500, marginTop: 25 }}>GitHub</p>
                            <p style={{ fontWeight: 300 }}>
                                <CardIframe content="https://github.com/f854520061" url="https://github.com/f854520061" blank={true} />
                            </p>
                        </Card>
                    </Col>
                    <Col span={1} />
                    <Col span={11}>
                        <Card>
                            <Image src={csdn} preview={false} width={60} />
                            <br />
                            <p style={{ fontSize: 20, fontWeight: 500, marginTop: 5 }}>CSDN</p>
                            <p style={{ fontWeight: 300 }}>
                                <CardIframe content="https://blog.csdn.net/qq_24719349" url="https://blog.csdn.net/qq_24719349" blank={true} />
                            </p>
                        </Card>
                    </Col>
                </Row>
                <section style={{ display: 'flex', padding: '45px' }}>
                    <Button style={{ backgroundColor: '#333', width: 150, height: 50, color: '#FFF', margin: 'auto' }}>VIEW ALL</Button>
                </section>
            </CardInfo>
            <CopyRight />
        </>
    )
}

export default Home