import './OurJourney.css';

const OurJourney = () => {
  const milestones = [
    {
      year: "—",
      title: "Foundation",
      description: "The foundation of Samrat Masale was established by Shri Shyamsundar Ji Vijayvergiya."
    },
    {
      year: "—",
      title: "A Pioneer in Packaged Spices",
      description: "At a time when households ground whole spices at home (masale ghar par taiyar kiye jate the), he introduced a high-quality, ready-to-use alternative."
    },
    {
      year: "—",
      title: "The Rise to Prominence",
      description: "Built steadily by upholding core values and earning the trust of families accustomed to home-ground blends."
    },
    {
      year: "—",
      title: "Hard Work and Dedication",
      description: "The business was built from the ground up through sheer effort and unwavering commitment."
    },
    {
      year: "—",
      title: "Pure and Unadulterated Quality",
      description: "Maintained purity and authentic flavor to rival the freshness and taste of home-ground blends."
    },
    {
      year: "—",
      title: "Market Transition and Growth",
      description: "Helped transition the market, making pre-packaged spices a trusted staple and laying the groundwork for future expansion."
    }
  ];

  return (
    <section className="journey-section space-bottom bg-smoke2 pb-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="/img/theme-img/title_icon.svg" alt="icon" />
                Our Journey
              </span>
              <h2 className="sec-title">The Rise to Prominence</h2>
            </div>
          </div>
        </div>

        <div className="journey-timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year" data-aos="fade-up">
                <span>{milestone.year}</span>
              </div>
              <div className="timeline-content" data-aos="fade-up">
                <h4 className="timeline-title">{milestone.title}</h4>
                <p className="timeline-text">{milestone.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;