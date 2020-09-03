import React from 'react';

import './BtnJoin.css';

const BtnJoin = (props) => {
    return (
        <button className="primary">{props.text}</button>
    );
}

export default BtnJoin;