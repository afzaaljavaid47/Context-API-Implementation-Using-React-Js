import React, { Component } from 'react';
import {reactContext} from './ContextAPI/ContextMain';

class Child extends Component {
    render() {
        return (
            <reactContext.Consumer>
                {
                ({name,changeName})=>(
                    <div>
                        <h1>My Name is : {name}</h1>
                        <button onClick={()=>changeName()}>Change Name</button>
                    </div>
                )
                }
            </reactContext.Consumer>
        );
    }
}

export default Child;