import React, { useState } from 'react';
function Prices2 (props) {
    // console.log('Prices2 component');
    // console.log(props);
    const [currency, setCurrency] = useState('USD');
    return (
        <div>
            <ul>
                <li>
                    Bitcoin rate for {props.bpi[currency].description}:
                    <span>{props.bpi[currency].code}</span>
                    <strong>{props.bpi[currency].rate}</strong>
                </li>
            </ul>
            <label htmlFor='type'>Choose a Currency Type:</label>
            <select id='type' onChange={ e =>setCurrency(e.target.value) } className='form-control'>
                <option label='USD' value='USD'>USD</option>
                <option label='GBP' value='GBP'>GBP</option>
                <option label='EUR' value='EUR'>EUR</option>
            </select>
        </div>
    );
}
export default Prices2;