import './App.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/posts" component={Posts} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
    </div>
  );
}

export default App;
