import DisplayEducations from "./Education/displayEducations";
import DisplayWorks from "./Work/DisplayWorks";

function Result({ educations, works }) {
  return (
    <section className='cv-result'>
      {/* <div className='cv-header'>
        <h1>{data.name}</h1>
        <div className='cv-contact'>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
      </div> */}
      <div className='cv-body'>
        <div className='cv-education'>
          <h1 className='cv-section-header'>Education</h1>
          <DisplayEducations educations={educations} />
        </div>
        <div className='cv-work'>
          <h1 className='cv-section-header'>Work Experience</h1>
          <DisplayWorks works={works} />
        </div>
      </div>
    </section>
  );
}

export { Result };
