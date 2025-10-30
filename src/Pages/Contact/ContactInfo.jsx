import './ContactInfo.css';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Our Location",
      details: [
        "59/5 Pardeshi Pura, Indore",
      ],
      link: "#"
    },
    {
      icon: "fas fa-phone",
      title: "Phone Number",
      details: [
        "+91 9300688888",
      ],
      link: "tel:++91 9300688888"
    },
    {
      icon: "fas fa-envelope",
      title: "Email Address", 
      details: [
        "info@samratmasala.com",
        "support@samratmasala.com"
      ],
      link: "mailto:info@samratmasala.com"
    },
    {
      icon: "fas fa-clock",
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Sunday: Closed"
      ],
      link: "#"
    }
  ];

  return (
    <section className="contact-info space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="/img/theme-img/title_icon.svg" alt="icon" />
                Get In Touch
              </span>
              <h2 className="sec-title">We'd Love to Hear From You</h2>
              <p className="sec-text">
                Have questions about our products or want to place a bulk order? 
                Reach out to us through any of the following channels.
              </p>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          {contactDetails.map((contact, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="contact-info-card">
                <div className="contact-icon">
                  <i className={contact.icon}></i>
                </div>
                <h4 className="contact-title">{contact.title}</h4>
                <div className="contact-details">
                  {contact.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                {contact.link !== "#" && (
                  <a href={contact.link} className="contact-link">
                    Contact Now <i className="fas fa-arrow-right"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;