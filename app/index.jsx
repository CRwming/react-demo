import React from 'react';
import ReactDOM from 'react-dom';

import Form from './components/Form';
import { browserHistory, Router, Route } from 'react-router';

class App extends React.Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
      );
  }
}

const root = document.getElementById('root');
ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={Form}/>
</Router>, root);
