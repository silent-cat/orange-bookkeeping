
// 可以在此处修改路由模式，默认为BrowserRouter改成HashRouter
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from 'views/Tags'
import Money from 'views/Money'
import Statistics from 'views/Statistics'
import styled from "styled-components";
import { Tag } from "views/Tag";

const AppWrapper = styled.div`
color:#333;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch >
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:id">
            <Tag />
          </Route>
          <Route exact path="/money">
            <Money />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          {/* 默认路由 */}
          <Redirect exact from="/" to="/money" />
          {/* 找不到的路由跳转到404页面 */}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>

    </AppWrapper>
  );
}
function NoMatch() {
  return (
    <div>404----页面不存在</div>
  )
}



export default App;
