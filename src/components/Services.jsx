function Services() {
  return (
    <>
  {/*  Services section starts */}
  <section className="section services" id="services">
    <div className="section-title">
      <h2>
        our <span>services</span>
      </h2>
    </div>
    <div className="section-center services-center">
      <article className="service">
        <span className="service-icon">
          <i className="fas fa-wallet fa-fw" />
        </span>
        <div className="service-info">
          <h4 className="service-title">saving money</h4>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores,
            officia.
          </p>
        </div>
      </article>
      <article className="service">
        <span className="service-icon">
          <i className="fas fa-tree fa-fw" />
        </span>
        <div className="service-info">
          <h4 className="service-title">endless hiking</h4>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores,
            officia.
          </p>
        </div>
      </article>
      <article className="service">
        <span className="service-icon">
          <i className="fas fa-socks fa-fw" />
        </span>
        <div className="service-info">
          <h4 className="service-title">amazing comfort</h4>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores,
            officia.
          </p>
        </div>
      </article>
    </div>
  </section>
  {/*  services section ends */}
</>

  );
}

export default Services;
