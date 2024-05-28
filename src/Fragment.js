import React, { Component } from 'react';
const ListPeople=()=>React.createElement('div',null,"Afzaal");
class Fragment extends Component {
    render() {
        return (
            <>
                <ul>
                    <List/>
                    <ListPeople/>
                </ul>
            </>
        );
    }
}

const List=()=>{
    return <>
        <li>Afzaal</li>
        <li>Anam</li>
        <li>Amina</li>
        <li>Faisal</li>
    </>
}

export default Fragment;