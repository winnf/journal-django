import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import EntryPage from './EntryPage';

export default () => (
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/entry/:id" component={EntryPage}/>
    </Switch>
</BrowserRouter>
);