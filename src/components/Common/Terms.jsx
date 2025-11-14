import './Terms.css'

const Terms = () => {
  const sections = [
    {
      title: 'Introduction',
      text: 'Welcome to Samrat Masala. By accessing or using our website, you agree to be bound by these Terms & Conditions.'
    },
    {
      title: 'Use of Website',
      text: 'You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.'
    },
    {
      title: 'Products & Content',
      text: 'Product images and descriptions are for representation. Actual packaging and appearance may vary.'
    },
    {
      title: 'Limitation of Liability',
      text: 'We are not liable for any indirect, incidental, or consequential damages arising from the use of our website.'
    },
    {
      title: 'Contact',
      text: 'For any questions regarding these Terms, please contact us at info@samratmasalaindia.com.'
    }
  ]

  return (
    <main className="terms-page">
      <section className="terms-hero breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Terms & Conditions</h1>
            <nav className="breadcrumb-nav">
              <a href="/">Home</a>
              <span className="divider">/</span>
              <span className="current">Terms & Conditions</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="/img/theme-img/title_icon.svg" alt="icon" />
                  Please read carefully
                </span>
                <h2 className="sec-title">Our Terms of Use</h2>
              </div>

              <div className="terms-content">
                {sections.map((s, i) => (
                  <div className="terms-block" key={i}>
                    <h5 className="terms-title">{s.title}</h5>
                    <p className="terms-text">{s.text}</p>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Terms
