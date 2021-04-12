import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    display:flex;
    align-items:center;
    >span{
        /* margin-right:16px; */
    }
    >input{
        height:36px;
        border:none;
        background:none;
        flex:1;
    }
`

type Props = {
    label?:string
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
    const {label,children,...rest} = props
    return (
        <Label>
            <span></span>
            <input {...rest} autoFocus/>
        </Label>
    )
}

export default Input