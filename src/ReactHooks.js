import { React, useState, useEffect, useMemo } from 'react';

function ReactHooks() {
    const [count, setCount] = useState(0);
    const [state,setState]=useState();
    useEffect(() => {
        console.log("Use Effect Called"+count);
    },[])
    const chnagecount = () => {
        setCount(count+1);
    }
    const MemeData=useMemo(()=>{
        return <div>
        <h2>Use Memo : {count}</h2>
    </div>
    },[state])

    return (
        <>
        {MemeData}
            <div>
                <h2>Without Memo {count}</h2>
            </div>
            <button onClick={() => chnagecount()}>Chnage Counter</button>
            <button onClick={() => setState(Math.random)}>Set Memo</button>
        </>
    )
}

export default ReactHooks;