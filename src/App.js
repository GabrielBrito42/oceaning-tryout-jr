import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/Header/Header'
import HomeComponent from './components/Home/Home'
import DevelopersRegisterComponent from './components/Developers/Register/Register'
import DevelopersSkillsComponent from './components/Developers/Skills/Skills'
import DevelopersListComponent from './components/Developers/List/List'
import SuccessRegisterComponent from './components/Success/Register/Register'

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route exact path={["/", "/home"]} component={HomeComponent}/>
          <Route exact path={"/developers/register"} component={DevelopersRegisterComponent}/>
          <Route exact path={"/developers/skills"} component={DevelopersSkillsComponent}/>
          <Route exact path={"/success/register"} component={SuccessRegisterComponent}/>
          <Route exact path={"/success/register"} component={SuccessRegisterComponent}/>
          <Route exact path={"/developers/list"} component={DevelopersListComponent}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
