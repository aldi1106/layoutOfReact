import React from 'react';
import PropTypes from 'prop-types';

import BtnJoin from '../BtnJoin/BtnJoin';

import './PastMeetupCard.css';

// const PastMeetupCard = ({date, event_desc, attendees}) => {
//     return (
//         <div className="PastMeetupCard">
//             <div className="PastMeetupDesc">
//                 <b>{date}</b>
//                 <hr></hr>
//                 <p>{event_desc}</p>
//                 <p>{attendees} &nbsp;<text className="went">went</text></p>
//                 <BtnJoin text="View" ></BtnJoin>
//             </div>
//         </div>
    //     );
// }

const PastMeetupCard = ({data}) => {
    return (
                <>
                    {
                        data.map((item) => (
                            <div className="PastMeetupCard">
                                <div className="PastMeetupDesc">
                                    <b>{item.date}</b>
                                    <hr></hr>
                                    <p>{item.event_desc}</p>
                                    <p>{item.attendees} &nbsp;<text className="went">went</text></p>
                                    <BtnJoin text="View" ></BtnJoin>
                                </div>
                            </div>
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