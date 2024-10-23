import React, { useState } from 'react'
import './Home.css';
import stats from '../Assets/stats.png'; 
import boltshift from '../Assets/boltshift.png';
import lightbox from '../Assets/lightbox.png';
import featherdev from '../Assets/featherdev.png';
import spherule from '../Assets/spherule.png';
import globalbank from '../Assets/globalbank.png';
import nietzsche from '../Assets/nietzsche.png';
import inbox from '../Assets/inbox.png';
import delivery from '../Assets/delivery.png';
import reports from '../Assets/reports.png';
import coustomers from '../Assets/coustomers.png';
import tools from '../Assets/tools.png';
import difference from '../Assets/difference.png';
import candice from '../Assets/candice.png';
import sisyphus from '../Assets/sisyphus.png';
import mobile from '../Assets/mobile.png';
import { FAQComponent } from './FAQComponent';
import person2 from '../Assets/person2.png';
import person3 from '../Assets/person3.png';
import UX from '../Assets/UX.png';
import migrating from '../Assets/migrating.png';
import APIstack from '../Assets/APIstack.png';
import comapanyLogo from '../Assets/companyLogo.png';

function Button() {
    return (
      <button className="new-feature-button">
        <button className="tag">New feature</button>
        Check out the team dashboard →
      </button>
    );
}


 

function Home() {
  return ( 
    <div className="home" align= 'center'>
      <div className="home" align='center'>
      <Button />
      {/* Other content here */}
      </div>
      <h1>Beautiful analytics to grow smarter.</h1>
      <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      <div className="cta-buttons">
        <button className='demo'>Demo</button>
        <button className='signup'>Sign up</button>
      </div>
      <div className="image-section">
        <img src={stats} alt="stats"/>
      </div>
      <div className="company-logos">
        <p>Join 4,000+ companies already growing.</p>
        <div className="logos">
          <img src={boltshift} alt="Boltshift" />
          <img src={lightbox} alt="Lightbox" />
          <img src={featherdev} alt="FeatherDev" />
          <img src={spherule} alt="Spherule" />
          <img src={globalbank} alt="GlobalBank" />
          <img src={nietzsche} alt="Nietzsche" />
        </div>
      </div>

      <div className="features-section">
        <h2 align='center'>Analytics that feel like they’re from the future.</h2>
        <p align='center'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className="features">
          <div className="feature">
            <img src={inbox} alt="Envelope Icon" />
            <h3>Share team inboxes</h3>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          </div>
          <div className="feature">
            <img src={delivery} alt="Lightning Icon" />
            <h3>Deliver instant answers</h3>
            <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          </div>
          <div className="feature">
            <img src={reports} alt="Calendar Icon" />
            <h3>Manage your team with reports</h3>
            <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.</p>
          </div>
          <div className="feature">
            <img src={coustomers} alt="Chat Icon" />
            <h3>Connect with customers</h3>
            <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
          </div>
          <div className="feature">
            <img src={tools} alt="Puzzle Icon" />
            <h3>Connect the tools you already use</h3>
            <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
          </div>
          <div className="feature">
            <img src={difference} alt="Headset Icon" />
            <h3>Our people make the difference</h3>
            <p>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
          </div>
        </div>
        </div>

        <div className="testimonial-section">
        <img src={sisyphus} alt="Sisyphus Logo" className="testimonial-logo" />
        <blockquote className="testimonial-quote">
          “We’ve been using Untitled to kick start every new project and can’t imagine working without it.”
        </blockquote>
        <div className="testimonial-author">
          <img src={candice} alt="Candice Wu" />
          <p><strong>Candice Wu</strong></p>
          <p>Product Manager, Sisyphus</p>
        </div>
      </div>

      <div className="features-section-sec">
        <h2 align="center">Cutting-edge features for advanced analytics</h2>
        <p align="center">Powerful, self-served product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className="features-section-sec">
          <img align="center" src={mobile} alt="mobile" />
        </div>
        <div className="features-sec">
          <div className="feature-sec">
            <img src={inbox} alt="Envelope Icon" />
            <h3>Share team inboxes</h3>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
          <div className="feature-sec">
            <img src={delivery} alt="Lightning Icon" />
            <h3>Deliver instant answers</h3>
            <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
          <div className="feature-sec">
            <img src={reports} alt="Calendar Icon" />
            <h3>Manage your team with reports</h3>
            <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.</p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
        </div>
      </div>
      {/* Add the FAQComponent here */}
      <FAQComponent />
      <div className="contact-section">
        <div className="contact-content">
          <div className="contact-images">
            <img src={candice} alt="Person 1" />
            <img src={person2} alt="Person 2" />
            <img src={person3} alt="Person 3" />
          </div>
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <button className="get-in-touch">Get in touch</button>
      </div>
    </div>

    <div className="blog-section">
      <div className="header">
        <h2>Latest Blog Posts</h2>
        <p>Tools and strategies modern teams need to help their companies grow.</p>
        <button className="view-all-posts">View all posts</button>
      </div>
      <div className="blog-posts">
        <div className="blog-post">
          <img src={UX} alt="UX review presentations" />
          <h3>UX review presentations</h3>
          <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          <div className="author">
            <img src={candice} alt="Olivia Rhye" />
            <span>Olivia Rhye - 20 Jan 2024</span>
          </div>
        </div>
        <div className="blog-post">
          <img src={migrating} alt="Migrating to Linear 101" />
          <h3>Migrating to Linear 101</h3>
          <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
          <div className="author">
            <img src={person2} alt="Phoenix Baker" />
            <span>Phoenix Baker - 19 Jan 2024</span>
          </div>
        </div>
        <div className="blog-post">
          <img src={APIstack} alt="Building your API stack" />
          <h3>Building your API stack</h3>
          <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
          <div className="author">
            <img src={person3} alt="Lana Steiner" />
            <span>Lana Steiner - 18 Jan 2024</span>
          </div>
        </div>
      </div>  
    </div>
    <div className="free-trial-section">
      <h1>Start your free trial</h1>
      <p>Join over 4,000+ startups already growing with Untitled.</p>
      <div>
        <button className="learn-more">Learn more</button>
        <button className="get-started">Get started</button>
      </div>
    
    </div>
    <footer className="footer">
      <div className="footer-section">
        <h4>Product</h4>
        <ul>
          <li>Overview</li>
          <li>Features</li>
          <li>Solutions <span className="new">New</span></li>
          <li>Tutorials</li>
          <li>Pricing</li>
          <li>Releases</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>News</li>
          <li>Media kit</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Events</li>
          <li>Help centre</li>
          <li>Tutorials</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Use cases</h4>
        <ul>
          <li>Startups</li>
          <li>Enterprise</li>
          <li>Government</li>
          <li>SaaS centre</li>
          <li>Marketplaces</li>
          <li>Ecommerce</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Social</h4>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>GitHub</li>
          <li>AngelList</li>
          <li>Dribbble</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Licenses</li>
          <li>Settings</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>  
    <div className="copyright">
    <img src={comapanyLogo} alt="Company Logo" className="company-logo" />
    <p>© 2077 Untitled UI. All rights reserved.</p>
    </div>




  </div>
    
  );
}

export default Home;

