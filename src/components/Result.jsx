import DisplayEducations from './Education/DisplayEducations';
import DisplayWorks from './Work/DisplayWorks';

function Result({ personal, educations, works }) {
  return (
    <section className='cv-result'>
      <div className='cv-header'>
        <h1>{personal.name}</h1>
        <div className='cv-contact'>
          <p>
            <span className='material-symbols-outlined'>mail</span>
            {personal.email}
          </p>
          <p>
            <span className='material-symbols-outlined'>call</span>
            {personal.phone}
          </p>
          <p>
            <span className='material-symbols-outlined'>pin_drop</span>
            {personal.address}
          </p>
        </div>
      </div>
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
