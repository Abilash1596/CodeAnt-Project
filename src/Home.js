import React, { useState } from 'react';
import bg from './logo.svg'; // Replace with your logo path
import bg1 from './home.svg';
import bg2 from './Frame 10.svg';
import bg3 from './cloud.svg';
import bg4 from './how to.svg';
import bg5 from './gear.svg';
import bg6 from './Frame 1015.png';
import bg7 from './plus.png';
import bg8 from './database.png';
import bg9 from './Frame 10.png'
import bg10 from './logout.png'

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="top-section">
          <div className="brand-logo-container">
            <img src={bg} alt="CodeAnt Logo" className="brand-logo" />
            <span className="brand-name">CodeAnt AI</span>
          </div>
          <center>
            <ul>
              <li className="dropdown-container">
                <button className="dropdown-button" onClick={toggleDropdown}>
                  UtkarshDhari...▼
                </button><br/>
                {isDropdownOpen && (
                <ul className="dropdown-menu">
                    <li className="newimage">
                      <img src={bg1} alt="Repositories" />
                      <span className="aicode">Repositories</span>
                    </li>
                    <li>
                      <img src={bg2} alt="AI Code Review" />
                      <span className="aicode">AI Code Review</span>
                    </li>
                    <li>
                      <img src={bg3} alt="Cloud Security" />
                      <span className="aicode">Cloud Security</span>
                    </li>
                    <li>
                      <img src={bg4} alt="How to Use" />
                      <span className="aicode">How to Use</span>
                    </li>
                    <li>
                      <img src={bg5} alt="Settings" />
                      <span className="aicode">Settings</span>
                    </li>
                  </ul>
                )}
              </li>
            </ul><br/>
          </center>
        </div>
        <div className="bottom-section">
          
          <span className='support'><img src={bg10}/> Logout</span><br/><br/>
          
        </div>
      </div>

      {/* Main Content */}
      <div className={`main ${isSidebarOpen ? 'shifted' : ''}`}>
        <div className="new">Repositories</div>
        <br />
        <div className="new1">
          <span className="new2">33 total repositories</span>
          <div className="anew">
            <button className="new-buttons">
              <img src={bg6} alt="Refresh" /> Refresh All
            </button>
            <button className="new21">
              <img src={bg7} alt="Refresh" /> Add Repository
            </button>
          </div>
          <input type="text" className="search-box" placeholder="Search..." />
          <div className="next1">
            <div className="next2">
              <span className="next3">design-system</span>
              <button className="next4">Public</button>
              <br />
              <br />
              <div>
                <span className="react">React<span className='dotnew'></span> </span>
                <img src={bg8} className="next6" alt='image' />
                <span className="next5">7320 KB</span>
                <span className="next7">Updated 1 day ago</span>
              </div>
            </div>
          </div>
          <div className="next1">
            <div className="next2">
              <span className="next3">codeant-ci-app</span>
              <button className="next4">Private</button>
              <br />
              <br />
              <div>
                <span className="react">Javscript <span className='dotnew'></span></span>{' '}
                <img src={bg8} className="next6" />
                <span className="next5">5871 KB</span>
                <span className="next7">Updated 2 days ago</span>
              </div>
            </div>
          </div>
          <div className="next1">
            <div className="next2">
              <span className="next3">analytics-dashboard</span>
              <button className="next4">Private</button>
              <br />
              <br />
              <div>
                <span className="react">Python <span className='dotnew'></span></span>{' '}
                <img src={bg8} className="next6" />
                <span className="next5">4521 KB</span>
                <span className="next7">Updated 5 days ago</span>
              </div>
            </div>
          </div>
          <div className="next1">
            <div className="next2">
              <span className="next3">mobile-app</span>
              <button className="next4">Public</button>
              <br />
              <br />
              <div>
                <span className="react">Swift <span className='dotnew'></span></span>{' '}
                <img src={bg8} className="next6" />
                <span className="next5">3096 KB</span>
                <span className="next7">Updated 3 days ago</span>
              </div>
            </div>
          </div>
          <div className="next1">
            <div className="next2">
              <span className="next3">e-commerce-platform</span>
              <button className="next4">Private</button>
              <br />
              <br />
              <div>
                <span className="react">Java <span className='dotnew'></span></span>{' '}
                <img src={bg8} className="next6" />
                <span className="next5">6210 KB</span>
                <span className="next7">Updated 6 days ago</span>
              </div>
            </div>
          </div>
          <div className="next1">
            <div className="next2">
              <span className="next3">blog-website</span>
              <button className="next4">Public</button>
              <br />
              <br />
              <div>
                <span className="react">HTML/CSS <span className='dotnew'></span></span>{' '}
                <img src={bg8} className="next6" />
                <span className="next5">1876 KB</span>
                <span className="next7">Updated 4 days ago</span>
              </div>
            </div>
          </div>
          <div className="next1">
            <div className="next2">
              <span className="next3">social-network</span>
              <button className="next4">Private</button>
              <br />
              <br />
              <div>
                <span className="react">PHP <span className='dotnew'></span></span>{' '}
                <img src={bg8} className="next6" />
                <span className="next5">5432 KB</span>
                <span className="next7">Updated 7 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
