import React, { useState } from "react"
import { Drawer } from 'antd'

interface cProps {
    content: string;
    url: string;
    blank?: boolean;
}

const CardIframe = (props: cProps) => {
    const [visible, setVisible] = useState(false)
    const openLink = () => {
        if (!props.blank) {
            setVisible(true)
        } else {
            window.open(props.url)
        }
    }
    return (
        <>
            <section style={{display: 'inline' }}>
                <span style={{ color: '#5dd5c8', cursor: 'pointer' }} onClick={openLink}> {props.content} </span>
                <Drawer title={props.content} width={'35vw'} visible={visible} onClose={() => setVisible(false)}>
                    <iframe 
                        title={props.content} 
                        src={props.url}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none'
                        }}
                    ></iframe>
                </Drawer>
            </section>
        </>
    )
}

export default CardIframe