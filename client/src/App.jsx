import './App.css';
import Home from "./screens/Home/Home"
import PostCreate from "./screens/PostCreate/PostCreate"
// import PostEdit from "./screens/PostEdit/PostEdit"
import PostDetail from "./screens/PostDetail/PostDetail"
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
    </div>
  );
}

export default App;
