import React from 'react';
import './Event.css';
import Vid from "./download.png";


const Event = () => {
  return (
    <div className='bodyalt'>
      <div className='intro'>
        <h1>Hackathon</h1>
        <div>
            No. of Participants per team: <span>2</span>  <br></br>
            Domain: <span>OPEN</span> <br></br>
            Mode: <span>HYBRID</span>
        </div>
      </div>
      <div className='primary'>
        <h2>Prelims</h2>
        <div>
        Participants need to create an app/website/chrome extension/etc., on the topic <span>‘Developer productivity’</span>. <br></br>
        The prelims submission should be submitted before <span>7 August, 2024</span>.
        </div>
      </div>
      <div className='secondary'>
        <h2>Finals</h2>
        <div>
        Shortlisted teams will be asked to present their applications and answer questions regarding it, on the day of event i.e. <span>12 August, 2024</span>.
        </div>
      </div>
      <div className='tertiary'>
        <h2>Contact</h2>
        <div>
        Amaan Elahi <br></br>
            Discord: <span> _notmyself</span> <br></br>
            Phone No: <span> +91 98702 11033</span>
        </div>
      </div>
      <div className='btns'>
      <button type="button" className='btn btn1'>SUBMIT</button> <button type="button" className='btn btn2'>More Info</button>
      </div>
      <img src={Vid} className='img'></img>
    </div>
  )
}

export default Event
