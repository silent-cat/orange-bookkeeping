import styled from 'styled-components'
import React, { ChangeEventHandler } from 'react'
import Input from 'components/Input'
const Wrapper = styled.section`
background:#fff;
padding:12px 16px;
font-size:14px;
box-shadow:inset 0 -5px 5px -5px rgba(0,0,0,.25),
               inset 0 5px 5px -5px rgba(0,0,0,.25);
`
type Props = {
    value: string
    onChange: (value: string) => void
}
// 受控组件
const NoteSection: React.FC<Props> = (props) => {
    const note = props.value
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <Wrapper>
            <Input
                label="备注"
                placeholder="添加备注"
                value={note}
                onChange={onChange} />
        </Wrapper>
    )
}
export { NoteSection }