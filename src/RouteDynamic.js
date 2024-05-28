import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routing/Home';
import About from './Routing/About';
import Contact from './Routing/Contact';
import PageNotFound from './Routing/PageNotFound';

function RouteDynamic(props) {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}

export default RouteDynamic;