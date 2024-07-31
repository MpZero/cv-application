import PropTypes from "prop-types";
import { forwardRef } from "react";
function PersonalSection({ ...data }) {
  return (
    <div className="personal-info-wrapper">
      <h1>{`${data.name + " " + data.lastName}`}</h1>
      <div className="personal-info-contents">
        <h2>{`${data.email}`} </h2>
        <div> ❖ </div>
        <h2>{`${data.phone}`}</h2>
        <div> ❖ </div>
        <h2>{`${data.personalLocation}`}</h2>
        <div> ❖ </div>
        <h2>
          <a href={`${data.portfolio}`}>Portfolio</a>
        </h2>
      </div>
      <div className="div-line"></div>
    </div>
  );
}

function WorkSection({ ...data }) {
  return (
    <div className="personal-info-wrapper work-section">
      <h3>{`${data.company}`}</h3>
      <div className="work-dates">
        <h4>{`${data.startedWorking}`}</h4>
        <h4>{`${data.stoppedWorking}`}</h4>
      </div>
      <h4>
        <i>{`${data.role}`}</i>
      </h4>
      <h4 className="justify-self-end">
        <i>{`${data.location}`}</i>
      </h4>
      <p>{`${data.workSummary}`}</p>
    </div>
  );
}

function EducationSection({ ...data }) {
  return (
    <div className="personal-info-wrapper education-section">
      <h3>{`${data.educationName}`}</h3>
      <h4 className="justify-self-end">{`${data.graduationDate}`}</h4>
      <h4>
        <i>{`${data.degree}`}</i>
      </h4>
      <h4 className="justify-self-end">
        <i>{`${data.educationLocation}`}</i>
      </h4>
      <p>{`${data.educationSummary}`}</p>
    </div>
  );
}

function SkillsSection({ ...data }) {
  return (
    <div className="personal-info-wrapper skills-section">
      <ul>
        <li>
          <h3>Certifications:</h3>
          <p>{`${data.certs}`}</p>
        </li>
        <li>
          <h3>Skills:</h3>
          <p>{`${data.skills}`}</p>
        </li>
        <li>
          <h3>Interests:</h3>
          <p>{`${data.interests}`}</p>
        </li>
      </ul>
    </div>
  );
}

const Cv = forwardRef(({ data }, ref) => {
  return (
    <div className="cv-content-wrapper" ref={ref}>
      <div className="section-wrapper personal-info-cv">
        <PersonalSection {...data} />
      </div>
      <div className="section-wrapper">
        <h2>WORK EXPERIENCE</h2>
        <div className="div-line"></div>
        <WorkSection {...data} />
      </div>
      <div className="section-wrapper">
        <h2>EDUCATION</h2>
        <div className="div-line"></div>
        <EducationSection {...data} />
      </div>
      <div className="section-wrapper">
        <h2>CERTIFICATIONS, SKILLS & INTERESTS</h2>
        <div className="div-line"></div>
        <SkillsSection {...data} />
      </div>
    </div>
  );
});

Cv.propTypes = {
  data: PropTypes.object.isRequired,
};
Cv.displayName = "Cv";
export default Cv;
