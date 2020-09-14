import React from 'react';
import Avatar from '../Avatar/Avatar';

import {Wrapper, Body, Heading, Paragraph} from './MemberCard.style';

const MembersCard = () => {
    return (
        <Wrapper>
            <Avatar/>
            <Body>
                <Heading>Organizers</Heading>
                <Paragraph>Adhi Wiranata    4 others</Paragraph>
            </Body>
        </Wrapper>
    );
}

export default MembersCard;