function PersonalInfo() {
  return (
    <>
      <h2>PERSONAL INFO</h2>
      <form action="">
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
        <label htmlFor="tel">
          Phone number
          <input type="tel" name="tel" id="tel" />
        </label>
        <label htmlFor="city">
          City name
          <input type="text" name="city" id="city" />
        </label>
        <label htmlFor="state">
          State/Province
          <input type="text" name="state" id="state" />
        </label>
        <input type="button" value="Submit" />
      </form>
    </>
  );
}
function WorkInfo() {
  return (
    <>
      <h2>WORK</h2>
      <form action="">
        <label htmlFor="name">
          Company name
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="role">
          Role/Job title
          <input type="text" name="role" id="role" />
        </label>
        <label htmlFor="started">
          Started working
          <input type="date" name="started" id="started" />
        </label>
        <label htmlFor="ended">
          Stopped working
          <input type="date" name="ended" id="ended" />
        </label>
        <label htmlFor="summary">
          Brief summary
          <textarea name="summary" id="summary"></textarea>
        </label>
        <input type="button" value="Add Company" />
        <input type="button" value="Submit" />
      </form>
    </>
  );
}

function EducationInfo() {
  return (
    <>
      <h2>EDUCATION</h2>
      <form action="">
        <label htmlFor="name">
          University&apos;s name
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="degree">
          Degree
          <input type="text" name="degree" id="degree" />
        </label>
        <label htmlFor="graduation">
          Graduation year
          <input type="date" name="graduation" id="graduation" />
        </label>
        <label htmlFor="summary">
          Brief summary
          <textarea name="summary" id="summary"></textarea>
        </label>
        <input type="button" value="Submit" />
      </form>
    </>
  );
}

function SkillsInfo() {
  return (
    <>
      <h2>CERTIFICATIONS, SKILLS, AND INTERESTS</h2>
      <form action="">
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
        <input type="button" value="Submit" />
      </form>
    </>
  );
}

function Form() {
  return (
    <div className="form-wrapper">
      <PersonalInfo />
      <WorkInfo />
      <EducationInfo />
      <SkillsInfo />
    </div>
  );
}
export default Form;
