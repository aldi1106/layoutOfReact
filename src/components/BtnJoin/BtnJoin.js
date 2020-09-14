import React from 'react';

import {Button} from './BtnJoin.style';

const BtnJoin = (props) => {
    return (
        <Button primary={props.primary}>{props.text}</Button>
    );
}

export default BtnJoin;