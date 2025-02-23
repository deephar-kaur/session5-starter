<>
  import {"{"} services {"}"} from '../data' import Title from './Title' import
  Service from './Service' const Services = () =&gt; {"{"}
  return (
  <section classname="section services" id="services">
    <title title="our" subtitle="services">
      &lt;div className='section-center services-center'&gt;
      {"{"}services.map((service) =&gt; {"{"}
      return &lt;Service {"{"}...service{"}"} key={"{"}service.id{"}"} /&gt;
      {"}"}){"}"}
      &lt;/div&gt; &lt;/section&gt; ){"}"}
      export default Services
    </title>
  </section>
</>
