import React from 'react';
import PropTypes from 'prop-types';

import BtnJoin from '../BtnJoin/BtnJoin';

import { PastMeetupCardBg, PastMeetupDesc, Went } from "./PastMeetupCard.style";

// import './PastMeetupCard.css';

const PastMeetupCard = ({data}) => {
    return (
                <>
                
                    {
                        data.map((item) => (
                            <PastMeetupCardBg>
                                <PastMeetupDesc>
                                    <b>{item.date}</b>
                                    <hr></hr>
                                    <p>{item.event_desc}</p>
                                    <p>{item.attendees} &nbsp;<Went>went</Went></p>
                                    <BtnJoin primary="primary" text="View" ></BtnJoin>
                                </PastMeetupDesc>
                            </PastMeetupCardBg>
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