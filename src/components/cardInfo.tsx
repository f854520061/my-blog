import React, { FC, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { PageHeader } from 'antd'
import Styles from './../assits/css/cardInfo.module.css'

interface cProps {
    title: string;
    subName: string;
    options?: {
        backgroundColor?: string
    };
    children?: ReactNode | FC;
}

const CardInfo = (props: cProps) => {
    // 为卡片定义动画效果（具体动画效果在CSS中实现）
    const Card: MutableRefObject<any> = useRef()
    const [childrenShow, updateChildrenShow] = useState(false)

    const scrollDoc = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop
        const top = Card.current.offsetTop
        if (scrollTop >= (top - 700) && !childrenShow) {
            updateChildrenShow(true)
            window.removeEventListener('scroll', scrollDoc)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // 没有滚动事件时先触发一次，防止组件白屏
        scrollDoc()
        window.addEventListener('scroll', scrollDoc)
        return () => {
            window.removeEventListener('scroll', scrollDoc)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section ref={Card} style={{ backgroundColor: props.options?.backgroundColor || '#FFF', padding: '30px 0' }}>
            <PageHeader
                className="site-page-header"
                title={
                    <>
                        <span className={Styles.title}>{props.title}</span>
                        <h2 className={Styles.subName}>{props.subName}</h2>
                    </>
                }
            />
            {
                childrenShow && props.children
            }
        </section>
    )
}

export default CardInfo