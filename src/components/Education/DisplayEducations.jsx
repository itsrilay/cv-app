export default function DisplayEducations({ educations }) {
  const listEducations = educations.map((education) => (
    <div className='education-info' key={education.id}>
      <div className='info-container'>
        <p>{education.studyDate}</p>
        <p>{education.location}</p>
      </div>
      <div className='info-container'>
        <p>
          <b>{education.schoolName}</b>
        </p>
        <p>{education.studyTitle}</p>
      </div>
    </div>
  ));

  return <>{listEducations}</>;
}
