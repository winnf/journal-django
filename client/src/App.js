import './App.css';
import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import JournalList from './components/JournalList';
import EntryPage from './components/EntryPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/entries" exact component={JournalList}/>
        <Route path="/entry/:id" exact component={EntryPage}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
