import React, { FC } from 'react'
import { Progress } from 'antd'

interface cProps {
    name: string;
    value: number;
}

const ProgressTool: FC<cProps> = (props) => {
    return (
        <section>
            <span>{props.name}</span>
            <Progress 
                percent={props.value} 
                showInfo={false} 
                strokeColor={'#585859'} 
            />
        </section>
    )
}

export default ProgressTool