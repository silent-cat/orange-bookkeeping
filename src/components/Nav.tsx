import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Icon from './Icon'

const NavWrapper = styled.nav`
background-color:#fff;
line-height:24px;
box-shadow:0 0 3px rgba(0,0,0,.3);
>ul{
  display:flex;
  >li{
    flex:1;
    padding:4px 0;
    >a{
      display:flex;
      flex-direction:column;
      align-items:center;

      &.selected{
      color:#f45e5d;
      }
      &.icon{
        fill:#f45e5d;
      }
    }

    
    
  }
}
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>

          <NavLink to="/tags"activeClassName="selected">
            <Icon name="tags" />
            标签页</NavLink>
        </li>
        <li>

          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记账页</NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics" />
统计页</NavLink>
        </li>
      </ul>

    </NavWrapper>
  )
}
export default Nav