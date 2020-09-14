import React from 'react'

import avatar from '../../Assets/avatar.png';

import {AvatarPhoto} from './Avatar.style';


const Avatar = () => {
    return (
        // <div>
            <AvatarPhoto src={avatar}
                alt="Avatar" 
            />
            // </AvatarPhoto>
        // </div>
    );
}

export default Avatar;
