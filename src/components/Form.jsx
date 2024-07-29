import PropTypes from "prop-types";
import { useState } from "react";

function PersonalInfo({ data }) {
  const [isFormBodyVisible, setIsFormBodyVisible] = useState(true);

  const toggleFormBodyVisibility = () => {
    setIsFormBodyVisible(!isFormBodyVisible);
  };

  return (
    <div className="form-content-wrapper">
      <div className="form-header">
        <h2>PERSONAL INFO</h2>
        <Button onClick={toggleFormBodyVisibility} />
      </div>

      {isFormBodyVisible && (
        <div className="form-body">
          <label htmlFor="name">
            Name(s)
            <input type="text" name="name" id="name" defaultValue={data.name} />
          </label>
          <label htmlFor="lastName">
            Last Name(s)
            <input
              type="text"
              name="lastName"
              id="lastName"
              defaultValue={data.lastName}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={data.email}
            />
          </label>
          <label htmlFor="phone">
            Phone number
            <input
              type="tel"
              name="phone"
              id="phone"
              defaultValue={data.phone}
            />
          </label>
          <label htmlFor="personalLocation">
            Location
            <input
              type="text"
              name="personalLocation"
              id="personalLocation"
              defaultValue={data.personalLocation}
            />
          </label>

          <label htmlFor="portfolio">
            Portfolio link
            <input
              type="text"
              name="portfolio"
              id="portfolio"
              defaultValue={data.portfolio}
            />
          </label>
        </div>
      )}
    </div>
  );
}

PersonalInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

function WorkInfo({ data }) {
  const [isFormBodyVisible, setIsFormBodyVisible] = useState(true);

  const toggleFormBodyVisibility = () => {
    setIsFormBodyVisible(!isFormBodyVisible);
  };
  return (
    <div className="form-content-wrapper">
      <div className="form-header">
        <h2>WORK EXPERIENCE</h2>
        <Button onClick={toggleFormBodyVisibility} />
      </div>
      {isFormBodyVisible && (
        <div className="form-body">
          <label htmlFor="company">
            Company name
            <input
              type="text"
              name="company"
              id="company"
              defaultValue={data.company}
            />
          </label>
          <label htmlFor="role">
            Role/Job title
            <input type="text" name="role" id="role" defaultValue={data.role} />
          </label>
          <label htmlFor="startedWorking">
            Started working
            <input
              type="date"
              name="startedWorking"
              id="startedWorking"
              defaultValue={data.startedWorking}
            />
          </label>
          <label htmlFor="stoppedWorking">
            Stopped working
            <input
              type="date"
              name="stoppedWorking"
              id="stoppedWorking"
              defaultValue={data.stoppedWorking}
            />
          </label>
          <label htmlFor="location">
            Location
            <input
              type="text"
              name="location"
              id="location"
              defaultValue={data.location}
            />
          </label>
          <label htmlFor="workSummary">
            Brief summary
            <textarea
              name="workSummary"
              id="workSummary"
              defaultValue={data.workSummary}
            ></textarea>
          </label>
          <input type="button" value="Add another company" />
        </div>
      )}
    </div>
  );
}
WorkInfo.propTypes = {
  data: PropTypes.object.isRequired,
};
function EducationInfo({ data }) {
  const [isFormBodyVisible, setIsFormBodyVisible] = useState(true);

  const toggleFormBodyVisibility = () => {
    setIsFormBodyVisible(!isFormBodyVisible);
  };
  return (
    <div className="form-content-wrapper">
      <div className="form-header">
        <h2>EDUCATION</h2>
        <Button onClick={toggleFormBodyVisibility} />
      </div>
      {isFormBodyVisible && (
        <div className="form-body">
          <label htmlFor="educationName">
            University&apos;s name
            <input
              type="text"
              name="educationName"
              id="educationName"
              defaultValue={data.educationName}
            />
          </label>
          <label htmlFor="degree">
            Degree
            <input
              type="text"
              name="degree"
              id="degree"
              defaultValue={data.degree}
            />
          </label>
          <label htmlFor="graduationDate">
            Graduation year
            <input
              type="date"
              name="graduationDate"
              id="graduationDate"
              defaultValue={data.graduationDate}
            />
          </label>
          <label htmlFor="educationLocation">
            Location
            <input
              type="text"
              name="educationLocation"
              id="educationLocation"
              defaultValue={data.educationLocation}
            />
          </label>
          <label htmlFor="educationSummary">
            Brief summary
            <textarea
              name="educationSummary"
              id="educationSummary"
              defaultValue={data.educationSummary}
            ></textarea>
          </label>
        </div>
      )}
    </div>
  );
}
EducationInfo.propTypes = {
  data: PropTypes.object.isRequired,
};
function SkillsInfo({ data }) {
  const [isFormBodyVisible, setIsFormBodyVisible] = useState(true);

  const toggleFormBodyVisibility = () => {
    setIsFormBodyVisible(!isFormBodyVisible);
  };
  return (
    <div className="form-content-wrapper">
      <div className="form-header">
        <h2 className="h2-skills">CERTIFICATIONS, SKILLS, AND INTERESTS</h2>
        <Button onClick={toggleFormBodyVisibility} />
      </div>
      {isFormBodyVisible && (
        <div className="form-body">
          <label htmlFor="certs">
            Certifications
            <textarea
              name="certs"
              id="certs"
              defaultValue={data.certs}
            ></textarea>
          </label>
          <label htmlFor="skills">
            Skills
            <textarea
              name="skills"
              id="skills"
              defaultValue={data.skills}
            ></textarea>
          </label>
          <label htmlFor="interests">
            Interests
            <textarea
              name="interests"
              id="interests"
              defaultValue={data.interests}
            ></textarea>
          </label>
        </div>
      )}
    </div>
  );
}
SkillsInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

function Button({ onClick }) {
  const [btnName, setBtnName] = useState("hide");
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
        btnName === "hide" ? setBtnName("show") : setBtnName("hide");
      }}
    >
      {btnName}
    </button>
  );
}
Button.propTypes;
function Form({ data, handleEvent }) {
  return (
    <form action="" onChange={handleEvent} className="form">
      <PersonalInfo data={data} />
      <WorkInfo data={data} />
      <EducationInfo data={data} />
      <SkillsInfo data={data} />
    </form>
  );
}
Form.propTypes;

export default Form;
