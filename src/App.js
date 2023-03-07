import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BookSearchContainer from './components/BookSearchContainer';
import SubjectSearchContainer from './components/SubjectSearchContainer';

//filter by author and title seperately
//subject query by search limit 10
//Clear button input 
//max and min of publish year
//offset


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/:subject" component={SubjectSearchContainer}></Route>
          <Route exact path="/" component={BookSearchContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
