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
        background-color: #eaedf2;
        font-size:16px;
        border:1px solid #fff;
        &.ok{
            float:right;
            height:192px;
        }

        :nth-child(1){
            border:none;
        }
        :nth-child(2){
            border-top:none;
            border-right:none;
            border-bottom:none;
        }
        :nth-child(3){
            border-top:none;
            border-right:none;
            border-bottom:none;
        }
        :nth-child(4){
            border-top:none;
            border-right:none;
            border-bottom:none;
        }
        :nth-child(5){
            border-left:none;
            border-right:none;
            border-bottom:none;
        }
        :nth-child(6){
            border-right:none;
            border-bottom:none;
        }
        :nth-child(7){
            border-right:none;
            border-bottom:none;
        }
        :nth-child(8){
            border-right:none;
            border-bottom:none;
        }
        :nth-child(9){
            border-left:none;
            border-right:none;
            border-bottom:none;
        }
        :nth-child(10){
            border-right:none;
            border-bottom:none;
        }
        :nth-child(11){
            border-right:none;
            border-bottom:none;
        }
        :nth-child(12){
            border-left:none;
            border-right:none;
            border-bottom:none;
        }
        :nth-child(13){
            border-right:none;
            border-bottom:none;
        }
        :nth-child(14){
            border-right:none;
            border-bottom:none;
        }

    }
}
`

export { Wrapper }