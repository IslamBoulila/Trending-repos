import React,{Component} from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
import Repository from './components/Repository/Repository';


class  App extends  Component{

  render(){
    return (
      <div className="App">
          <Layout>
              <Repository/>
          </Layout>
      </div>
    );
  }
  
}

export default App;
