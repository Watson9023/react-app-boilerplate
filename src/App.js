import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';

import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store';

import View1 from './components/views/View1';
import View2 from './components/views/View2';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={View1}/>
            <Route path="/details" component={View2}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
