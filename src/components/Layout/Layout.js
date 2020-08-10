import React, { Component } from 'react';
import Header from '../Header/Header';


class Layout extends Component {


    render() {

        return (
        <>
        <Header/>
        <main className="Content">{this.props.children}</main>
        </>
        
        
        );
    }
}

export default Layout;