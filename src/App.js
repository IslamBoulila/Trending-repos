import React,{Component} from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
import ReposList from './containers/Repositories/ReposList';



class  App extends  Component{

  render(){
    return (
      <div className="App">
          <Layout>
             <ReposList/>
          </Layout>
      </div>
    );
  }
  
}

export default App;
