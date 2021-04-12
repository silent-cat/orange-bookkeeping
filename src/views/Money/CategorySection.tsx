import styled from 'styled-components'
import React, { useState } from 'react'
const Wrapper = styled.section`
>ul{ 
    display:flex;
    >li{
        flex:1;
        text-align:center;
        padding:16px 0;
        position:relative;
        &.selected::after{
            content:'';
            display:block;
            height:5px;
            background-color:#000;
            position:absolute;
            bottom:0;
            width:100%;
        }
    }
}
`
type Props = {
    value: '-' | '+'
    onChange:(value:'-' | '+') => void
}

const CategorySection: React.FC<Props> = (props) => {
    const categoryMap = { '-': '支出', '+': '收入' }
    // type Keys = keyof typeof categoryMap
    // const [categoryList] = useState<Keys[]>(['-', '+'])

    const [categoryList] = useState<('-' | '+')[]>(['-', '+'])
    const category = props.value
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li className={category === c ? 'selected' : ''}
                        onClick={() => { props.onChange(c) }} key={c}>{categoryMap[c]}</li>)}

            </ul>
        </Wrapper>
    )
}
export { CategorySection }