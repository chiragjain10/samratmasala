import { Outlet, NavLink } from 'react-router-dom';
import './AboutLayout.css';

const AboutLayout = () => {
  const aboutLinks = [
    { path: 'profile', label: 'Company Profile' },
    { path: 'history-mission-vision', label: 'History, Mission & Vision' },
    { path: 'directors-desk', label: "Director's Desk" },
  ];

  return (
    <div className="about-layout">
      {/* Breadcrumb */}
      <section className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">About Us</h1>
            <nav className="breadcrumb-nav">
              <NavLink to="/">Home</NavLink>
              <span className="divider">/</span>
              <span className="current">About Us</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          {/* Sidebar Navigation */}
          <div className="col-lg-3">
            <div className="about-sidebar">
              <div className="sidebar-widget">
                <h3 className="widget-title">About Samrat Masala</h3>
                <ul className="sidebar-menu">
                  {aboutLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink 
                        to={link.path}
                        className={({ isActive }) => isActive ? 'active' : ''}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="sidebar-contact">
                <h4>Have Questions?</h4>
                <p>Our team is here to help</p>
                <a href="tel:+919300688888" className="th-btn">
                  <i className="fal fa-phone"></i> Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <div className="about-main-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;