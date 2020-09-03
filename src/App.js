import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MeetupCard from './components/MeetupCard/MeetupCard';
import NextMeetupCard from './components/NextMeetupCard/NextMeetupCard';
import MembersCard from './components/MembersCard/MembersCard';
import PastMeetupCard from './components/PastMeetupCard/PastMeetupCard';



function App() {
  return (
    <div className="App">
      {/* <FontSytle/> */}
      <Navbar/>
      <div className="container-fluid">
        
        <MeetupCard />
        <br></br>
        <h3 className="whitecolor">Next Meetup</h3>
        <NextMeetupCard />
        <h3 className="whitecolor">About Meetup</h3>
        <p className="whitecolor"> 
          Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br /><br />
          Twitter: @JakartaJS and we user the hashtag #jakartajs
        </p>
        <br />
        <div>
          <h3 className="whitecolor">Members</h3> 
          <text className="SeeAll whitecolor">See all</text><br />
        </div>
        <MembersCard />
        <div>
          <h3 className="whitecolor">Past Meetups</h3> 
          <text className="SeeAll whitecolor">See all</text><br />
        </div>
        <div className="past-meetups">
          <PastMeetupCard 
          date="27 November 2017" 
          event_desc="#39 JakartaJS April Meetup with Kumparan" 
          attendees={139}
          />
          <PastMeetupCard 
          date="27 Oktober 2017" 
          event_desc="#38 JakartaJS April Meetup with Blibli" 
          attendees={113}/>
          <PastMeetupCard 
          date="27 September 2017" 
          event_desc="#37 JakartaJS April Meetup with Hacktiv8" 
          attendees={110}/>
        </div>
        <br />
        <hr></hr>
        <br />
        <center><text className="copyright">Copyright &copy; Hacktiv8 2020 </text></center>
        <br />   
      </div>  
    </div>
  );
}

export default App;
