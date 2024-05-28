import React, { Component } from 'react';
import {reactContext} from './ContextAPI/ContextMain';
import Child from './Child';

class Context extends Component {
    changeName=()=>{
        this.setState({name:"Javaid"})
    }
    state={
        name:"Afzaal",
        changeName:this.changeName
    }
    
    render() {
        return (
            <reactContext.Provider value={this.state}>
                <Child/>
            </reactContext.Provider>
        );
    }
}

export default Context;