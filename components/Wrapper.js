import React, {useEffect, useState} from 'react';

const Example = ({count}) => {
    useEffect(() => {
        console.log(`render - ${count}`);

        return () => {
            console.log(`unmount - ${count}`);
        };
    }, [count]);
    return (
    <div>{count}</div>
    );
}

const Wrapper = () => {
    const [count, setCount] = useState(0);
    const updateCountFunc = () => setCount(count + 1);

    return (
        <div>
            <button onClick={updateCountFunc}>{count}</button>
            {count < 5 && <Example count={count}/>}
            {count < 5 && <Example count={-1}/>}
        </div>
    )
}

export default Wrapper;