import React, { Suspense, Component } from 'react';
const App=React.lazy(()=>import('./App.js'));

class LazyLoad extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<div>Loading</div>}>
                    <App/>
                </Suspense>
                <h1>Lazy Load</h1>
            </div>
        );
    }
}

export default LazyLoad;