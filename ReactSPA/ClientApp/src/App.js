import React, { Component } from 'react';
import { Route } from 'react-router';
import { CustomLayout } from './components/CustomLayout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <CustomLayout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </CustomLayout>
    );
  }
}
