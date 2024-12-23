import React, { useState } from "react";
import bg from './logo.svg';
import bg1 from './Group 4.png'
import bg2 from './Subtract.png'
import bg3 from './Icon.png'
import bg4 from './icon1.png'
import bg5 from './icon2.png'
import bg6 from './icon3.png'
import bg7 from './icon4.png'

import './Signin.css';
function Signin()
{
    const [isSaasSelected, setIsSaasSelected] = useState(true); // State to track which button is selected

    return(
        <div className="newcontainer">
         <div className="main1">
         

           
           <div className="side1">
            <div className="autofix">
            <img src={bg}/><span className="ainew">AI to Detect & Autofix Bad Code</span><br/>
               <div className="line1">
                
               </div>
               <div className="content1">
                  <span className="new11">30+ <br/><span className="sub">Language Support</span> </span>  <span className="new3">10K+ <br/><span className="sub1">Developers</span></span> <span className="new3">100K+  <br/><span className="sub1">Hours Saved</span></span>
               </div>
            </div>
               
              
           </div>
           <div class="side2">
    <div className="side3">
        <img src={bg1} className="bg-image" alt="background" /><br/><span className="issues">Issues Fixed<br/><span className="newkk">500K+</span></span>
        <div class="content-wrapper">
            <span className="up-arrow">&#9650;</span>
            <span className="textnew">14% <br/><span className="space"></span></span><br/>
           
        </div>
        
    </div>
    
</div><br/>
<img src={bg2} className="imagenew"/>
         </div>
         <div className="main2">
            <div className="side4">
            <img src={bg} className="side4image"/> <span className="brand-name">CodeAnt AI</span><br/><br/>
            <span className="welcome">Welcome to CodeAnt AI</span>
           
            </div>
            <div className="newbutton">
                <button 
                    className={`newbutton1 ${isSaasSelected ? 'active' : ''}`} 
                    onClick={() => setIsSaasSelected(true)}
                >
                    SAAS
                </button> 
                <button 
                    className={`newbutton2 ${!isSaasSelected ? 'active' : ''}`} 
                    onClick={() => setIsSaasSelected(false)}
                >
                    Self Hosted
                </button>
            </div>
            <br /><br />
            {isSaasSelected ? (
                <div className="saas-options">
                <button className="saasbutton">
                    <img src={bg3} alt="GitHub" />
                    <span className="github">Sign in with Github</span>
                </button>
                <button className="saasbutton">
                    <img src={bg4} alt="GitHub" />
                    <span className="github">Sign in with Bitbucket</span>
                </button>
                <button className="saasbutton">
                    <img src={bg5} alt="GitHub" />
                    <span className="github">Sign in with Azure Devops</span>
                </button>
                <button className="saasbutton">
                    <img src={bg6} alt="GitHub" />
                    <span className="github">Sign in with GitLab</span>
                </button>
            </div>
            ) : (
                <div>
                <button className="saasbutton">
                    <img src={bg6} alt="GitHub" />
                    <span className="github">Self Hosted GitLab</span>
                </button>
                <button className="saasbutton">
                <img src={bg7} alt="GitHub" />
                <span className="github">Sign in with SSO</span>
            </button>
            </div>
            )}<br/>
              <div className="privacy">By signing up you agree to the <span className="spanprivacy">Privacy Policy.</span></div>
            </div>
        <br/>
      
        </div>
    )
}
export default Signin