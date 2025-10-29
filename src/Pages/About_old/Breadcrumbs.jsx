import { Link } from 'react-router-dom'

const Breadcrumbs = () => {
  return (
    <section className="bg-smoke2" style={{ padding: '60px 0', marginTop: "125px" }}>
      <div className="container">
        <div className="title-area text-center" data-aos="fade-up">
          <span className="sub-title">
            <img src="/images/icons/redheart.png" alt="Icon" loading="lazy" />
            About Us
          </span>
          <h1 className="sec-title">About Samrat Masala</h1>
          <div style={{ marginTop: 10 }}>
            <Link to="/">Home</Link>
            <span style={{ margin: '0 8px', color: 'var(--body-color)' }}>/</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumbs
