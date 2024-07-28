import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Python from "./python.png";
import Camera from "./camera.png";
import Market from "./marketing.png";


function App() {
  return (
    <div className="App">
      <h1>The Team</h1>
      <p className='p1'>
        Our team consists of talented, experienced, and enthusiastic individuals who aim to learn and win in their respective fields. CODE 2K24 wouldn’t be possible without any of them.
      </p>
      {/* <div className="cards-container">
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div className="cards-container">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div> */}
      {/* <div className="cards-container-2">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div className="cards-container-2">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        
      </div>
      <div className="cards-container-2">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        
      </div> */}
       <div className="cards-container">
        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h2 className="card-title">Name</h2>
            <h3 className="card-post">President</h3>
            <p className="card-description">This is a small description.</p>
            <div className="card-icons">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h2 className="card-title">Name</h2>
            <h3 className="card-post">President</h3>
            <p className="card-description">This is a small description.</p>
            <div className="card-icons">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        {/* Add more cards here if needed */}
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h2 className="card-title">Name</h2>
            <h3 className="card-post">President</h3>
            <p className="card-description">This is a small description.</p>
            <div className="card-icons">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            
            <h2 className="card-title">Name</h2>
            <h3 className="card-post">President</h3>
            
            
            <p className="card-description">This is a small description.</p>
            <div className="card-icons">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h2 className="card-title">Name</h2>
            <h3 className="card-post">President</h3>
            <p className="card-description">This is a small description.</p>
            <div className="card-icons">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        {/* Add more cards here if needed */}
      </div>
      <div className="cards-container-2">
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        {/* Add more cards here if needed */}
      </div>
      <div className="cards-container-2">
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        {/* Add more cards here if needed */}
      </div>
      <div className="cards-container-2">
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        {/* Add more cards here if needed */}
      </div>
      <div className="cards-container-2">
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        {/* Add more cards here if needed */}
      </div>
      <div className="cards-container-2">
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-2"></div>
          <div className="card-content-2">
            <h2 className="card-title-2">Name</h2>
            <h3 className="card-post-2">President</h3>
            <p className="card-description-2">This is a small description.</p>
            <div className="card-icons-2">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
            </div>
          </div>
        </div>
        {/* Add more cards here if needed */}
      </div>

      <img src={Python} className='img1'></img>
      <img src={Camera} className='img2'></img>
      <img src={Market} className='img3'></img>
     
    </div>
  );
}

export default App;
