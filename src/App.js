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
        <Route index element={<Todo />} />
        <Route path='/Todo' element={<Todo />} />
        <Route path='/Section/Section' element={<Section />} />
        <Route path="/*" element={                        
                          <main style={{ marginTop: "5rem", textAlign: "center", color: "white"}}>
                          <h1 style ={{fontSize: "10rem"}}>Page Not Found</h1>
                        </main>
                      }
                       />
      </Routes>
      </HashRouter>
    );
  }
}

export default App;
