const OurJourney = () => {
  const milestones = [
    {
      year: 'Foundation',
      title: 'The Beginning',
      text:
        'Started with a vision to bring authentic, high-quality Indian spices to every kitchen.',
      icon: '/images/index/fresh-spices-icon.png',
    },
    {
      year: 'Growth',
      title: 'Expanding Reach',
      text:
        'Strengthened sourcing, streamlined processing, and expanded our product range.',
      icon: '/images/index/icons8-certified.png',
    },
    {
      year: 'Today',
      title: 'Trusted Flavor',
      text:
        'A household name known for purity, consistency, and the true taste of Indian cuisine.',
      icon: '/images/index/icons8-chili-pepper-70.png',
    },
  ]

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="title-area text-center" data-aos="fade-up">
          <span className="sub-title">
            <img src="/images/icons/redheart.png" alt="Icon" loading="lazy" />
            Our Journey
          </span>
          <h2 className="sec-title">From Vision To Your Kitchen</h2>
        </div>

        <div className="row gy-4">
          {milestones.map((item, idx) => (
            <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="testi-card" style={{ height: '100%' }}>
                <div className="d-flex align-items-center" style={{ gap: 16, marginBottom: 12 }}>
                  <img src={item.icon} alt="icon" width={40} height={40} loading="lazy" />
                  <h4 className="mb-0">{item.title}</h4>
                </div>
                <p style={{ marginBottom: 8, color: 'var(--theme-color)' }}>{item.year}</p>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurJourney
