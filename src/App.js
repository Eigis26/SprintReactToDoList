import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'
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
      </Routes>
      </HashRouter>
    );
  }
}

export default App;
