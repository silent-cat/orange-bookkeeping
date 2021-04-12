import styled from 'styled-components'
const Wrapper = styled.section`
>.output{
    background-color:#fff;
    font-size:36px;
    padding:16px;
    text-align:right;
    box-shadow:inset 0 -5px 5px -5px rgba(0,0,0,.25),
               inset 0 5px 5px -5px rgba(0,0,0,.25);
}
>.pad{
    >button{
        float:left;
        width:25%;
        height:64px;
        border:1px solid #fff;
        background-color: #eaedf2;
        font-size:16px;
        &.ok{
            float:right;
            height:192px;
        }
    }
}
`

export { Wrapper }