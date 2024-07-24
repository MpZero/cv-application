function PersonalInfo() {
  return (
    <div className="form-content-wrapper">
      <h2>PERSONAL INFO</h2>
      <label htmlFor="name">
        Name(s)
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="lastName">
        Last Name(s)
        <input type="text" name="lastName" id="lastName" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="phone">
        Phone number
        <input type="tel" name="phone" id="phone" />
      </label>
      <label htmlFor="city">
        City name
        <input type="text" name="city" id="city" />
      </label>
      <label htmlFor="state">
        State/Province
        <input type="text" name="state" id="state" />
      </label>
      <label htmlFor="portfolio">
        Portfolio link
        <input type="text" name="portfolio" id="portfolio" />
      </label>
    </div>
  );
}

function WorkInfo() {
  return (
    <div className="form-content-wrapper">
      <h2>WORK EXPERIENCE</h2>
      <label htmlFor="compName">
        Company name
        <input type="text" name="compName" id="compName" />
      </label>
      <label htmlFor="role">
        Role/Job title
        <input type="text" name="role" id="role" />
      </label>
      <label htmlFor="started">
        Started working
        <input type="date" name="started" id="started" />
      </label>
      <label htmlFor="stopped">
        Stopped working
        <input type="date" name="ended" id="stopped" />
      </label>
      <label htmlFor="workSummary">
        Brief summary
        <textarea name="summary" id="workSummary"></textarea>
      </label>
      <input type="button" value="Add another company" />
      {/* <input type="button" value="Submit" /> */}
    </div>
  );
}

function EducationInfo() {
  return (
    <div className="form-content-wrapper">
      <h2>EDUCATION</h2>
      <label htmlFor="uniName">
        University&apos;s name
        <input type="text" name="name" id="uniName" />
      </label>
      <label htmlFor="degree">
        Degree
        <input type="text" name="degree" id="degree" />
      </label>
      <label htmlFor="graduationDate">
        Graduation year
        <input type="date" name="graduationDate" id="graduation" />
      </label>
      <label htmlFor="eduSummary">
        Brief summary
        <textarea name="summary" id="eduSummary"></textarea>
      </label>
      {/* <input type="button" value="Submit" /> */}
    </div>
  );
}

function SkillsInfo() {
  return (
    <div className="form-content-wrapper">
      <h2>CERTIFICATIONS, SKILLS, AND INTERESTS</h2>
      <label htmlFor="certifications">
        Certifications
        <textarea name="certifications" id="certifications"></textarea>
      </label>
      <label htmlFor="skills">
        Skills
        <textarea name="skills" id="skills"></textarea>
      </label>
      <label htmlFor="interests">
        Interests
        <textarea name="interests" id="interests"></textarea>
      </label>
      {/* <input type="button" value="Submit" /> */}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Form({ handleEvent }) {
  return (
    <form action="" onChange={handleEvent} className="form">
      <PersonalInfo />
      <WorkInfo />
      <EducationInfo />
      <SkillsInfo />
    </form>
  );
}
export default Form;
