import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'
import Section from './components/Section/Section'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main'
import { Routes, Route, HashRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <Main />
      <Routes>
        <Route path='/Todo' element={<Todo />} />
        <Route path='/Section/Section' element={<Section />} />
      </Routes>
      </HashRouter>
    );
  }
}

export default App;
