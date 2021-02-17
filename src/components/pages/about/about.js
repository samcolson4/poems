import './about.css'

const About = () => {
  return (
    <div>      
      <p>This is a project inspired by the layout of some poems in 'Just Us' by Claudia Rankine.</p>
      <p>This website is built by <a className="inline_link" href="http://colsondesign.com">Sam Colson</a></p>

      <br></br><br></br>
      <div id="links">
        <a className="inline_link" href="https://github.com/samcolson4/react-catan">GitHub repo</a> | <a className="inline_link" href="http://www.colsondesign.com">Project Portfolio</a> | <a className="inline_link" href="https://www.linkedin.com/samcolson">LinkedIn</a>
      </div>
    </div>
  );
}

export default About;
