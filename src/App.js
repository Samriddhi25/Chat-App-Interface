import React, { Component } from 'react';
import Home from './containers/Home/Home';
import { BrowserRouter, Route , Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;