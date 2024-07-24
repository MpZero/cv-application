// eslint-disable-next-line react/prop-types
function PersonalSection({ counter, name }) {
  return (
    <div className="personal-info-wrapper">
      <h1>{name}</h1>
      <h1>{counter}</h1>
      <div className="personal-info-contents">
        <h2>example@example.com ❖</h2>
        <h2>(15)1515-1515 ❖</h2>
        <h2>Location, LO ❖</h2>
        <h2>
          <a href="">Portfolio</a>
        </h2>
      </div>
      <div className="div-line"></div>
    </div>
  );
}
function WorkSection() {
  return (
    <div className="personal-info-wrapper work-section">
      <h3>Company name</h3>
      <div className="work-dates">
        <h4>Date start</h4>
        <h4>Date end</h4>
      </div>
      <h4>
        <i>Job position</i>
      </h4>
      <h4 className="justify-self-end">
        <i>Location</i>
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
      <li>
        <h3>Certifications:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non
          nesciunt maxime quo voluptatum blanditiis.
        </p>
      </li>
      <li>
        <h3>Skills:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non
          nesciunt maxime quo voluptatum blanditiis.
        </p>
      </li>
      <li>
        <h3>Interests:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non
          nesciunt maxime quo voluptatum blanditiis.
        </p>
      </li>
    </div>
  );
}

// const printPreview = () => {
//   console.log(window);
//   window.print(PersonalSection);
// };

// eslint-disable-next-line react/prop-types
function Cv({ counter, name }) {
  return (
    <div className="cv-content-wrapper">
      <div className="section-wrapper personal-info-cv">
        <PersonalSection counter={counter} name={name} />
      </div>
      <div className="section-wrapper">
        <h2>WORK EXPERIENCE</h2>
        <div className="div-line"></div>
        <WorkSection />
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
