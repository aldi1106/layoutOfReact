import React from 'react';
import Avatar from '../Avatar/Avatar';
import BtnJoin from '../BtnJoin/BtnJoin';


import { Wrapper, Body, Heading, Paragraph} from './MeetupCard.style';

const MeetupCard = () => {
    return (
        <Wrapper>
            <Avatar/>
            <Body>
                <Heading>Hacktiv8 Meetup</Heading>
                <Paragraph> Location : Jakarta , Indonesia </Paragraph>
                <Paragraph> Members : 1078 </Paragraph>
                <Paragraph> Organizer : Adhy Wiranata</Paragraph>
                <BtnJoin primary="primary" text="Join Us!"></BtnJoin> &nbsp;&nbsp;
                <BtnJoin text="Sign Up"></BtnJoin>
            </Body>
            
        </Wrapper>
    );
}

export default MeetupCard;



