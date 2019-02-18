import React, { Component } from 'react'
import data from '../data/data'

import MyContext from './MyContext'


// Create Provider
class MyProvider extends Component {
    state = {
        data: data,
    }

    render(){
        return (
            <MyContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;