import PropTypes from "prop-types";

const PersonalSection = ({
  name,
  lastName,
  email,
  phone,
  city,
  state,
  portfolio,
}) => {
  return (
    <div className="personal-info-wrapper">
      <h1>{`${name + " " + lastName}`}</h1>
      <div className="personal-info-contents">
        <h2>{`${email + " ❖ "}`} </h2>
        <h2>{`${phone + " ❖ "}`}</h2>
        <h2>{`${city + ", " + state + " ❖ "}`}</h2>
        <h2>
          <a href={`${portfolio}`}>Portfolio</a>
        </h2>
      </div>
      <div className="div-line"></div>
    </div>
  );
};

PersonalSection.propTypes;

WorkSection.propTypes = {
  company: PropTypes.object.isRequired,
  startedWorking: PropTypes.object.isRequired,
  stoppedWorking: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
function WorkSection({
  company,
  startedWorking,
  stoppedWorking,
  role,
  location,
}) {
  return (
    <div className="personal-info-wrapper work-section">
      <h3>{`${company}`}</h3>
      <div className="work-dates">
        <h4>{`${startedWorking}`}</h4>
        <h4>{`${stoppedWorking}`}</h4>
      </div>
      <h4>
        <i>{`${role}`}</i>
      </h4>
      <h4 className="justify-self-end">
        <i>{`${location}`}</i>
      </h4>
      <p>
        general info: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eos inventore voluptatibus in est hic eaque maxime consequatur
        repudiandae, nemo nisi fugiat enim provident autem aspernatur dolore
        possimus quae ullam. Corrupti.
      </p>
    </div>
  );
}
function EducationSection() {
  return (
    <div className="personal-info-wrapper education-section">
      <h3>University name</h3>
      <h4>date ended</h4>
      <h4>
        <i>degree</i>
      </h4>
      <h4 className="justify-self-end">
        <i>city/state</i>
      </h4>
      <p>
        general info: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Totam voluptatem quisquam minima quod amet! Sint aspernatur pariatur hic
        suscipit facere eius ratione quam omnis exercitationem. Quis excepturi
        enim voluptates repellendus.
      </p>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="personal-info-wrapper skills-section">
      <ul>
        <li>
          <h3>Certifications:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            non nesciunt maxime quo voluptatum blanditiis.
          </p>
        </li>
        <li>
          <h3>Skills:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            non nesciunt maxime quo voluptatum blanditiis.
          </p>
        </li>
        <li>
          <h3>Interests:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            non nesciunt maxime quo voluptatum blanditiis.
          </p>
        </li>
      </ul>
    </div>
  );
}

Cv.propTypes;

function Cv({ data }) {
  return (
    <div className="cv-content-wrapper">
      <div className="section-wrapper personal-info-cv">
        <PersonalSection
          name={data.name}
          lastName={data.lastName}
          email={data.email}
          phone={data.phone}
          city={data.city}
          state={data.state}
          portfolio={data.portfolio}
        />
      </div>
      <div className="section-wrapper">
        <h2>WORK EXPERIENCE</h2>
        <div className="div-line"></div>
        <WorkSection
          company={data.company}
          role={data.role}
          location={data.location}
          startedWorking={data.startedWorking}
          stoppedWorking={data.stoppedWorking}
          portfolio={data.portfolio}
        />
      </div>
      <div className="section-wrapper">
        <h2>EDUCATION</h2>
        <div className="div-line"></div>
        <EducationSection />
      </div>
      <div className="section-wrapper">
        <h2>CERTIFICATIONS, SKILLS & INTERESTS</h2>
        <div className="div-line"></div>
        <SkillsSection />
      </div>
    </div>
  );
}
export default Cv;
