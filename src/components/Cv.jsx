function PersonalInfoCv() {
  return (
    <div className="personal-info-wrapper">
      <h1>NAME NAME</h1>
      <div className="personal-info-contents">
        <h2>Email ❖</h2>
        <h2>Phone ❖</h2>
        <h2>Location ❖</h2>
        <h2>Portfolio</h2>
      </div>
    </div>
  );
}
function WorkCv() {
  return (
    <div className="personal-info-wrapper">
      <h3>Company name</h3>
      <h1>Job position</h1>
      <h2>Date start</h2>
      <h2>Date end</h2>
      <h2>Location</h2>
      <h2>Portfolio</h2>
    </div>
  );
}
function EducationCv() {
  return (
    <div className="personal-info-wrapper">
      <h1>CV</h1>
      <h1>NAME NAME</h1>
      <h2>Email</h2>
      <li>
        <h2>Certifications</h2>
        <h2>Skills</h2>
        <h2>Interests</h2>
      </li>
    </div>
  );
}

function SkillsCv() {
  return (
    <div className="personal-info-wrapper">
      <li>
        <h2>Certifications:</h2>
      </li>
      <li>
        <h2>Skills:</h2>
      </li>
      <li>
        <h2>Interests:</h2>
      </li>
    </div>
  );
}
function Cv() {
  return (
    <div className="cv-wrapper">
      <div className="section-wrapper">
        <PersonalInfoCv />
      </div>
      <div className="div-line"></div>
      <div className="section-wrapper">
        WORK
        <div className="div-line"></div>
        <WorkCv />
      </div>
      <div className="section-wrapper">
        EDUCATION
        <div className="div-line"></div>
        <EducationCv />
      </div>
      <div className="section-wrapper">
        CERTIFICATIONS, SKILLS & INTERESTS
        <div className="div-line"></div>
        <SkillsCv />
      </div>
    </div>
  );
}
export default Cv;
