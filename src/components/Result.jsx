import DisplayEducations from "./Education/displayEducations";

function Result({ educations }) {
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
        {/* <div className='cv-work'>
          <h1 className='cv-section-header'>Work Experience</h1>
          <div className='work-info'>
            <h3>{data.company}</h3>
            <p>{data.position}</p>
            <p>
              {data.dateFrom} - {data.dateTo}
            </p>
          </div>
          <p>{data.responsibilities}</p>
        </div> */}
      </div>
    </section>
  );
}

export { Result };
