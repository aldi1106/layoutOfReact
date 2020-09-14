import React from 'react';
import PropTypes from 'prop-types';
import BtnJoin from '../BtnJoin/BtnJoin';

import {Wrapper, Body, Paragraph, Text} from './PastMeetupCard.style';

const PastMeetupCard = ({data}) => {
    return (
                <>
                    {
                        data.map((item) => (
                            <Wrapper>
                                 <Body> 
                                    <b>{item.date}</b>
                                    <hr></hr>
                                    <Paragraph>{item.event_desc}</Paragraph>
                                    <Paragraph>{item.attendees} &nbsp;<Text>went</Text></Paragraph>
                                    <BtnJoin primary="primary" text="View" ></BtnJoin>
                                 </Body> 
                            </Wrapper>
                        ))
                    }
                
                </>
    );
}


PastMeetupCard.propTypes = {
    date: PropTypes.string.isRequired,
    event_desc : PropTypes.string.isRequired, 
    attendees : PropTypes.number.isRequired, 
  };

export default PastMeetupCard;