import PropTypes from "prop-types";

function PersonalSection({
  name,
  lastName,
  email,
  phone,
  city,
  state,
  portfolio,
}) {
  return (
    <div className="personal-info-wrapper">
      <h1>{`${name + " " + lastName}`}</h1>
      <div className="personal-info-contents">
        <h2>{`${email}`} </h2>
        <div> ❖ </div>
        <h2>{`${phone}`}</h2>
        <div> ❖ </div>

        <h2>{`${city + ", " + state}`}</h2>
        <div> ❖ </div>

        <h2>
          <a href={`${portfolio}`}>Portfolio</a>
        </h2>
      </div>
      <div className="div-line"></div>
    </div>
  );
}

PersonalSection.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired,
};

function WorkSection({
  company,
  startedWorking,
  stoppedWorking,
  role,
  location,
  workSummary,
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
      <p>{`${workSummary}`}</p>
    </div>
  );
}
WorkSection.propTypes = {
  company: PropTypes.string.isRequired,
  startedWorking: PropTypes.string.isRequired,
  stoppedWorking: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  workSummary: PropTypes.string.isRequired,
};

function EducationSection({
  educationName,
  degree,
  graduationDate,
  educationLocation,
  educationSummary,
}) {
  return (
    <div className="personal-info-wrapper education-section">
      <h3>{`${educationName}`}</h3>
      <h4 className="justify-self-end">{`${graduationDate}`}</h4>
      <h4>
        <i>{`${degree}`}</i>
      </h4>
      <h4 className="justify-self-end">
        <i>{`${educationLocation}`}</i>
      </h4>
      <p>{`${educationSummary}`}</p>
    </div>
  );
}
EducationSection.propTypes = {
  educationName: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  graduationDate: PropTypes.string.isRequired,
  educationLocation: PropTypes.string.isRequired,
  educationSummary: PropTypes.string.isRequired,
};

function SkillsSection({ certs, skills, interests }) {
  return (
    <div className="personal-info-wrapper skills-section">
      <ul>
        <li>
          <h3>Certifications:</h3>
          <p>{`${certs}`}</p>
        </li>
        <li>
          <h3>Skills:</h3>
          <p>{`${skills}`}</p>
        </li>
        <li>
          <h3>Interests:</h3>
          <p>{`${interests}`}</p>
        </li>
      </ul>
    </div>
  );
}

SkillsSection.propTypes = {
  certs: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  interests: PropTypes.string.isRequired,
};

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
          workSummary={data.workSummary}
        />
      </div>
      <div className="section-wrapper">
        <h2>EDUCATION</h2>
        <div className="div-line"></div>
        <EducationSection
          educationName={data.educationName}
          degree={data.degree}
          location={data.location}
          graduationDate={data.graduationDate}
          educationLocation={data.educationLocation}
          educationSummary={data.educationSummary}
        />
      </div>
      <div className="section-wrapper">
        <h2>CERTIFICATIONS, SKILLS & INTERESTS</h2>
        <div className="div-line"></div>
        <SkillsSection
          certs={data.certs}
          skills={data.skills}
          interests={data.interests}
        />
      </div>
    </div>
  );
}

Cv.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Cv;
