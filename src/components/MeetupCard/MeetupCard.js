import React from 'react';
import Avatar from '../Avatar/Avatar';
import BtnJoin from '../BtnJoin/BtnJoin';


import { Wrapper, Body, Heading, Paragraph} from './MeetupCard.style';

const MeetupCard = ({ location , members, organizer}) => {
    return (
        <Wrapper>
            <Avatar/>
            <Body>    
                <Heading><h1>Hacktiv8 Meetup</h1></Heading>
                <p id="location">location : {location}</p>
                <p id="members">Members : {members}</p>
                <p id="organizer">Organizer : {organizer}</p>
                <BtnJoin primary="primary" text="Join Us!"></BtnJoin> &nbsp;&nbsp;
                <BtnJoin text="Sign Up"></BtnJoin>
            </Body>
            
        </Wrapper>
    );
}

export default MeetupCard;



