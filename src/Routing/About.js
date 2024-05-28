import React from 'react';
import Header from './Header';
import {useNavigate} from 'react-router-dom';

const About = () => {
    const navigation=useNavigate();
const goBack=()=>{
    navigation(-1);
}
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default About;